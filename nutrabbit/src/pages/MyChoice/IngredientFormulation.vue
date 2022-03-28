<template>
  <div class="main-body themePurple">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>my choice</h2>
          <ul class="recomanded-status-wrap">
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Raw material selection</p>
              </div>
            </li>
            <li class="recomanded-status active">
              <div class="d-item">
                <span></span>
                <p>Formulation selection</p>
              </div>
            </li>
            <li class="recomanded-status">
              <div class="d-item">
                <span></span>
                <p>Choose a package</p>
              </div>
            </li>
            <li class="recomanded-status">
              <div class="d-item">
                <span></span>
                <p>final quote</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Formulation selection</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button><i class="icon-info"></i></button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>Please select the desired format.</li>
                          <li>
                            Formulations that cannot be made with the selected raw materials may be changed to other formulations at the time of quotation.
                          </li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="raw-material-list">
                <li v-for="(item, index) in rwaMaterialData" :key="index">
                  <ProductList :item="item"/>
                </li>
              </ul>
              
              <div class="btn-wrap">
                <button class="btn-small-solid grey">Previous</button>
                <button class="btn-small-solid blue">next</button>
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
import ProductList from "../../components/ProductList.vue";
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductList,
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