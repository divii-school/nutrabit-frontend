<template>
  <div class="search-card-inner">
    <img
      class="search-result-img"
      v-bind:src="'http://api-nutrabbit-dev.dvconsulting.org/' + item.thumbnail_1_path"
      alt
    />
    <router-link :to="'/choice-recommended-blending-detailed-page/' + item.id">
      <p class="text-center">{{ item.category_name_ko }}</p>
    </router-link>
    <template v-if="type == 'recomandedBlending'">
      <p class="recomanded-vitamin text-center">{{ item.name_ko }}</p>
      <p class="recomanded-quality text-center">{{ item.description_ko }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: ["item", "type"],
};
</script>