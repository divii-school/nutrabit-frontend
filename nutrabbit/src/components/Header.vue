<template>
  <header>
    <div class="container-big">
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
          <a href="javascript:void(0)" class="login-item">login</a>
          <div class="header-dropdown">
            <vue-select :options="['EN', 'KO']" placeholder="EN"> </vue-select>
          </div>
          <a href="javascript:void(0)" class="menu-toggle">
            <img src="../assets/images/menu-toggle.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import VueNextSelect from "vue-next-select";
export default {
  name: "Header",
  components: {
    "vue-select": VueNextSelect,
  },
};
</script>
 


