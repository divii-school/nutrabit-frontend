<template>
  <template v-if="showHeader">
    <header :class="isHeaderPositionAbsolute ? 'main-page-header' : ''">
      <div class="header-container">
        <p>{{ username }}</p>
        <div class="header-menu flex">
          <div class="manuLeft">
            <router-link class="header-logo" to="/">
              <img src="../assets/images/logo.svg" alt="Logo" />
            </router-link>
            <ul class="flex">
              <li><router-link to="">my choice</router-link></li>
              <li><router-link to="">nutri 3.3 blending</router-link></li>
              <!-- this is for testing purpose only -->
              <li>
                <router-link to="/personal-information"
                  >Personal Info</router-link
                >
              </li>
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
                <router-link to=""
                  ><i class="icon-search-black"></i
                ></router-link>
              </div>
              <div
                class="header-search-data"
                :class="activeSearch ? 'activeSearch' : ''"
              >
                <div class="search-data-inner">
                  <ul>
                    <li>
                      <p>muscular system</p>
                      <router-link to=""
                        ><i class="icon-close-search"></i
                      ></router-link>
                    </li>
                    <li>
                      <p>aloe</p>
                      <router-link to=""
                        ><i class="icon-close-search"></i
                      ></router-link>
                    </li>
                    <li>
                      <p>nervous system</p>
                      <router-link to=""
                        ><i class="icon-close-search"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
                <div class="delete-close">
                  <router-link to=""
                    ><i class="icon-delete"></i>Delete all</router-link
                  >
                  <router-link to="" @click="activeSearch = false"
                    >to close</router-link
                  >
                </div>
              </div>
            </div>
            <!-- <p>{{this.logedInUserDetails}}</p> -->
            <div
              class="after-login-dropdown flex items-center"
              v-if="this.logedInUserDetails"
            >
              <div class="dropdown">
                <button class="dropbtn">
                  <i class="login-icon"></i>{{ username }}
                </button>
                <div class="dropdown-content">
                  <router-link to=""
                    >Change of personal information</router-link
                  >
                  <router-link to="" @click="logOut()">Log out</router-link>
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
              >
              </vue-select>
            </div>
            <router-link
              to="/mobile-search"
              class="mobile-search flex items-center justify-center"
            >
              <i class="icon-mobile-search"></i>
            </router-link>

            <router-link
              to=""
              class="menu-toggle"
              @click="sideMenuOpen"
              :aria-pressed="active ? 'true' : 'false'"
            >
              <img src="../assets/images/menu-toggle.png" alt="" />
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
        <router-link to="" :class="activeSearch ? 'activeSearchIcon' : ''"
          ><i class="icon-mobile-search"></i
        ></router-link>
      </div>
      <div
        class="header-search-data"
        :class="activeSearch ? 'activeSearch' : ''"
      >
        <div class="search-data-inner">
          <ul>
            <li>
              <p>muscular system</p>
              <router-link to=""><i class="icon-close-search"></i></router-link>
            </li>
            <li>
              <p>aloe</p>
              <router-link to="" ><i class="icon-close-search"></i></router-link>
            </li>
            <li>
              <p>nervous system</p>
              <router-link to="" ><i class="icon-close-search"></i></router-link>
            </li>
          </ul>
          <!-- <div class="no-search-data">
            <p>There are no recent searches.</p>
          </div> -->
        </div>
        <div class="delete-close">
          <router-link to="" ><i class="icon-delete"></i>Delete all</router-link>
          <router-link to=""  @click="activeSearch = false">to close</router-link>
        </div>
      </div>
    </div>
  </template>
  <div
    class="right-menu-screen"
    :class="{ active: active }"
    v-if="this.logedInUserDetails"
  >
    <div class="top-box right-small-box">
      <div
        class="closeMenu"
        @click="active = !active"
        :aria-pressed="active ? 'true' : 'false'"
      >
        <router-link href="javascript:void(0)"
          ><img src="/src/assets/icons/menu-close.svg"
        /></router-link>
      </div>

      <div class="black-box"></div>
      <div class="white-box">
        <ul class="right-menu-items">
          <li
            v-for="(item, index) in rightMenuItem"
            :key="index"
            @click="activeSubmenu = activeSubmenu == index ? '' : index"
          >
            <div class="side-menu-heading">
              <a
                href="#"
                :text="
                  typeof this.logedInUserDetails !== 'undefined' &&
                  this.logedInUserDetails.name &&
                  index == 0
                    ? this.logedInUserDetails.name
                    : item.mainItem
                "
                >{{ item.mainItem }}</a
              >
              <i
                class="icon-menu-downArw"
                :class="
                  typeof item.subItemData !== 'undefined' &&
                  item.subItemData.length
                    ? ''
                    : 'no-arrow'
                "
              ></i>
            </div>
            <div
              class="side-menu-list"
              v-for="(item, index2) in item.subItemData"
              :key="index2"
              :class="activeSubmenu === index ? 'activeSubmenu' : ''"
            >
              <router-link href="javascript:void(0)">{{ item.subItem1 }}</router-link>
              <router-link href="javascript:void(0)">{{ item.subItem2 }}</router-link>
              <router-link href="javascript:void(0)">{{ item.subItem3 }}</router-link>
              <router-link href="javascript:void(0)">{{ item.subItem4 }}</router-link>
            </div>
          </li>
        </ul>
        <ul class="side-menu-language">
          <li><router-link href="">KO</router-link></li>
          <li><router-link href="">EN</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
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
import Modal from "./Modal.vue";
export default {
  name: "Header",
  components: {
    "vue-select": VueNextSelect,
    Modal,
  },

  data() {
    return {
      username: this.common.state.name,
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
              subItem1: "About Us",
              subItem2: "my choice",
              subItem3: "nutri 3.3 blending",
              subItem4: "Sample making guide",
            },
          ],
        },
        {
          mainItem: "ONLY ONE",
          subItemData: [
            {
              subItem1: "raw material storage box",
              subItem2: "my recipe",
              subItem3: "my application",
            },
          ],
        },
        {
          mainItem: "CUSTOMER CENTER",
          subItemData: [
            {
              subItem1: "Notice",
              subItem2: "FAQ",
              subItem3: "1:1 inquiry",
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
  methods: {
    activeSideMenu(event) {
      if (event.target.className == "right-menu-screen") {
        event.target.className = "active";
      } else {
        event.target.className = "right-menu-screen";
      }
    },
    changeLanguage() {},
    logOut() {
      if (this.logedInUserDetails) {
        localStorage.removeItem("logedInUserDetails");
        window.location = "/login";
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    sideMenuOpen() {
      if (this.logedInUserDetails) {
        this.active = true;
      } else {
        this.showModal();
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
  mounted() {
    if (localStorage.getItem("token")) {
      this.logedInUserDetails = true;
    } else {
      this.logedInUserDetails = false;
    }
  },
};
</script>
