<template>
  <div class="kakao-talk-chat" @click="chatWithKakao">
    <span class="round">
      <img src="../assets/images/chat-icon.svg" />
    </span>
  </div>
</template>
<script>
export default {
  name: "CacaoChat",
  methods: {
    chatWithKakao() {
      window.Kakao.init("5d14c5e0ea3ead3c0683355cba9eda57");
      Kakao.Channel.createAddChannelButton({
        container: ".kakao-talk-chat",
        channelPublicId: "_qaBKxb",
        size: "small",
        supportMultipleDensities: true,
      });
      (function (d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://developers.kakao.com/sdk/js/kakao.channel.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "kakao-js-sdk");
    },
  },
};
</script>