<template>
  <header>
    <div class="container-big">
      <div class="header-menu flex">
        <div class="manuLeft flex">
          <a href="#" class="header-logo">
            <img src="../assets/images/logo.svg" alt="Logo" />
          </a>
          <ul class="flex">
            <li><a href="#">my choice</a></li>
            <li><a href="#">nutri 3.3 blending</a></li>
          </ul>
        </div>
        <div class="manuRight flex">
          <div class="search-wrap">
            <input type="text" />
            <i></i>
          </div>
          <a href="">login</a>
          <div class="dropdown">
            <a href="" class="dropdown-toggle"></a>
            <div class="dropdown-menu">
              <a href="">KO</a>
              <a href="">EN</a>
            </div>
          </div>
          <a href="">
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
 


