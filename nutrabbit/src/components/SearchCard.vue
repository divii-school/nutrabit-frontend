<template>
  <div class="search-card-inner">
    <img class="search-result-img" v-bind:src="item.img" alt="" />
    <p class="text-center">{{ item.desc }}</p>
    <template v-if="type=='recomandedBlending'">
      <p class="recomanded-vitamin text-center" >{{ item.desc2 }}</p>
      <p class="recomanded-quality text-center">{{ item.desc3 }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: ["item", "type"],
};
</script>