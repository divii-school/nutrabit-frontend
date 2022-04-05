<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>Recommended blending</h2>
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
                    <button>
                      <i class="icon-info"></i>
                    </button>
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
                  <ProductList :item="item" @name="getName" />
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
                    <input type="text" placeholder="Direct input" />
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
                <router-link to="/my-choice-recomanded-blending-fquote">
                  <button class="btn-small-solid grey">Previous</button>
                </router-link>
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
      blending_id: this.$route.params.blending_id,
      blendingPackageData: '',
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
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.blendingPackage();
     console.log(this.blending_id);
  },
  methods: {
    // blendingDetails
    blendingPackage() {
      this.mychoiceService.getRecommendedBlendingPackage().then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.blendingPackageData = res.data.packageData;
          // console.log(res.data.packageData);
        } else {
          this.$swal(res.message, "error");
          // console.log("error");
        }
      });
    },
    // Gets the checkbox information from the child component
    getName(value) {
      console.log(value);
   },
    checkPackageId() {
      console.log(this.blending_id);
       this.$router.push({ name: 'MyChoiceRecomandedBlendingFinalQuote', params: { blending_id: this.blending_id } });
      // if (this.package_id == "") {
      //   this.$swal("Please Choose a Package");
      // }
      // else {
      //   this.$router.push({ name: 'MyChoiceRecomandedBlendingFinalQuote', params: { blending_id: this.blending_id } });
      // }
    }
  }
};
</script>