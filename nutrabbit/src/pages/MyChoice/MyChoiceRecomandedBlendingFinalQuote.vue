<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>{{ $t('myChoice.RecommendedBlending.title') }}</h2>
          <ul class="recomanded-status-wrap">
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>{{ $t('progress_bar.selection1') }}</p>
              </div>
            </li>
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>{{ $t('progress_bar.selection2') }}</p>
              </div>
            </li>
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>{{ $t('progress_bar.selection3') }}</p>
              </div>
            </li>
            <li class="recomanded-status active">
              <div class="d-item">
                <span></span>
                <p>{{ $t('progress_bar.selection4') }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>{{ $t('final.option') }}</h2>
              </div>
            </div>
            <div class="materialForm">
              <div class="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>{{ $t('final.No') }}</th>
                      <th>{{ $t('final.Category') }}</th>
                      <th>{{ $t('final.Description') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.category }}</td>
                      <td>{{ item.explanation }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="fGroup">
                <label>{{ $t('final.AdditionalRequests') }}</label>
                <span>{{ $t('final.add_info') }}</span>
                <textarea v-model="additional_request" :placeholder="$t('final.textarea_place')"></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0">
                  {{ $t('final.Select_Service') }}
                  <span> {{ $t('final.Select_Service_desc') }}</span>
                </label>
              </div>
              <div class="product-list-wrap">
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-check custom-check2" for="qoute">
                      <input type="checkbox" id="qoute" checked value="2" v-model="servicetype" />
                      <span class="checkmark" for="qoute"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>{{ $t('final.check1') }}</h2>
                  </div>
                </div>
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-check custom-check2" for="sample">
                      <input type="checkbox" id="sample" value="1" v-model="servicetype" />
                      <span class="checkmark" for="sample"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>
                      {{ $t('final.check2') }}
                      <span>{{ $t('final.check2_info') }}</span>
                    </h2>
                  </div>
                </div>
                <ul>
                  <li>{{$t('final.note.list1')}}</li>
                  <li>{{$t('final.note.list2')}}</li>
                  <li>{{$t('final.note.list3')}}</li>
                  <li>{{$t('final.note.list4')}}</li>
                </ul>
                <div class="btn-wrap">
                  <button
                    @click="this.$router.push({ name: 'ChoiceRecommendedBlendingPackageSelection', query: { blending_id: this.blending_id } })"
                    class="btn-small-solid grey">{{ $t("button.Previous") }}</button>
                  <div class="btnWrapRight">
                    <button class="btn-green-outline blue" @click="package_temporary_add">{{
                      $t("button.Save_as_draft")
                    }}</button>
                    <button class="btn-small-solid blue ml-4" @click="package_add">{{ $t("button.next") }}</button>
                  </div>
                  <my-modal-component v-show="showModal">
                    <Modal @close="closeModal" :bodytext1="$t('final.modal_msg')" :btnText2="$t('button.Confirm')"
                      link="/" />
                  </my-modal-component>
                  <Modal v-show="isServiceSelectedVisible" @close="closeModalService"
                    :bodytext1="$t('final.required_service_msg')" :btnText1="$t('button.Confirm')" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
// import Popper from "vue3-popper";
import ProductList from "../../components/ProductList.vue";
import MyChoiceService from "../../services/MyChoiceService";
import Modal from "../../components/Modal.vue";
 
export default {
  name: "RawMaterialEstimation",
  components: {
    // Popper,
    ProductList,
    Modal,
  },
  data() {
    return {
      blending_id: this.$route.query.blending_id,
      package_id: this.$route.query.package_id,
      servicetype: ["2"],
      additional_request: '',
      showModal: false,
      items: [],
      etc: localStorage.getItem('etc'),
      isServiceSelectedVisible:false,
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
    this.option_list();
  },
  methods: {
     closeModalService() {
      this.isServiceSelectedVisible = false;
    },
     closeModal() {
    this.showModal = false;
  },
    package_add() {
      let is_temporary_storage = 'N';
      let length = this.servicetype.length;
      let service = '';
      if (length == 0) {
        // this.$swal("Please select a service");
         this.isServiceSelectedVisible = true;
      }
      else {
        if (length == 2) {
          service = 3;
        }
        else {
          service = this.servicetype.toString();
        }
        this.mychoiceService.getRecommendedBlendingPackageAdd(this.blending_id, this.package_id, this.etc, this.additional_request, service, is_temporary_storage).then((res) => {
          // console.log(res);
          if (res.status == 200) {
            this.$swal("Application Data is successfuly submitted");
            this.$router.push("/");
          } else {
            this.$swal(res.message, "error");
          }
        });
      }
    },
    package_temporary_add() {
      let is_temporary_storage = 'Y';
      let length = this.servicetype.length;
      let service = '';
      if (length == 0) {
        // this.$swal("Please select a service");
         this.isServiceSelectedVisible = true;
      }
      else {
        if (length == 2) {
          service = 3;
        }
        else {
          service = this.servicetype.toString();
        }
        this.mychoiceService.getRecommendedBlendingPackageAdd(this.blending_id, this.package_id, this.etc, this.additional_request, service, is_temporary_storage).then((res) => {
          // console.log(res);
          if (res.status == 200) {
            // this.$router.push("/");
            this.showModal = true;
          } else {
            this.$swal(res.message, "error");
          }
        });
      }
    },
    option_list() {
      this.mychoiceService.getRecommendedBlendingDetail(this.blending_id).then((res) => {
        //  console.log(res.data);
        if (res.data.status == 200) {
          var option_data = res.data.data[0].options;
          for (let i = 0; i <= option_data.length; i++) {

            var res_option_type = option_data[i].split(':')[0]; // raw_material:1
            var res_option_value = option_data[i].split(':')[1];
            // console.log(res_option_type);
            // console.log(res_option_value);
            this.mychoiceService.optiondetails(res_option_type, res_option_value).then((res) => {
              this.items.push({ 'category': res.data.data[0].category, 'explanation': res.data.data[0].explanation });
              // console.log(res);
            });
          }
        }
        else {
          this.$swal(res.data.message, "error");
        }

      });
      this.mychoiceService.optiondetails('package', this.package_id).then((res) => {
        this.items.push({ 'category': res.data.data[0].category, 'explanation': res.data.data[0].explanation });
        // console.log(res);
      });

    }
  }
};
</script>