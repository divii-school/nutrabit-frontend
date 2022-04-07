<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection">
        <div class="my-choice-heading">
          <h2>my choice</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item recomanded-blending">
            <div class="heading-wrap">
              <div class="heading heading-blue">
                <h2>Recommended blending</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button>
                      <i class="icon-info"></i>
                    </button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>
                            This is a recommended recipe for those who have
                            difficulty choosing raw materials.
                          </li>
                          <li>
                            Recommended blending is a semi-finished product that
                            has already been formulated with effective
                            ingredients and formulations.
                          </li>
                          <li>Choose the recommended recipe you want.</li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="heading-left">
                <router-link to="/my-choice-recomanded-blending">
                  <a href class="see-more">
                    <i class="icon-plus"></i>see more
                  </a>
                </router-link>
              </div>
            </div>
            <ul class="recomanded-list">
              <li v-for="item in blendingData" :key="item">
                <SearchCard :item="item" />
              </li>
            </ul>
          </div>
          <div class="choice-selection-item raw-material">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Raw Material</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button>
                      <i class="icon-info"></i>
                    </button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>
                            This is a menu where I make my own health functional
                            food recipes.
                          </li>
                          <li>
                            Choose the raw material you want. (Multiple
                            selection possible)
                          </li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="heading-left">
                <div class="dropdown">
                  <!-- <vue-select
                    :options="['in order of popularity', 'in order of popularity']"
                    placeholder="in order of popularity"
                    close-on-select
                  ></vue-select>-->
                  <select @change="sortingMethod($event)">
                    <option value="popularity">in order of popularity</option>
                    <option value="alphabetical">alphabetical order</option>
                  </select>
                </div>
              </div>
            </div>
            <ul class="raw-material-list">
              <li v-for="data in rawMaterialData" :key="data">
                <div class="list-left">
                  <div class="img-wrap">
                    <img
                      :src="'http://api-nutrabbit-dev.dvconsulting.org/public/' + data.thumbnail_fst_path"
                      alt
                    />
                  </div>
                  <div class="material-details">
                    <h2>{{ data.material_name_ko }}</h2>
                    <div class="description">
                      <p>{{ data.material_description_ko }}</p>
                    </div>
                  </div>
                </div>
                <div class="list-right">
                  <button @click="showDetails(data.id)" class="btn-small-solid">add</button>
                </div>
                <my-modal-component v-show="showModal">
                  <ModalStorageBox
                    @close="closeModal"
                    bodytext1="Added to Raw Material inventory"
                    btnText1="go to locker"
                    btnText2="confirm"
                    :raw_material_id="raw_material_id"
                    :sub_category_id="this.sub_category_id"
                  />
                </my-modal-component>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
import Popper from "vue3-popper";
import SearchCard from "../../components/SearchCard.vue";
import VueNextSelect from "vue-next-select";
import MyChoiceService from "../../services/MyChoiceService";
import { useRoute } from 'vue-router'
import ModalStorageBox from "../../components/ModalStorageBox.vue";
export default {
  name: "MyChoiceCategorySelection",
  components: {
    Popper,
    SearchCard,
    ModalStorageBox,
    "vue-select": VueNextSelect,
  },
  data() {
    return {
      blendingData: [],
      rawMaterialData: [],
      sub_category_id: null,
      showModal: false,
      raw_material_id: null,
      key:null
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.rawMaterial();
    this.allBlendingData();
  },
  methods: {
    showDetails(id) {
      this.showModal = true;
      this.raw_material_id = id
    },
    closeModal() {
      this.showModal = false;
    },
    // rawMaterial list
    rawMaterial() {
      let sub_cat = useRoute();
      this.sub_category_id = sub_cat.params.id;
      const setSubCategory = this.sub_category_id;

      this.mychoiceService.getRawMaterial(setSubCategory).then((res) => {
        //console.log(res.data);
        if (res.status == 200) {
          // console.log('getRawMaterial res', res.data.data.rawMaterialData);
          this.rawMaterialData = res.data.data.rawMaterialData;

        } else {
          this.$swal(res.data.message, "error");
        }
      });
    },

    // allBlendingData list
    allBlendingData() {
      let limit = 4;
      let page = 1;
      this.mychoiceService.getRecommendedData(limit, page).then((res) => {
        //console.log(res);
        if (res.status == 200) {
          //  console.log('allBlendingData res', res.data.blendingData);
          this.blendingData = res.data.blendingData;

        } else {
          this.$swal(res.data.message, "error");
        }
      });
    },

    sortingMethod(event) {
       this.key = event.target.value;
      // console.log(this.key);
      if (this.key == 'alphabetical') {

        this.mychoiceService.getRawMaterialAlphabetical(this.sub_category_id).then((res) => {
          //console.log(res.data);
          if (res.status == 200) {
            // console.log('getRawMaterial res', res.data.data.rawMaterialData);
            this.rawMaterialData = res.data.data.rawMaterialData;

          } else {
            this.$swal(res.data.message, "error");
          }
        });


      }
      else {
        this.mychoiceService.getRawMaterial(this.sub_category_id).then((res) => {
        //console.log(res.data);
        if (res.status == 200) {
          // console.log('getRawMaterial res', res.data.data.rawMaterialData);
          this.rawMaterialData = res.data.data.rawMaterialData;

        } else {
          this.$swal(res.data.message, "error");
        }
      });
      }
    }

  }
};
</script>