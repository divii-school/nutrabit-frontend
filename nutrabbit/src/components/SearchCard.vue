<template>
  <div class="search-card-inner">
    <img class="search-result-img" v-bind:src="image_link + image" alt />
    <div><img v-bind:src="image_link + image_hover" alt /></div>
    <p class="text-center">{{ category }}</p>
    <template v-if="type == 'recomandedBlending'">
      <router-link :to="route_link">
        <p class="recomanded-vitamin text-center">{{ name }}</p>
        <p class="recomanded-quality text-center">{{ desc }}</p>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: ["image", "type", "category", "name", "desc", "image_link", "route_link", "image_hover"],
};
</script>