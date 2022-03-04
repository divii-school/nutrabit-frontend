<template>
  <div class="main-body">
    <button type="button" class="btn" @click="showModal">Open Modal!</button>
    <transition name="modal-fade" v-show="isModalVisible" @close="closeModal">
      <div class="modal-backdrop">
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >
          <header class="modal-header" id="modalTitle">
            <slot name="header"> This is the default tile! </slot>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close modal" >x</button>
          </header>

          <section class="modal-body" id="modalDescription">
            <slot name="body"> This is the default body! </slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer"> This is the default footer! </slot>
            <button type="button" class="btn-green" @click="closeModal" aria-label="Close modal" >Close me!</button>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>