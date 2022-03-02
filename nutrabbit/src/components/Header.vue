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
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">nutri 3.3</a>
          </li>
          <li>
            <a href="#">ONLY ONE</a>
          </li>
          <li>
            <a href="#">CUSTOMER CENTER</a>
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
  },
};
</script>

 


