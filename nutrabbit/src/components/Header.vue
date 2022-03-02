<template>
  <header>
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
            <i class="icon-search-black"></i>
          </div>
          <a href="" class="login-item">login</a>
          <div class="header-dropdown">
            <vue-select :options="['EN', 'KO']" placeholder="EN"> </vue-select>
          </div>
          <a
            href="javascript:void(0)"
            class="menu-toggle"
            v-on:click="sidemenu"
          >
            <img src="../assets/images/menu-toggle.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
  <div class="right-menu-screen" :class="[isActive ? active : '']">
    <div class="top-box right-small-box">
      <div class="mob-close">
        <a href="javascript:void(0)"><img src="assets/images/cross.png" /></a>
      </div>

      <div class="black-box"></div>
      <div class="white-box">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="solution.html">Solution</a></li>
          <li><a href="partners.html">Partners</a></li>
          <li><a href="news.html">News</a></li>
          <li><a href="contact.html">Contact</a></li>
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
      isActive: false,
    };
  },
  methods: {
    sidemenu: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>
 


