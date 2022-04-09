<template>
  <div class="product-item">
    <div class="radio-wrap">
      <label class="custom-radio">
        <input type="checkbox" :id="item.name_ko" :value="item.id" v-model="getvalue" @click="getStorageBoxId" />
        <span class="checkmark"></span>
      </label>
      <div class="img-wrap">
        <img v-bind:src="'http://api-nutrabbit-dev.dvconsulting.org/public' + item.image_path" alt="" />
      </div>
    </div>
    <div class="material-details">
      <h2>{{item.name_ko}}</h2>
      <div class="description">
        <p>{{item.description_ko}}</p>
        <!-- <p v-for="(description, ind) of item.desc" :key="ind">{{description}}</p> -->
        {{allSelected}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListStorageBox",
  props:["item", "allSelected"],
   methods: {
     getStorageBoxId(event) {
       this.$emit('storageBoxId',event.target.value);
    //    console.log(event.target.value);
     }
   }
};
</script>