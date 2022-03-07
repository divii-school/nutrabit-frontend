<template>
  <div class="card-inner">
    <img class="search-result-img" v-bind:src="item.img" alt="" />
    <p class="text-center">{{ item.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: ["item", "type"],
};
</script>