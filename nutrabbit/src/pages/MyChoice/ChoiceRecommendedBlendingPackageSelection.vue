<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading my-choice-progress">
          <h2>{{ $t("myChoice.RecommendedBlending.title") }}</h2>
          <ul class="recomanded-status-wrap">
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>{{ $t("progress_bar.selection1") }}</p>
              </div>
            </li>
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>{{ $t("progress_bar.selection2") }}</p>
              </div>
            </li>
            <li class="recomanded-status active">
              <div class="d-item">
                <span></span>
                <p>{{ $t("progress_bar.selection3") }}</p>
              </div>
            </li>
            <li class="recomanded-status">
              <div class="d-item">
                <span></span>
                <p>{{ $t("progress_bar.selection4") }}</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product ">
            <div class="heading-wrap">
              <div class="heading">
                <h2 class="grey-4c">{{ $t("package.title") }}</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button>
                      <i class="icon-info"></i>
                    </button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>{{ $t("package.popup.list1") }}</li>
                          <li>{{ $t("package.popup.list2") }}</li>
                          <li>{{ $t("package.popup.list3") }}</li>
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
                  <ProductList
                    :item="item"
                    @changeId="UpdatedId($event)"
                    @etcChecked="etcCheckedValue($event)"
                  />
                </li>
              </ul>
              <div class="product-item with-input auto-width">
                <div class="radio-wrap">
                  <label class="custom-radio custom-radio2" for="17">
                    <input
                      type="radio"
                      name="radio"
                      id="17"
                      value="17"
                      v-model="package_id"
                      @click="getetcbtn"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="material-details">
                  <h2>{{ $t("package.etc") }}</h2>
                  <!-- <div class="input-group">
                    <input type="text" :placeholder="$t('package.etc_input')" v-model="etc" />
                  </div> -->
                  <div
                    class="form-group form-full-width"
                    :class="etcEmptyError ? 'error' : ''"
                  >
                    <div class="input-group">
                      <div class="input-inner">
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="$t('package.etc_input')"
                          v-model="etc"
                        />
                      </div>
                    </div>
                    <span class="error-msg">{{ etcEmptyError }}</span>
                  </div>
                </div>
              </div>
              <div class="product-item with-input auto-width">
                <div class="radio-wrap">
                  <label class="custom-radio custom-radio2" for="18">
                    <input
                      type="radio"
                      checked="checked"
                      id="18"
                      name="radio"
                      v-model="package_id"
                      value="18"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="material-details">
                  <h2>{{ $t("package.unchecked") }}</h2>
                </div>
              </div>

              <div class="btn-wrap">
                <button
                  @click="
                    this.$router.push(
                      `/choice-recommended-blending-detailed-page/${this.blending_id}`
                    )
                  "
                  class="btn-small-solid grey"
                >
                  {{ $t("button.Previous") }}
                </button>
                <button @click="checkPackageId" class="btn-small-solid blue">
                  {{ $t("button.next") }}
                </button>
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
      blending_id: this.$route.query.blending_id,
      blendingPackageData: "",
      package_id: 18,
      etc: "",
      etcbtn: "",
      etcEmptyError: "",
      globalLocale: "",
      ischeckETCError: false,
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.blendingPackage();
  },
  updated() {
    //console.log(this.$i18n.locale);
    this.globalLocale = this.$i18n.locale;
  },
  watch: {
    globalLocale(newVal) {
      if ((newVal == "kr" || newVal == "en") && this.ischeckETCError) {
        this.checkETCError();
      }
      this.blendingPackage();
    },
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
    UpdatedEtcInput(e) {
      this.etc = e;
    },
    getetcbtn() {
      this.etcbtn = "ETC";
    },
    etcCheckedValue(e) {
      this.etcbtn = e;
    },
    checkPackageId() {
      // console.log(this.blending_id);
      if (this.package_id == "") {
        this.$swal("Please Choose a Package");
      } else {
        if (this.etcbtn == "ETC") {
          if (this.etc == "") {
            // this.$swal("Please add custom package input");
            this.ischeckETCError = true;
            this.etcEmptyError = this.$t("package.error_etc");
            return;
          } else {
            localStorage.setItem("etc", this.etc);
            this.$router.push({
              name: "MyChoiceRecomandedBlendingFinalQuote",
              query: {
                blending_id: this.blending_id,
                package_id: this.package_id,
              },
            });
          }
        } else {
          localStorage.setItem("etc", this.etc);
          this.$router.push({
            name: "MyChoiceRecomandedBlendingFinalQuote",
            query: {
              blending_id: this.blending_id,
              package_id: this.package_id,
            },
          });
        }
      }
    },
    checkETCError() {
      this.etcEmptyError = this.$t("package.error_etc");
    },
  },
};
</script>

<style lang="scss" scoped>
.choice-selection-item-wrap {
  .choice-selection-item {
    &.raw-material-product {
      .heading-wrap {
        .heading {
          h2.grey-4c {
            @media screen and (max-width: 767px) {
              color: $grey-4C !important;
            }
          }
        }
      }
    }
  }
}
</style>