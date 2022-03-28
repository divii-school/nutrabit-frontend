<template>
  <div class="nutri-product-item">
    <img class="nutri-pimg" :src="item.img" alt="" />
    <div class="tag-wrap">
      <span>nutri 3.3</span>
      <span>nutri 3.3</span>
    </div>
    <p class="title">{{item.title}}</p>
  </div>
</template>

<script>
export default {
  name: "MainProductCard",
  props: ["item"],
};
</script>