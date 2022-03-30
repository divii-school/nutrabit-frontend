<template>
  <div class="nutri-product-item">
    <img class="nutri-pimg" :src="'http://api-nutrabbit-dev.dvconsulting.org/' +  item.thumbnail_path" alt="" />
    <div class="tag-wrap">
      <span>nutri 3.3</span>
      <span>nutri 3.3</span>
    </div>
    <p class="title">{{item.name_ko}}</p>
  </div>
</template>

<script>
export default {
  name: "MainProductCard",
  props: ["item"],
};
</script>