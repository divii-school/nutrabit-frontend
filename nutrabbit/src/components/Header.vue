<template>
  <template v-if="showHeader">
    <header :class="isHeaderPositionAbsolute ? 'main-page-header' : ''">
      <div class="header-container">
        <div class="header-menu flex">
          <div class="manuLeft">
            <router-link class="header-logo" to="/">
              <img src="../assets/images/logo.svg" alt="Logo" />
            </router-link>
            <ul class="flex">
              <li>
                <router-link to>my choice</router-link>
              </li>
              <li>
                <router-link to>nutri 3.3 blending</router-link>
              </li>
              <!-- this is for testing purpose only -->
              <!-- <li>
                <router-link to="/personal-information"
                  >Personal Info</router-link
                >
              </li> -->
            </ul>
          </div>
          <div class="manuRight">
            <div class="search-wrap">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Enter your desired search term."
                  @click="activeSearch = true"
                />
                <router-link to>
                  <i class="icon-search-black"></i>
                </router-link>
              </div>
              <div
                class="header-search-data"
                :class="activeSearch ? 'activeSearch' : ''"
              >
                <div class="search-data-inner">
                  <ul>
                    <li>
                      <p>muscular system</p>
                      <router-link to>
                        <i class="icon-close-search"></i>
                      </router-link>
                    </li>
                    <li>
                      <p>aloe</p>
                      <router-link to>
                        <i class="icon-close-search"></i>
                      </router-link>
                    </li>
                    <li>
                      <p>nervous system</p>
                      <router-link to>
                        <i class="icon-close-search"></i>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="delete-close">
                  <router-link to>
                    <i class="icon-delete"></i>Delete all
                  </router-link>
                  <router-link to @click="activeSearch = false"
                    >to close</router-link
                  >
                </div>
              </div>
            </div>
            <div
              class="after-login-dropdown flex items-center"
              v-if="this.logedInUserDetails"
            >
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
            <router-link to="/login" class="login-item" v-else
              >login</router-link
            >

            <div class="header-dropdown">
              <vue-select
                :options="['EN', 'KO']"
                placeholder="EN"
                close-on-select
              ></vue-select>
            </div>
            <router-link
              to="/mobile-search"
              class="mobile-search flex items-center justify-center"
            >
              <i class="icon-mobile-search"></i>
            </router-link>

            <router-link to class="menu-toggle" @click="sideMenuOpen">
              <img src="../assets/images/menu-toggle.png" alt />
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </template>
  <template v-else>
    <div class="search-wrap mobile-search-wrap">
      <div class="input-group">
        <input
          type="text"
          placeholder="Enter your desired search term."
          @click="activeSearch = true"
          :class="activeSearch ? 'activeSearchInput' : ''"
        />
        <router-link to :class="activeSearch ? 'activeSearchIcon' : ''">
          <i class="icon-mobile-search"></i>
        </router-link>
      </div>
      <div
        class="header-search-data"
        :class="activeSearch ? 'activeSearch' : ''"
      >
        <div class="search-data-inner">
          <ul>
            <li>
              <p>muscular system</p>
              <router-link to>
                <i class="icon-close-search"></i>
              </router-link>
            </li>
            <li>
              <p>aloe</p>
              <router-link to=""><i class="icon-close-search"></i></router-link>
            </li>
            <li>
              <p>nervous system</p>
              <router-link to=""><i class="icon-close-search"></i></router-link>
            </li>
          </ul>
          <!-- <div class="no-search-data">
            <p>There are no recent searches.</p>
          </div>-->
        </div>
        <div class="delete-close">
          <router-link to=""><i class="icon-delete"></i>Delete all</router-link>
          <router-link to="" @click="activeSearch = false"
            >to close</router-link
          >
        </div>
      </div>
    </div>
  </template>
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
              <router-link to v-if="token && index == 0"
                >{{ userDetails.name }} <i class="icon-leftArw"></i
              ></router-link>
              <router-link to v-else>{{ item.mainItem }}</router-link>
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
              <router-link to
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
  <div>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      bodytext1="This service requires login."
      bodytext2="Please use the service after logging in."
      btnText1="cancellation"
      btnText2="log in"
      link="/login"
    />
  </div>
</template>
<script>
import VueNextSelect from "vue-next-select";
import { inject } from "vue";
import PersonalInfoService from "../services/PersonalInfoService";
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
      rightMenuItem: [
        {
          mainItem: "Login",
        },
        {
          mainItem: "nutri 3.3",
          subItemData: [
            {
              label: "About Us",
              link: "/login",
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
              link: "/",
            },
            {
              label: "FAQ",
              link: "/",
            },
            {
              label: "1:1 inquiry",
              link: "/",
            },
          ],
        },
      ],
    };
  },
  setup() {
    const common = inject("common");
    return { common };
  },
  created() {
    this.personalInfoService = new PersonalInfoService();
  },
  mounted() {
    if (localStorage.token) {
      this.logedInUserDetails = true;
    } else {
      this.logedInUserDetails = false;
    }
    this.getUserInfo();
  },
  methods: {
    changeLanguage() {},
    logOut() {
      if (this.logedInUserDetails) {
        localStorage.clear();
        window.location = "/login";
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    onClickLink(link) {
      console.log("link", link);
      if (this.userId) {
        this.isModalVisible = true;
        this.$router.push(link)
      }
    },
    sideMenuOpen() {
      this.active = true;
      // if (this.logedInUserDetails) {
      //   this.active = true;
      // } else {
      //   this.showModal();
      // }
    },
    getUserInfo() {
      if (this.userId) {
        this.personalInfoService.getPersonalData(this.userId).then((res) => {
          console.log("userDetails res", res.data.data[0]);
          this.userDetails = res.data.data[0];
        });
      }
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
