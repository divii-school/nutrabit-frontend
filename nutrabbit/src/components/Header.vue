<template>
  <template v-if="showHeader">
    <header :class="isHeaderPositionAbsolute ? 'main-page-header' : ''">
      <div class="header-container">
        <div class="header-menu flex">
          <div class="manuLeft">
            <a href="javascript:void(0)" class="header-logo">
              <img src="../assets/images/logo.svg" alt="Logo" />
            </a>
            <ul class="flex">
              <li><a href="javascript:void(0)">my choice</a></li>
              <li><a href="javascript:void(0)">nutri 3.3 blending</a></li>
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
                <a href="#"><i class="icon-search-black"></i></a>
              </div>
              <div
                class="header-search-data"
                :class="activeSearch ? 'activeSearch' : ''"
              >
                <div class="search-data-inner">
                  <ul>
                    <li>
                      <p>muscular system</p>
                      <a href="#"><i class="icon-close-search"></i></a>
                    </li>
                    <li>
                      <p>aloe</p>
                      <a href="#"><i class="icon-close-search"></i></a>
                    </li>
                    <li>
                      <p>nervous system</p>
                      <a href="#"><i class="icon-close-search"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="delete-close">
                  <a href="#"><i class="icon-delete"></i>Delete all</a>
                  <a href="#" @click="activeSearch = false">to close</a>
                </div>
              </div>
            </div>
            <!-- <a href="" class="login-item">login</a> -->
            <div class="after-login-dropdown flex items-center">
              <div class="dropdown">
                <button class="dropbtn">
                  <i class="login-icon"></i>rabbit123 님
                </button>
                <div class="dropdown-content">
                  <a href="#">Change of personal information</a>
                  <a href="#">Log out</a>
                </div>
              </div>
            </div>
            <div class="header-dropdown">
              <vue-select
                :options="['EN', 'KO']"
                placeholder="EN"
                close-on-select
              >
              </vue-select>
            </div>
            <a class="mobile-search flex items-center justify-center" href=""
              ><i class="icon-mobile-search"></i
            ></a>
            <a
              href="#"
              class="menu-toggle"
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
            >
              <img src="../assets/images/menu-toggle.png" alt="" />
            </a>
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
        />
        <a href="#"><i class="icon-mobile-search"></i></a>
      </div>
      <div
        class="header-search-data"
        :class="activeSearch ? 'activeSearch' : ''"
      >
        <div class="search-data-inner">
          <ul>
            <li>
              <p>muscular system</p>
              <a href="#"><i class="icon-close-search"></i></a>
            </li>
            <li>
              <p>aloe</p>
              <a href="#"><i class="icon-close-search"></i></a>
            </li>
            <li>
              <p>nervous system</p>
              <a href="#"><i class="icon-close-search"></i></a>
            </li>
          </ul>
        </div>
        <div class="delete-close">
          <a href="#"><i class="icon-delete"></i>Delete all</a>
          <a href="#" @click="activeSearch = false">to close</a>
        </div>
      </div>
    </div>
  </template>
  <div class="right-menu-screen" :class="{ active: active }">
    <div class="top-box right-small-box">
      <div
        class="closeMenu"
        @click="active = !active"
        :aria-pressed="active ? 'true' : 'false'"
      >
        <a href="javascript:void(0)"
          ><img src="/src/assets/icons/menu-close.svg"
        /></a>
      </div>

      <div class="black-box"></div>
      <div class="white-box">
        <ul>
          <li class="with-login-tip">
            <i class="icon-login-tip login-tip"></i>
            <div class="side-menu-heading">
              <a href="#">Login</a>
            </div>
          </li>
          <li>
            <div class="side-menu-heading">
              <a href="#">nutri 3.3</a>
            </div>
            <div class="side-menu-list">
              <a href="javascript:void(0)">About Us</a>
              <a href="javascript:void(0)">my choice</a>
              <a href="javascript:void(0)">nutri 3.3 blending</a>
              <a href="javascript:void(0)">Sample making guide</a>
            </div>
          </li>
          <li>
            <div class="side-menu-heading">
              <a href="#" class="active">ONLY ONE</a>
            </div>
            <div class="side-menu-list">
              <a class="active" href="javascript:void(0)"
                >raw material storage box</a
              >
              <a href="javascript:void(0)">my recipe</a>
              <a href="javascript:void(0)">my application</a>
            </div>
          </li>
          <li>
            <div class="side-menu-heading">
              <a href="#">CUSTOMER CENTER</a>
            </div>
            <div class="side-menu-list">
              <a href="javascript:void(0)">Notice</a>
              <a href="javascript:void(0)">FAQ</a>
              <a href="javascript:void(0)">1:1 inquiry</a>
            </div>
          </li>
          <li class="side-menu-language">
            <ul class="flex">
              <li><a href="">KO</a></li>
              <li><a href="">EN</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import VueNextSelect from "vue-next-select";
export default {
  name: "Header",
  components: {
    "vue-select": VueNextSelect,
  },

  data() {
    return {
      active: false,
      activeSearch: false,
    };
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
  },
  computed: {
    isHeaderPositionAbsolute() {
      return this.$route.name == "main";
    },
    showHeader() {
      return this.$route.name != "mobile-search";
    },
  },
};
</script>
