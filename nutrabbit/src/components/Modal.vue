<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <slot name="body">
          <h2 class="modal-title text-center">This is the default body!</h2>
        </slot>
       </section>

      <footer class="modal-footer">
        <div class="modal-btn-wrap dual-btn">
            <button type="button" class="btn-primary grey-btn-solid" @click="close" >cancellation</button>
            <button type="button" class="btn-primary grenn-btn2" >Confirm</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

