<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>my recipe</h2>
        </div>
        <div class="choice-selection-item-wrap recipeGap">
          <div class="choice-selection-item raw-material-product addWrap">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Recommended blending</h2>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="selectAllHeader">
                <li class="flex-justify-end">
                  <button class="deleteBtn">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of rwaMaterialData" :key="index">
                  <ProductList :item="item"/>
                </li>
              </ul>
              <div class="btn-wrap flexEnd">
                <button class="btn-small-solid blue">Next</button>
              </div>
            </div>
          </div>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product addWrap">
            <div class="heading-wrap">
              <div class="heading">
                <h2>My Choice</h2>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="selectAllHeader">
                <li class="flex-justify-end">
                  <button class="deleteBtn">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of rwaMaterialData" :key="index">
                  <ProductList :item="item"/>
                </li>
              </ul>
              <div class="btn-wrap flexEnd">
                <button class="btn-small-solid blue">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
import Popper from "vue3-popper";
import Button from '../../components/Button.vue';
import ProductList from "../../components/ProductList.vue";
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductList,
    Button,
  },
  data() {
    return {
      rwaMaterialData: [
        {
          img: "../../../src/assets/images/pkgSelection.png",
          title: "Bottle",
          desc: [
            "Choose from a variety of sizes and shapes of bottles and caps.",
          ],
        },
        {
          img: "../../../src/assets/images/pkgSelection.png",
          title: "PTP",
          desc: [
            "It is hygienic and convenient.",
            "The packaging volume is slightly larger.",
          ],
        },
      ],
    };
  },
};
</script>