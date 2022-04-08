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
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Choose a package</p>
              </div>
            </li>
            <li class="recomanded-status active">
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
                <h2>options</h2>
              </div>
            </div>
            <div class="materialForm">
              <div class="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>category</th>
                      <th>Explanation</th>
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
                <label>title</label>
                <input type="text" v-model="title" name placeholder="Please enter the subject." />
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <span>If you provide more details, it will help you get an accurate quote.</span>
                <textarea v-model="additional_request" placeholder="Please write freely"></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0">
                  Select service
                  <span>* Multiple selection possible</span>
                </label>
              </div>
              <div class="product-list-wrap">
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-radio">
                      <input
                        type="radio"
                        checked="checked"
                        name="radio"
                        value="2"
                        v-model="servicetype"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>Get a quote</h2>
                  </div>
                </div>
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-radio">
                      <input
                        type="radio"
                        checked="checked"
                        name="radio"
                        value="1"
                        v-model="servicetype"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>
                      sample application
                      <span>(Sample cost 300,000 won/paid)</span>
                    </h2>
                  </div>
                </div>
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-radio">
                      <input
                        type="radio"
                        value="3"
                        v-model="servicetype"
                        checked="checked"
                        name="radio"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>Both</h2>
                  </div>
                </div>
                <ul>
                  <li>* Packages are excluded when requesting samples.</li>
                  <li>* The quotation will be sent to the registered email address within 2 business days.</li>
                  <li>* Unit price may vary depending on quantity & package design.</li>
                  <li>* It may differ from the detailed estimate at the time of completion.</li>
                </ul>
                <div class="btn-wrap">
                  <button
                    @click="this.$router.push({ name: 'RawMaterialPackage', query: { raw_material_id: this.$route.query.raw_material_id, pill_id: this.$route.query.pill_id } })"
                    class="btn-small-solid grey"
                  >Previous</button>
                  <div class="btnWrapRight">
                    <button
                      class="btn-green-outline blue"
                      @click="package_temporary_add"
                    >temporary storage</button>
                    <button class="btn-small-solid blue ml-4" @click="package_add">next</button>
                  </div>
                  <my-modal-component v-show="showModal">
                    <Modal
                      @close="closeModal"
                      bodytext1="Temporary storage is complete"
                      btnText2="confirm"
                      link="/"
                    />
                  </my-modal-component>
                  <my-modal-component v-show="showModal2">
                    <ModalWarning
                      @close2="closeModal2"
                      bodytext1="There is data in progress. Data is not stored separately. Are you sure you want to cancel?"
                      btnText1="cancellation"
                      btnText2="Confirm"
                      @confirm="confirm"
                    />
                  </my-modal-component>
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
import ModalWarning from "../../components/ModalWarning.vue";
export default {
  name: "RawMaterialEstimation",
  components: {
    // Popper,
    ProductList,
    Modal,
    ModalWarning
  },
  data() {
    return {
      raw_material_id: this.$route.query.raw_material_id,
      pill_id: this.$route.query.pill_id,
      package_id: this.$route.query.package_id,
      servicetype: 3,
      title: '',
      additional_request: '',
      showModal: false,
      showModal2: false,
      to: null,
      items: [],
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
  beforeRouteLeave(to, from, next) {
    if (this.to) {
      next();
    } else {
      this.to = to;
      console.log(this.to.path);
      this.showModal2 = true;
    }

  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    closeModal2() {
      this.showModal2 = false;
      this.to = null;
    },
    confirm() {
      this.showModal2 = false;
      this.$router.push(this.to);
    },
    package_add() {
      let is_temporary_storage = 'N';

      if (this.title == "") {
        this.$swal("Title is required");
      }
      else {
        this.mychoiceService.getRawMaterialPackageAdd(this.raw_material_id, this.pill_id, this.package_id, this.title, this.additional_request, this.servicetype, is_temporary_storage).then((res) => {
          // console.log(res);
          if (res.status = 200) {
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
      if (this.title == "") {
        this.$swal("Title is required");
      }
      else {
        this.mychoiceService.getRawMaterialPackageAdd(this.raw_material_id, this.pill_id, this.package_id, this.title, this.additional_request, this.servicetype, is_temporary_storage).then((res) => {
          // console.log(res);
          if (res.status = 200) {
            // this.$router.push("/");
            this.showModal = true;
          } else {
            this.$swal(res.message, "error");
          }
        });
      }
    },
    option_list() {
      this.mychoiceService.getRecommnededApplicationDetails(this.raw_material_id).then((res) => {
        // console.log(res);
        if (res.status == 200) {
          var option_data = res.data.data[0].options;
          for (let i = 0; i <= option_data.length; i++) {

            var res_option_type = option_data[i].split(':')[0]; // raw_material:1
            var res_option_value = option_data[i].split(':')[1];
            console.log(res_option_type);
            console.log(res_option_value);
            this.mychoiceService.optiondetails(res_option_type, res_option_value).then((res) => {
              this.items.push({ 'category': res.data.data[0].category, 'explanation': res.data.data[0].explanation });
              // console.log(res);
            });
          }
        }
        else {
          //this.$swal(res.message, "error");
          console.log("null value get for option");
        }

      });

    },
  }
};
</script>