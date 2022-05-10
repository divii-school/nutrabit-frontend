<template>
  <div class="main-body themePurple">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>{{ $t("header.myChoice") }}</h2>
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
                <label>{{ $t('final.title') }}</label>
                <input type="text" v-model="title" name :placeholder="$t('final.title_place')" />
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
                  <button @click="this.$router.push('/raw-material-package/')" class="btn-small-solid grey">{{
                      $t("button.Previous")
                  }}</button>
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
                  <my-modal-component v-show="showModal2">
                    <ModalWarning @close2="closeModal2" :bodytext1="$t('warningModal.text')"
                      :btnText1="$t('warningModal.btn1')" :btnText2="$t('warningModal.btn2')" @confirm="confirm" />
                  </my-modal-component>
                  <Modal v-show="isItemSelectedVisible" @close="closeModalTitle"
                    :bodytext1="$t('final.required_title_msg')" :btnText1="$t('button.Confirm')" />
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
import ModalWarning from "../../components/ModalWarning.vue";
import PersonalBusinessService from "../../services/PersonalBusinessService";
import PersonalInfoService from "../../services/PersonalInfoService";
 
export default {
  name: "RawMaterialEstimation",
  inject : ['common'],
  components: {
    // Popper,
    ProductList,
    Modal,
    ModalWarning,
  },
  data() {
    return {
      raw_material_id: [],
      pill_id: localStorage.getItem('pill_id'),
      package_id: localStorage.getItem('package_id'),
      servicetype: ["2"],
      title: '',
      additional_request: '',
      showModal: false,
      showModal2: false,
      isItemSelectedVisible: false,
      isServiceSelectedVisible: false,
      to: '',
      items: [],
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      uuid:"",
      Detailaddress:"",
      userId: this.common.state.userId,
      payment_status:''
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
    this.personalInfoservice = new PersonalInfoService();
    this.personalBusinessService = new PersonalBusinessService();
  },
  mounted() {
    this.option_list();
    this.raw_material_id = localStorage.getItem('raw_material_id').split(',');
    // console.log(localStorage.getItem('raw_material_id'));
  },
  beforeRouteLeave(to, from, next) {
    if (this.to) {
      next();
    } else {

      this.to = to;
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
    closeModalTitle() {
      this.isItemSelectedVisible = false;
    },
    closeModalService() {
      this.isServiceSelectedVisible = false;
    },
    confirm() {
      this.showModal2 = false;
      this.$router.push(this.to);
    },
    package_add() {
      this.to = "/";
      let is_temporary_storage = 'N';
      if (this.title == "") {
        //this.$swal("Title is required");
        this.isItemSelectedVisible = true;
      }
      else {
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

          if (localStorage.getItem("userType") == "business_member") {
          this.personalBusinessService.getBusinessData(this.userId).then((res) => {
        let data = res.data;
        // console.log("data",data);
        this.name = data.data[0].name;
        this.uuid = data.data[0].uuid;
        this.email = data.data[0].email;
        this.phoneNumber = data.data[0].mobile;
        this.address = data.data[0].address;
        this.Detailaddress = data.data[0].address;
      });
        }
        if (localStorage.getItem("userType") == "personal_member") {

         this.personalInfoservice.getPersonalData(this.userId).then((res) => {
        console.log(res.data); 
        let data = res.data;
        this.name = data.data[0].name;
        this.uuid = data.data[0].uuid;
        this.email = data.data[0].email;
        this.phoneNumber = data.data[0].mobile;
        this.address = data.data[0].address;
        this.Detailaddress = data.data[0].address;
        });
        }

        if(service=='2') {


          this.mychoiceService.getRawMaterialPackageAdd(localStorage.getItem('raw_material_id'), this.payment_status, this.pill_id, this.package_id, this.title, this.additional_request, service, is_temporary_storage).then((res) => {
            // console.log(res);
            if (res.status == 200) {
              this.$swal("Application Data is successfuly submitted");
              localStorage.removeItem('sub_category_id');
              localStorage.removeItem('raw_material_id');
              localStorage.removeItem('package_id');
              localStorage.removeItem('pill_id');
              localStorage.removeItem('option');
              localStorage.removeItem('etc');
              localStorage.removeItem('storage_box');
              // console.log("add");
              this.$router.push(this.to);
            } else {
              this.$swal(res.message, "error");
            }
          });

        }

        else {
          this.payment_status='Success';

          this.mychoiceService.getRawMaterialPackageAdd(localStorage.getItem('raw_material_id'), this.payment_status, this.pill_id, this.package_id, this.title, this.additional_request, service, is_temporary_storage).then((res) => {
            // console.log(res);
            if (res.status == 200) {
              this.$swal("Application Data is successfuly submitted");
              localStorage.removeItem('sub_category_id');
              localStorage.removeItem('raw_material_id');
              localStorage.removeItem('package_id');
              localStorage.removeItem('pill_id');
              localStorage.removeItem('option');
              localStorage.removeItem('etc');
              localStorage.removeItem('storage_box');
              // console.log("add");
              this.$router.push(this.to);
            } else {
              this.$swal(res.message, "error");
            }
          });

        }
        }
      }
    },
    package_temporary_add() {
      this.to = "/";
      let is_temporary_storage = 'Y';
      if (this.title == "") {
        // this.$swal("Title is required");
        this.isItemSelectedVisible = true;
      }
      else {
        let length = this.servicetype.length;
        if (length == 0) {
          // this.$swal("Please select a service");
          this.isServiceSelectedVisible = true;
        }
        else {
          let service = '';
          if (length == 2) {
            service = 3;
          }
          else {
            service = this.servicetype.toString();
          }
          this.mychoiceService.getRawMaterialPackageAdd(localStorage.getItem('raw_material_id'), this.payment_status, this.pill_id, this.package_id, this.title, this.additional_request, service, is_temporary_storage).then((res) => {
            // console.log(res);
            if (res.status == 200) {
              localStorage.removeItem('sub_category_id');
              localStorage.removeItem('raw_material_id');
              localStorage.removeItem('package_id');
              localStorage.removeItem('pill_id');
              localStorage.removeItem('option');
              localStorage.removeItem('etc');
              localStorage.removeItem('storage_box');
              this.showModal = true;
              //  this.$swal("Temporary storage is complete");
              //  this.$router.push(this.to);
            } else {
              this.$swal(res.message, "error");
            }
          });
        }
      }
    },
    option_list() {
      var option_data = JSON.parse(localStorage.getItem("option") || "[]");
      // console.log("# of option_data: " + option_data.length);
      for (let i = 0; i < option_data.length; i++) {

        var option_array = option_data[i];
        var res_option_type = Object.keys(option_array).toString();
        var res_option_value = Object.values(option_array).toString();
        //  console.log(res_option_type);
        // console.log(res_option_value);
        this.mychoiceService.optiondetails(res_option_type, res_option_value).then((res) => {
          this.items.push({ 'category': res.data.data[0].category, 'explanation': res.data.data[0].explanation });
          // console.log(res);
        });
      }

    },
  }
};
</script>