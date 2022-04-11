<template>
  <header :class="isHeaderPositionAbsolute ? 'main-page-header' : ''">
    <div class="header-container">
      <div class="header-menu flex">
        <div class="manuLeft">
          <router-link class="header-logo" to="/">
            <img src="../assets/images/logo.svg" alt="Logo" />
          </router-link>
          <ul class="flex">
            <li>
              <router-link to="/my-choice">my choice</router-link>
            </li>
            <li>
              <router-link to>nutri 3.3 blending</router-link>
            </li>
          </ul>
        </div>
        <div class="manuRight">
          <div class="search-wrap-outer">
            <div
              class="search-wrap"
              :class="showMobSearch ? 'search-wrap-mob' : ''"
            >
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Enter your desired search term."
                  @click="getHistory"
                  v-model="sarchInput"
                />
                <router-link to @click="getSearch">
                  <i class="icon-search-black"></i>
                </router-link>
              </div>
              <div
                class="header-search-data"
                :class="activeSearch ? 'activeSearch' : ''"
              >
                <div class="search-data-inner">
                  <template v-if="searchData.length > 0">
                    <ul>
                      <li v-for="(item, index) in searchData" :key="index">
                        <router-link to class="search-title" @click="getSearchFromHistory">{{
                          item.search_data
                        }}</router-link>
                        <router-link
                          to
                          class="search-item-close"
                          @click="deleteHistory(item.id)"
                        >
                          <i class="icon-close-search"></i>
                        </router-link>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <div class="no-search-data">
                      <p>There are no recent searches.</p>
                    </div>
                  </template>
                </div>
                <div class="delete-close">
                  <router-link to @click="deleteAllHistory">
                    <i class="icon-delete"></i>Delete all
                  </router-link>
                  <router-link to @click="toCloseBtn">to close</router-link>
                </div>
              </div>
            </div>
            <router-link
              to
              class="mobile-search-icon"
              :class="showMobSearch ? 'icon-show' : ''"
              @click="showMobSearchF"
            >
              <i class="icon-search-black"></i>
            </router-link>
          </div>
          <template v-if="this.logedInUserDetails">
            <div class="after-login-dropdown flex items-center">
              <div class="dropdown">
                <button class="dropbtn">
                  <i class="login-icon"></i>
                  {{ userDetails.name }}
                </button>
                <div class="dropdown-content">
                  <router-link to>Change of personal information</router-link>
                  <router-link to @click="logOut()">Log out</router-link>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link to="/login" class="login-item">login</router-link>
          </template>

          <div class="header-dropdown">
            <vue-select
              :options="['EN', 'KO']"
              placeholder="EN"
              close-on-select
            ></vue-select>
          </div>
          <router-link to class="menu-toggle" @click="sideMenuOpen">
            <img src="../assets/images/menu-toggle.png" alt />
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <div class="right-menu-screen" :class="{ active: active }">
    <div class="top-box right-small-box">
      <div class="black-box"></div>
      <div class="white-box">
        <div class="closeMenu" @click="active = !active">
          <router-link to>
            <img src="/src/assets/icons/menu-close.svg" />
          </router-link>
        </div>
        <ul class="right-menu-items">
          <li
            v-for="(item, index) of rightMenuItem"
            :key="index"
            @click="activeSubmenu = activeSubmenu == index ? '' : index"
          >
            <div class="side-menu-heading">
              <template v-if="token && index == 0">
                <router-link to :class="token ? 'login-item' : ''"
                  >{{ userDetails.name }}
                </router-link>
                <i class="icon-leftArw"></i>
              </template>
              <router-link to v-else @click="index == 0 ? goToLogin() : ''">{{
                item.mainItem
              }}</router-link>
              <i
                class="icon-menu-downArw"
                :class="
                  item.subItemData && item.subItemData.length ? '' : 'no-arrow'
                "
              ></i>
            </div>
            <div
              class="side-menu-list"
              :class="activeSubmenu === index ? 'activeSubmenu' : ''"
            >
              <router-link
                to
                @click="onClickLink(item.link)"
                v-for="(item, index2) of item.subItemData"
                :key="index2"
                >{{ item.label }}</router-link
              >
            </div>
          </li>
        </ul>
        <ul class="side-menu-language">
          <li><router-link to>KO</router-link></li>
          <li><router-link to>EN</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <Modal
    v-show="isModalVisible"
    @close="closeModal"
    bodytext1="This service requires login."
    bodytext2="Please use the service after logging in."
    btnText1="Cancel"
    btnText2="Login"
    link="/login"
  />
  <div
    :class="activeSearch ? 'overlay-click-out-side' : ''"
    @click="activeSearch = false"
  ></div>
</template>

<script>
import VueNextSelect from "vue-next-select";
import { inject } from "vue";
import PersonalInfoService from "../services/PersonalInfoService";
import CommonService from "../services/CommonService";
import Modal from "./Modal.vue";
export default {
  name: "Header",
  components: {
    "vue-select": VueNextSelect,
    Modal,
  },
  data() {
    return {
      token: localStorage.token ? true : false,
      userId: this.common.state.userId,
      userDetails: "",
      logedInUserDetails: false,
      active: false,
      activeSearch: false,
      isModalVisible: false,
      activeSubmenu: false,
      showMobSearch: false,
      sarchInput: "",
      myIp: "",
      rightMenuItem: [
        {
          mainItem: "Login",
        },
        {
          mainItem: "nutri 3.3",
          subItemData: [
            {
              label: "About Us",
              link: "/about-us",
            },
            {
              label: "my choice",
              link: "/",
            },
            {
              label: "nutri 3.3 blending",
              link: "/",
            },
            {
              label: "Sample making guide",
              link: "/",
            },
          ],
        },
        {
          mainItem: "ONLY ONE",
          subItemData: [
            {
              label: "raw material storage box",
              link: "/",
            },
            {
              label: "my recipe",
              link: "/",
            },
            {
              label: "my application",
              link: "/",
            },
          ],
        },
        {
          mainItem: "CUSTOMER CENTER",
          subItemData: [
            {
              label: "Notice",
              link: "/notice",
            },
            {
              label: "FAQ",
              link: "/faq",
            },
            {
              label: "1:1 inquiry",
              link: "/inquiry",
            },
          ],
        },
      ],
      searchData: [],
      AllSearchId: [],
      // SearchHistoryTitle: [],
    };
  },
  setup() {
    const common = inject("common");
    return { common };
  },
  created() {
    this.personalInfoService = new PersonalInfoService();
    this.commonService = new CommonService();
  },
  mounted() {
    if (localStorage.token) {
      this.logedInUserDetails = true;
      this.get;
    } else {
      this.logedInUserDetails = false;
    }
    this.getUserInfo();
    this.getIp();
  },
  methods: {
    showMobSearchF() {
      this.showMobSearch = true;
      this.activeSearch = true;
    },
    toCloseBtn() {
      this.showMobSearch = false;
      this.activeSearch = false;
    },
    changeLanguage() {},
// logout
    logOut() {
      if (this.logedInUserDetails) {
        localStorage.clear();
        window.location = "/login";
      }
    },
    closeModal() {
      this.isModalVisible = false;
    },
    // side menu restriction before login
    onClickLink(link) {
      if (this.logedInUserDetails) {
        this.$router.push(link);
        this.active = false;
      } else if (link == "/about-us" || link == "/faq") {
        this.$router.push(link);
        this.active = false;
      } else {
        this.isModalVisible = true;
        this.active = false;
      }
    },
    goToLogin() {
      this.$router.push("/login");
      this.active = false;
    },
    sideMenuOpen() {
      this.active = true;
    },
    // user details
    getUserInfo() {
      if (this.userId) {
        this.personalInfoService.getPersonalData(this.userId).then((res) => {
          this.userDetails = res.data.data[0];
        });
      }
    },

    // search API
    getIp() {
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then(({ ip }) => {
          this.myIp = ip;
        });
    },
    // search api (main)
    getSearch() {
      if (this.sarchInput == "") {
        this.$swal("Please add searchData");
      } else {
        this.commonService
          .getSearchResult(this.sarchInput, this.myIp)
          .then((res) => {
            if (res.status == 200) {
              this.common.state.SearchResult = res.data.data.search;
              this.$router.push("/search-result");
              this.showMobSearch = false;
              this.activeSearch = false;
              this.sarchInput = "";
            }
          });
      }
    },
    // get search history
    getHistory() {
      this.commonService
        .getSearchHistory(this.myIp)
        .then((res) => {
          this.activeSearch = true;
          if (res.data.data.length > 0) {
            this.searchData = res.data.data;
          }
        })
        .catch((err) => {
          this.searchData = [];
          return false;
        });
    },
    // search with saerch history
    getSearchFromHistory() {
      this.searchData.map((value) => {
        return this.commonService
          .getSearchResult(value.search_data, this.myIp)
          .then((res) => {
            if (res.status == 200) {
              this.common.state.SearchResult = res.data.data.search;
              this.$router.push("/search-result");
              this.showMobSearch = false;
              this.activeSearch = false;
              this.sarchInput = "";
            }
          });
      });
    },
    // delete single search history itema
    deleteHistory(searchId) {
      this.commonService.deleteSearchHistory(searchId).then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          this.getHistory();
        }
      });
    },
    // delete all search history itema
    deleteAllHistory() {
      this.commonService
        .deleteAllHistory(this.myIp)
        .then((res) => {
          this.getHistory();
        })
        .catch((err) => {
          return false;
        });
    },
  },
  computed: {
    isHeaderPositionAbsolute() {
      return this.$route.name == "Main";
    },
    showHeader() {
      return this.$route.name != "mobile-search";
    },
  },
};
</script>
