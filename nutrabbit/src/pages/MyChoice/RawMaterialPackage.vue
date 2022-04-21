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
                  <!-- <ProductList :item="item" @changeId="UpdatedId($event)" @etcChecked="etcCheckedValue($event)"
                    @etcInput="UpdatedEtcInput($event)" /> -->
                  <ProductList :item="item" @changeId="UpdatedId($event)" @etcChecked="etcCheckedValue($event)" />
                </li>
              </ul>
              <div class="product-item with-input">
                <div class="radio-wrap">
                  <label class="custom-radio" for="17">
                    <input type="radio" name="radio" id="17" value="17" v-model="package_id" @click="getetcbtn" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="material-details">
                  <h2>Etc</h2>
                  <div class="input-group">
                    <input type="text" placeholder="Direct input" v-model="etc" />
                  </div>
                </div>
              </div>
              <div class="product-item with-input">
                <div class="radio-wrap">
                  <label class="custom-radio" for="18">
                    <input type="radio" checked="checked" id="18" name="radio" v-model="package_id" value="18" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="material-details">
                  <h2>unchecked</h2>
                </div>
              </div>
              <div class="btn-wrap">
                <button @click="this.$router.push(`/ingredient-formulation/`)"
                  class="btn-small-solid grey">Previous</button>
                <button @click="checkPackageId" class="btn-small-solid blue">next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <my-modal-component v-show="showModal2">
    <ModalWarning @close2="closeModal2"
      bodytext1="There is data in progress. Data is not stored separately. Are you sure you want to cancel?"
      btnText1="Cancel" btnText2="Confirm" @confirm="confirm" />
  </my-modal-component>
</template>

          

<script>
import Popper from "vue3-popper";
import ProductList from "../../components/ProductList.vue";
import MyChoiceService from "../../services/MyChoiceService";
import ModalWarning from "../../components/ModalWarning.vue";
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductList,
    ModalWarning
  },
  data() {
    return {
      blendingPackageData: '',
      package_id: 18,
      etc: '',
      etcbtn: '',
      to: '',
      showModal2: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.to) {
      next();
    } else {

      this.to = to;
      this.showModal2 = true;
    }
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.blendingPackage();
  },
  methods: {
    closeModal2() {
      this.showModal2 = false;
      this.to = null;
    },
    confirm() {
      this.showModal2 = false;
      this.$router.push(this.to);
    },
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
    UpdatedEtcInput(e) {
      this.etc = e;
    },
    etcCheckedValue(e) {
      this.etcbtn = e;
    },
    getetcbtn() {
      this.etcbtn = "ETC";
    },
    checkPackageId() {
      this.to = "/raw-material-estimation/";
      if (this.package_id == "") {
        this.$swal("Please Choose a Package");
      }
      else {

        if (this.etcbtn == "ETC") {

          if (this.etc == "") {
            this.$swal("Please add custom package input");
          }
          else {
            localStorage.setItem('etc', this.etc);
            var option_data = JSON.parse(localStorage.getItem("option") || "[]");

            for (let i = 0; i < option_data.length; i++) {
              var option_array = option_data[i];
              var res_option_type = Object.keys(option_array).toString();
              // console.log(res_option_type);
              if (res_option_type == "package") { option_data.pop(option_data[i]); };
            }

            var put_package = {
              package: this.package_id
            };
            option_data.push(put_package);
            // Saving
            localStorage.setItem("option", JSON.stringify(option_data));

            localStorage.setItem('package_id', this.package_id);
            this.$router.push(this.to);
          }
        }
        else {

          var option_data = JSON.parse(localStorage.getItem("option") || "[]");

          for (let i = 0; i < option_data.length; i++) {
            var option_array = option_data[i];
            var res_option_type = Object.keys(option_array).toString();
            //console.log(res_option_type);
            if (res_option_type == "package") {
              option_data.pop(option_data[i]);
              // console.log("hello");
            };
          }

          var put_package = {
            package: this.package_id
          };
          option_data.push(put_package);
          // Saving
          localStorage.setItem("option", JSON.stringify(option_data));

          localStorage.setItem('package_id', this.package_id);
          this.$router.push(this.to);
        }
      }
    },
  }
};
</script>