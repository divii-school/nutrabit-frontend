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
                  <button  @click="deleteStorageBox" class="deleteBtn">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of storage_box_list_data" :key="index">
                  <ProductListStorageBox :item="item" :allSelected="allSelected" @storageBoxId="UpdatedId($event)" />
                </li>
              </ul>
              <div class="addIng">
                <button><i class="icon-menu-add"></i> Add additional ingredients</button>
                <div class="tolltip-outer">
                  <Popper>
                    <button><i class="icon-info"></i></button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>
                            Add more ingredients of your choice.
                          </li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="btn-wrap flexEnd">
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
import Button from '../../components/Button.vue';
import ProductListStorageBox from "../../components/ProductListStorageBox.vue";
import MyChoiceService from "../../services/MyChoiceService";
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductListStorageBox,
    Button,
  },
  data() {
    return {
      storage_box_list_data:'',
      box_id_data:[],
      allSelected: false,
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
    this.storage_box_list();
  },
  methods: {
    storage_box_list() {
      let uid = localStorage.getItem('uid');
      this.mychoiceService.getRawMaterialStorageBox(uid).then((res) => {
         //console.log(res);
        if (res.status == 200) {
          this.storage_box_list_data = res.data.data;
          // console.log(res.data.data);
        } else {
          this.$swal(res.message, "error");
        }
      });
    },
    UpdatedId(e) {
      this.box_id_data.push(e);
      //console.log(this.box_id_data);
    },
    deleteStorageBox() {

      console.log(this.box_id_data.length);

       if (this.box_id_data.length == 0) {
        this.$swal("Please Select at Least one");
      }
      else {
         for (let i = 0; i < this.box_id_data.length; i++) {
         let box_id = this.box_id_data[i];
         let uid = localStorage.getItem('uid');
        this.mychoiceService.deleteIngredientsStorageBox(uid,box_id).then((res) => {
        //console.log(res.data);
        if (res.status=200) {
           this.$swal("Successfully Deleted");
          setTimeout(function(){
   window.location.reload();
}, 3000);
         
        } else {
            this.$swal(res.data.message, "error");
        }
      });

      }
      }
    },
  }
};
</script>