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
        <Faq1Accordion />
        <div class="details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ornare facilisi tempor rutrum blandit duis mauris
            egestas iaculis. Gravida eu nulla imperdiet turpis massa aliquam,
            vestibulum gravida tempor. Non fermentum malesuada sit amet
            vestibulum semper sem mollis. Magna pellentesque bibendum tellus est
            tortor, faucibus nibh sagittis. Nunc, scelerisque cras convallis
            duis orci ultrices nec amet eget. Gravida vestibulum, suspendisse eu
            ut. At at cursus faucibus ac risus mollis.
          </p>
        </div>
         <Pagination />
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
import Faq1Accordion from "../../components/Faq1Accordion.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  name: "FAQ",
  components: {
    Faq1Accordion,
    Pagination,
  },
};
</script>