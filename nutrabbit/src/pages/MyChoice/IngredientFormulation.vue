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
                    <button>
                      <i class="icon-info"></i>
                    </button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>Please select the desired format.</li>
                          <li>Formulations that cannot be made with the selected raw materials may be changed to other formulations at the time of quotation.</li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="raw-material-list">
                <li v-for="(item, index) of blendingFormulationData" :key="index">
                  <ProductList :item="item" @changeId="UpdatedId($event)" />
                </li>
              </ul>

              <div class="btn-wrap">
                <button
                  @click="this.$router.push(`/mychoice-rawMaterial-detailed-page/${this.$route.params.id}`)"
                  class="btn-small-solid grey"
                >Previous</button>
                <button @click="checkPillId" class="btn-small-solid blue">next</button>
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
import MyChoiceService from "../../services/MyChoiceService";
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductList,
  },
  data() {
    return {
      blendingFormulationData: [],
      pill_id: '',
      // rwaMaterialData: [
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "Bottle",
      //     desc: [
      //       "Choose from a variety of sizes and shapes of bottles and caps.",
      //     ],
      //   },
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "PTP",
      //     desc: [
      //       "It is hygienic and convenient.",
      //       "The packaging volume is slightly larger.",
      //     ],
      //   },
      // ],
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.blendingFormulation();
  },
  methods: {
    blendingFormulation() {
      this.mychoiceService.getBlendingFormulation().then((res) => {
        //  console.log(res);
        if (res.status == 200) {
          this.blendingFormulationData = res.data.pillData;
          //  console.log(res.data.pillData);
        } else {
          this.$swal(res.message, "error");
        }
      });
    },
    UpdatedId(e) {
      this.pill_id = e;
      //console.log(this.pill_id);
    },
    checkPillId() {
      // console.log(this.blending_id);
      if (this.pill_id == "") {
        this.$swal("Please Choose a Formulation");
      }
      else {
        this.$router.push({ name: 'RawMaterialPackage', query: { raw_material_id: this.$route.params.id, pill_id: this.pill_id } });
        console.log("success");
      }
    },
  },

};
</script>