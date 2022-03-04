<template>
  <div class="main-body">
    <button type="button" class="btn" @click="showModal">btn border issue</button>
    <transition name="modal-fade" v-show="isModalVisible" @close="closeModal">
      <div class="modal-backdrop">
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >

          <section class="modal-body" id="modalDescription">
            <slot name="body"> 
              <h2 class="modal-title text-center">Are you sure you want to log out?</h2>
            </slot>
          </section>

          <footer class="modal-footer">
            <div class="modal-btn-wrap dual-btn">
              <button type="button" class="btn-primary grey-btn-solid" @click="closeModal" aria-label="Close modal" >cancellation</button>
              <button type="button" class="btn-primary grenn-btn2" >Confirm</button>
            </div>
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