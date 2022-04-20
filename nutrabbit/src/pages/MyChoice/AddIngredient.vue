<template>
  <div class="main-body themePurple">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>raw material storage box</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product addWrap">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Raw material</h2>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="selectAllHeader">
                <li>
                  <div class="radio-wrap">
                    <label class="custom-radio">
                      <input type="checkbox" @click="selectAll" v-model="allSelected" />
                      <span class="checkmark"></span>
                      Select All
                    </label>
                  </div>
                  <button @click="deleteStorageBox" class="deleteBtn">
                    delete selection
                    <i class="icon-menu-delete"></i>
                  </button>
                  <my-modal-component v-show="showModal">
                    <Modal
                      @close="closeModal"
                      bodytext1="Are you sure you want to delete the selected raw material?"
                      btnText1="cancellation"
                      btnText2="Confirm"
                      @confirm="confirmbtn($event)"
                      link="/add-ingredient"
                    />
                  </my-modal-component>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of storage_box_list_data" :key="index">
                  <ProductListStorageBox
                    :item="item"
                    :allSelected="allSelected"
                    @storageBoxId="UpdatedId($event)"
                  />
                </li>
              </ul>
              <div class="addIng">
                <button @click="this.$router.push(`/my-choice-category-selection/`)">
                  <i class="icon-menu-add"></i> Add additional ingredients
                </button>
                <div class="tolltip-outer">
                  <Popper>
                    <button>
                      <i class="icon-info"></i>
                    </button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>Add more ingredients of your choice.</li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="btn-wrap flexEnd">
                <button @click="gotoNextPage()" class="btn-small-solid blue">next</button>
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
import ProductListStorageBox from "../../components/ProductListStorageBox.vue";
import MyChoiceService from "../../services/MyChoiceService";
import Modal from "../../components/Modal.vue";
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductListStorageBox,
    Button,
    Modal
  },
  data() {
    return {
      storage_box_list_data: '',
      box_id_data: [],
      allSelected: false,
      sub_category_id: localStorage.getItem('sub_category_id'),
      showModal: false,
      btn: ''
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.storage_box_list();
    localStorage.removeItem('package_id');
    localStorage.removeItem('pill_id');
    localStorage.removeItem('option');
    localStorage.removeItem('etc');
    localStorage.removeItem('storage_box');
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    confirmbtn(e) {
      this.btn = e;
      if (this.btn == 'confirm') {
        for (let i = 0; i < this.box_id_data.length; i++) {
          let box_id = this.box_id_data[i];
          let uid = localStorage.getItem('uid');
          this.mychoiceService.deleteIngredientsStorageBox(uid, box_id).then((res) => {
            //console.log(res.data);
            if (res.status = 200) {
              this.$swal("Successfully Deleted");
              this.storage_box_list();

            } else {
              this.$swal(res.data.message, "error");
            }
          });

        }

      }
    },
    gotoNextPage() {

       if (this.box_id_data.length == 0) {
        this.$swal("Please Select at Least one");
      }
      else {        
    var option_data = JSON.parse(localStorage.getItem("option") || "[]");

            for (let i = 0; i < option_data.length; i++) {
              var option_array = option_data[i];
              var res_option_type = Object.keys(option_array).toString();
              console.log(res_option_type);
              if (res_option_type == "raw_material") { option_data.pop(option_data[i]); };
            }

    for (let i = 0; i < this.box_id_data.length; i++) {
          let box_id = this.box_id_data[i];
           // Modifying
    var put_raw = {
        raw_material:box_id
    };
    option_data.push(put_raw);
    }

    // Saving
    localStorage.setItem("option", JSON.stringify(option_data));

      localStorage.setItem('raw_material_id', this.box_id_data);
      localStorage.setItem('storage_box', 'storage_box');
      this.$router.push('/ingredient-formulation/');
      }

    },
    storage_box_list() {
      let uid = localStorage.getItem('uid');
      this.mychoiceService.getRawMaterialStorageBox(uid).then((res) => {
        //console.log(res);
        if (res.status == 200) {
          this.storage_box_list_data = res.data.data;
          //console.log(res.data.data);
        } else {
          this.$swal(res.message, "error");
        }
      });
    },
    selectAll() {

      if (!this.allSelected) {
        //  console.log(this.storage_box_list_data.length);
        for (let i = 0; i < this.storage_box_list_data.length; i++) {
          let box_id = this.storage_box_list_data[i];
          this.box_id_data.push(box_id.id);
          // console.log(box_id.id);
        }

      } else {
        this.box_id_data = [];
      }

    },
    UpdatedId(e) {
      if (this.box_id_data.length == 0) {
        this.box_id_data.push(e);
      }
      else {
        console.log(this.box_id_data.includes(e));
        let data = this.box_id_data.includes(e);
        if (data == false) {
          this.box_id_data.push(e);
        }
        else if (data == true) {
          this.box_id_data.pop(e);
        }
      }
    },
    deleteStorageBox() {
      //console.log(this.box_id_data.length);
      if (this.box_id_data.length == 0) {
        this.$swal("Please Select at Least one");
      }
      else {
        this.showModal = true;
      }
    },
  }
};
</script>