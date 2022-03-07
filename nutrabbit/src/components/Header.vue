<template>
  <header :class="isHeaderPositionAbsolute ? 'main-page-header' : '' ">
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
            <input type="text" placeholder="Enter your desired search term." />
            <a href=""><i class="icon-search-black"></i></a>
          </div>
          <a href="" class="login-item">login</a>
          <div class="header-dropdown">
            <vue-select :options="['EN', 'KO']" placeholder="EN" close-on-select> </vue-select>
          </div>

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
    };
  },
  methods: {
    activeLink(event) {
      if (event.target.className == "right-menu-screen") {
        event.target.className = "active";
      } else {
        event.target.className = "right-menu-screen";
      }
    },
    changeLanguage(){
       
    }
  },
    computed: {
    isHeaderPositionAbsolute() {
      return this.$route.name=='main';
    },
  },
};
</script>
