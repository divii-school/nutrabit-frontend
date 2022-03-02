<template>
  <Header />
  <div class="main-body">
   <div class="container-small">
      <div class="login-wrap membership-wrap">
        <div class="login-inner">
          <h1 class="login-heading">Membership type</h1>
          <p class="membership-desc" >Please select a member type</p>
          <div class="membership-list-wrap">
            <ul>
              <li>
                <i class="icon-user"></i>
                <h2 class="list-heading">individual membership</h2>
                <p class="list-desc">When an individual joins</p>
              </li>
               <li class="membership-item">
                <i class="icon-building-symbol"></i>
                <h2 class="list-heading">Business membership registration</h2>
                <p When class="list-desc">When a company joins</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
   </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Membership",
  components: {
    Header,
  },
};
</script>




