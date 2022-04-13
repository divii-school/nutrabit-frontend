<template>
  <div class="nutri-product-item">
    <img class="nutri-pimg" :src="imgBaseUrl +  item.thumbnail_path" alt="" />
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
  data() {
    return {
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
    };
  },
};
</script>