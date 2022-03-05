<template>
  <div class="faq-inner">
    <button
      @click="toggleAccordion()"
      class="accordion-heading"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title"> Questions </slot>
    </button>
    <div class="accordion-details" v-show="isOpen" :id="`collapse${_uid}`">
      <p>
          <slot name="description">No results were found for your search.</slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAccordion",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>