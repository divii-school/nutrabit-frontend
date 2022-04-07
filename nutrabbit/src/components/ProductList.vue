<template>
  <div class="product-item">
    <div class="radio-wrap">
      <label class="custom-radio">
        <input type="radio" name="radio" id="radio" :value="item.id" @click="getPackageId" />
        <span class="checkmark"></span>
      </label>
      <div class="img-wrap">
        <img v-bind:src="'http://api-nutrabbit-dev.dvconsulting.org' + item.image_path" alt="" />
      </div>
    </div>
    <div class="material-details">
      <h2>{{item.name_ko}}</h2>
      <div class="description">
        <p>{{item.description_ko}}</p>
        <!-- <p v-for="(description, ind) of item.desc" :key="ind">{{description}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:["item"],
   methods: {
     getPackageId(event) {
       this.$emit('changeId',event.target.value);
       console.log(event.target.value)
     }
   }
};
</script>