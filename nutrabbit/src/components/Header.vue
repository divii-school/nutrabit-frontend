<template>
  <header>
    <div class="container-big">
      <div class="header-menu flex">
        <div class="manuLeft">
          <a href="#" class="header-logo">
            <img src="../assets/images/logo.svg" alt="Logo" />
          </a>
          <ul class="flex">
            <li><a href="#">my choice</a></li>
            <li><a href="#">nutri 3.3 blending</a></li>
          </ul>
        </div>
        <div class="manuRight">
          <div class="search-wrap">
            <input type="text" placeholder="Enter your desired search term." />
            <i class="icon-search-black"></i>
          </div>
          <a href="" class="login-item">login</a>
          <div class="dropdown">
            <a href="javascript:void(0)">
              <span>EN</span>
              <i class="icon-arrow-down-solid"></i>
            </a>
            <div class="dropdown-menu" style="display: none">
              <a class="dropdown-item" href="javascript:void(0)">KR</a>
              <a class="dropdown-item" href="javascript:void(0)">EN</a>
            </div>
          </div>
          <a href="" class="menu-toggle">
            <img src="../assets/images/menu-toggle.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
 


