<template>
  <div class="product-item">
    <div class="radio-wrap">
      <label class="custom-radio">
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
      </label>
      <div class="img-wrap">
        <img v-bind:src="item.img" alt="" />
      </div>
    </div>
    <div class="material-details">
      <h2>{{item.title}}</h2>
      <div class="description">
        <p v-for="(description, ind) of item.desc" :key="ind">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:["item"]
};
</script>