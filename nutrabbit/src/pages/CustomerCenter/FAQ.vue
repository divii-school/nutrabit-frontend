<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading">
          <h2>FAQ</h2>
        </div>
        <div class="faq-heading">
            <p class="category">category</p>
            <p class="title">title</p>
        </div>
        <FaqAccordion/>
        <!-- <div class="notice-list">
          <ul>
            <li>
              <div class="item-left">
                <p class="para-category">all</p>
                <span>important</span>
                <p>
                  This is the FAQ title.
                </p>
              </div>
              <div class="item-right">
                <img src="src/assets/icons/icon-arrowDown.svg" />
              </div>
            </li>
          </ul>
        </div> -->
        
      </div>
    </div>
  </div>
</template>
<script>
import FaqAccordion from '../../components/FaqAccordion.vue'
export default {
  name: "FAQ",
  components: {
      FaqAccordion,
  },
};
</script>