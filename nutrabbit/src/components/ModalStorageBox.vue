<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <slot name="body">
          <h2 class="modal-title text-center">{{ bodytext1 }}</h2>
          <h2 class="modal-title text-center">{{ bodytext2 }}</h2>
        </slot>
      </section>

      <footer class="modal-footer">
        <div class="modal-btn-wrap dual-btn">
          <button
            type="button"
            class="btn-primary grey-btn-solid"
            @click="addRawMaterial()"
          >{{ btnText1 }}</button>
          <button type="button" class="btn-primary grenn-btn2" @click="close">{{ btnText2 }}</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import MyChoiceService from "../services/MyChoiceService";
export default {
  name: 'ModalStorageBox',
  props: ['bodytext1', 'bodytext2', 'btnText1', 'btnText2', 'raw_material_id', 'sub_category_id'],

  created() {
    this.mychoiceService = new MyChoiceService();
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addRawMaterial() {
      //  console.log(this.raw_material_id);
      this.mychoiceService.rawMaterialStorageBoxAdd(this.raw_material_id).then((res) => {
        // console.log(res.data);
        if (res.response) {
          this.$swal(res.response.data.message, "error");
        } else {
          console.log(this.sub_category_id);
          // this.$router.push({name: '/my-choice-category-selection/', params: { id: this.sub_category_id }})
          this.$router.push({ path: `/my-choice-category-selection/${this.sub_category_id}` });
        }
      });
    },
  },
};
</script>

