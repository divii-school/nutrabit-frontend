<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <slot name="body">
          <h2 class="modal-title text-center">{{bodytext1}}</h2>
          <h2 class="modal-title text-center">{{bodytext2}}</h2>
        </slot>
       </section>

      <footer class="modal-footer">
        <div class="modal-btn-wrap dual-btn">
            <button type="button" class="btn-primary grey-btn-solid" @click="close" >{{btnText1}}</button>
            <button type="button" class="btn-primary grenn-btn2" @click="close2(link)">{{btnText2}}</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props:['bodytext1', 'bodytext2', 'btnText1', 'btnText2', 'link'],
    methods: {
      close() {
        this.$emit('close');
      },
      close2(link){
       this.$router.push(link) 
       this.$emit('close');
      }
    },
  };
</script>

