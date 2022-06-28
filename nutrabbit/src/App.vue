<template>
  <div id="app-container">
    <!-- header -->
    <Header />
    <!--ENd header -->
    <router-view :key="$route.path" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- Kakao Chat -->
    <!-- <KakaoChat /> -->
    <!-- Kakao Chat -->
    <!-- Footer -->
    <Footer />
    <!-- Footer -->
  </div>
</template>

<script>
import { provide } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import common from "./store/common";
// import KakaoChat from "./components/KakaoChat.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // KakaoChat,
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
  },
  setup() {
    provide("common", common);
  },
  created() {
    var get_current_url = window.location.pathname;
    console.log(get_current_url);
  },
  mounted() {
    window.Kakao.init("5d14c5e0ea3ead3c0683355cba9eda57");
    console.log(Kakao.isInitialized());
    window["sendPushNotificationData"] = (res) => {
      this.sendPushNotificationData(res);
    };
    window["backButtonHandeler"] = (res) => {
      alert('backButtonHandelerapp-->');
      this.backButtonHandelerAction(res);
    };
    // if(window.history.length )
  },
  updated() {
    const histroyCount = window.history.state.position;
    console.log('History ---> ', window.history.state.position)
    if(histroyCount < 2) {
      alert('history last')
      window.parent.postMessage("lastHistory", "*");
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log('History ---> ', window.history.length)
  //       next((vm) => {
  //           vm.from = from;
  //       });
  //   },
  methods: {
    sendPushNotificationData(res) {
      if (res) {
        alert("sendPushNotificationData");
        alert(JSON.stringify(res));
        console.log(res);
      } else {
        return false;
      }
    },
    backButtonHandelerAction(res) {
      alert('backButtonHandeleraApp-->');
      alert('backButtonHandeler-->' + res);
    }
  },
};
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
</style>
