<template>
  <div class="card-inner">
    <div class="item-img-wrap">
      <img v-bind:src="item.img" alt="" />
    </div>
    <p class="text-center">{{ item.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ['item', 'type'],
};
</script>