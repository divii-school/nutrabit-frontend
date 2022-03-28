<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap">
        <div class="my-choice-heading">
          <h2>my choice</h2>
          <div class="tolltip-outer">
            <Popper>
            <button><i class="icon-info"></i></button>
            <template #content>
              <div class="heading-tooltip-content">
                <ul>
                  <li>This is a menu where I make my own health functional food recipes.</li>
                  <li>Please select the desired function.</li>
                </ul>
              </div>
            </template>
          </Popper>
          </div>
        </div>
        <div class="my-choice-list-wrap">
          <ul class="my-choice-list-outer">
            <li
              class="my-choice-list-outer-item"
              v-for="item of myChoice"
              :key="item"
            >
              <h2 class="list-heading">{{ item.title }}</h2>
              <ul class="my-choice-list-inner">
                <li
                  class="my-choice-list-inner-item"
                  v-for="item in item.myChoiceListData"
                  :key="item"
                >
                  <div class="choice-card">
                    <img v-bind:src="item.img" alt="" />
                  </div>
                  <p class="desc">{{ item.desc }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
import Popper from "vue3-popper";
export default {
  name: "MyChoice",
  components: {
    Popper,
  },
  data() {
    return {
      myChoice: [
        {
          title: "muscular system",
          myChoiceListData: [
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
          ],
        },

        {
          title: "nervous system",
          myChoiceListData: [
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
          ],
        },
        {
          title: "digestive/metabolic system",
          myChoiceListData: [
            {
              img: "../../../src/assets/images/choice-img1.svg",
              desc: "gut health",
            },
          ],
        },
      ],
    };
  },
};
</script>