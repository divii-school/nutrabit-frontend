<template>
  <div id="app-container" :class="theme">
    <router-view :key="$route.path" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="scss">
// route transition
.route-enter-from {
  opacity: 0;
  transform: translatey(50px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
#app {
  text-align: center;
  // color: #07a07d;
  // margin-top:-90px;
  // margin-left:-20px;
  // margin-right:-20px;
}
</style>
