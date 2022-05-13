<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <slot name="body">
          <h2 class="modal-title text-center" v-if="bodytext1">
            {{ bodytext1 }}
          </h2>
          <h2 class="modal-title text-center" v-if="bodytext2">
            {{ bodytext2 }}
          </h2>
        </slot>
      </section>

      <footer class="modal-footer">
        <div
          class="modal-btn-wrap"
          :class="btnText1 && btnText2 ? 'dual-btn' : 'pppp'"
        >
          <button
            type="button"
            :class="`btn-primary grey-btn-solid ${btnFull? 'full-width' : ''}`"
            @click="close()"
            v-if="btnText1"
          >
            {{ btnText1 }}
          </button>
          <button
            type="button"
            :class="`btn-primary grenn-btn2 ${btnFull? 'full-width' : ''}`"
            @click="close2(link)"
            v-if="btnText2"
          >
            {{ btnText2 }}
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["bodytext1", "bodytext2", "btnText1", "btnText2", "link", "btnFull"],
  methods: {
    close() {
      this.$emit("close");
    },
    close2(link) {
      this.$router.push(link);
      this.$emit("confirm","confirm");
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-footer{
  .btn-primary{
    width: 50%;
    &.full-width{
      width: 100%;
    }
  }
}
</style>

