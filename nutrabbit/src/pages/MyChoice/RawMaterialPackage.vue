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
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Formulation selection</p>
              </div>
            </li>
            <li class="recomanded-status active">
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
                <h2>Choose a package</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button><i class="icon-info"></i></button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>Please select the desired package.</li>
                          <li>
                            When requesting a sample, please check 'Not
                            Selected' for package selection.
                          </li>
                          <li>
                            Subpackages are the most used packages. If there is
                            a separate package you want, please indicate it on
                            the next page.
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
                <li v-for="(item, index) of blendingPackageData" :key="index">
                  <ProductList :item="item" @changeId="UpdatedId($event)" />
                </li>
              </ul>
              <div class="product-item with-input">
                <div class="radio-wrap">
                  <label class="custom-radio">
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="material-details">
                  <h2>Etc</h2>
                  <div class="input-group">
                    <input type="text" placeholder="Direct input">
                  </div>
                </div>
              </div>
              <div class="product-item with-input">
                <div class="radio-wrap">
                  <label class="custom-radio">
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="material-details">
                  <h2>unchecked</h2>
                </div>
              </div>

              <div class="btn-wrap">
                <button  @click="this.$router.push(`/ingredient-formulation/${this.$route.query.raw_material_id}`)" class="btn-small-solid grey">Previous</button>
                <button @click="checkPackageId" class="btn-small-solid blue">next</button>
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
      blendingPackageData:'',
      package_id:''
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
    this.blendingPackage();
  },
  methods: {
    // blending package Details
    blendingPackage() {
      this.mychoiceService.getRecommendedBlendingPackage().then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.blendingPackageData = res.data.packageData;
          // console.log(res.data.packageData);
        } else {
          this.$swal(res.message, "error");
        }
      });
    },
    UpdatedId(e) {
      this.package_id = e;
    },
    checkPackageId() {
      if (this.package_id == "") {
        this.$swal("Please Choose a Package");
      }
      else {
        this.$router.push({ name: 'RawMaterialEstimation', query: { raw_material_id: this.$route.query.raw_material_id, pill_id: this.$route.query.pill_id, package_id:this.package_id } });
      }
    },
    filterChanged(event) {
      console.log(event.target.value);
    }
  }
};
</script>