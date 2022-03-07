<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection">
        <div class="my-choice-heading">
          <h2>my choice</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item recomanded-blending">
            <div class="heading-wrap">
              <div class="heading heading-blue">
                <h2>Recommended blending</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button><i class="icon-info"></i></button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>
                            This is a menu where I make my own health functional
                            food recipes.
                          </li>
                          <li>Please select the desired function.</li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="heading-left">
                <a href=""><i class="icon-plus"></i>see more</a>
              </div>
            </div>
            <ul class="recomanded-list">
              <li v-for="item in blendingData" :key="item">
                <SearchCard :item="item" type="searchData" />
              </li>
            </ul>
          </div>
          <div class="choice-selection-item raw-material">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Recommended blending</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button><i class="icon-info"></i></button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>
                            This is a menu where I make my own health functional
                            food recipes.
                          </li>
                          <li>Please select the desired function.</li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="heading-left">
                <a href=""><i class="icon-plus"></i>see more</a>
              </div>
            </div>
            <ul class="raw-material-list">
              <li v-for="data in rwaMaterialData" :key="data">
                <div class="list-left">
                  <div class="img-wrap">
                    <img :src="data.img" alt="" />
                  </div>
                  <div class="material-details">
                    <h2>{{ data.title }}</h2>
                    <div class="description">
                      <p>{{ data.desc1 }}</p>
                      <p>{{ data.desc2 }}</p>
                      <p>{{ data.desc3 }}</p>
                    </div>
                  </div>
                </div>
                <div class="list-right">
                  <button class="btn-small-solid">test</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
import Popper from "vue3-popper";
import SearchCard from "../components/SearchCard.vue";
export default {
  name: "MyChoiceCategorySelection",
  components: {
    Popper,
    SearchCard,
  },
  data() {
    return {
      blendingData: [
        {
          img: "../../../src/assets/images/aloe-img1.png",
          desc: "Oridinary blend",
        },
        {
          img: "../../../src/assets/images/aloe-img1.png",
          desc: "Oridinary blend",
        },
        {
          img: "../../../src/assets/images/aloe-img1.png",
          desc: "Oridinary blend",
        },
        {
          img: "../../../src/assets/images/aloe-img1.png",
          desc: "Oridinary blend",
        },
      ],
      rwaMaterialData: [
        {
          img: "../../../src/assets/images/raw-material-img.png",
          title: "Glucomannan (Konjac, Konjac Mannan)",
          desc1:
            "improving blood cholesterol Suppression of postprandial blood sugar rise",
          desc2: "Proliferation of beneficial intestinal bacteria",
          desc3: "May help smooth bowel movements",
        },
        {
          img: "../../../src/assets/images/raw-material-img.png",
          title: "Glucomannan (Konjac, Konjac Mannan)",
          desc1:
            "improving blood cholesterol Suppression of postprandial blood sugar rise",
          desc2: "Proliferation of beneficial intestinal bacteria",
          desc3: "May help smooth bowel movements",
        },
        {
          img: "../../../src/assets/images/raw-material-img.png",
          title: "Glucomannan (Konjac, Konjac Mannan)",
          desc1:
            "improving blood cholesterol Suppression of postprandial blood sugar rise",
          desc2: "Proliferation of beneficial intestinal bacteria",
          desc3: "May help smooth bowel movements",
        },
        {
          img: "../../../src/assets/images/raw-material-img.png",
          title: "Glucomannan (Konjac, Konjac Mannan)",
          desc1:
            "improving blood cholesterol Suppression of postprandial blood sugar rise",
          desc2: "Proliferation of beneficial intestinal bacteria",
          desc3: "May help smooth bowel movements",
        },
      ],
    };
  },
};
</script>