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
      Kakao.Channel.chat({
        channelPublicId: "_qaBKxb",
      });
    },
  },
};
</script>