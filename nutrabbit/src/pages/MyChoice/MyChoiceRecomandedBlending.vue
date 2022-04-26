<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection recomanded-blending-main">
        <div class="my-choice-heading">
          <h2>my choice</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item recomanded-blending">
            <div class="heading-wrap">
              <div class="heading heading-blue">
                <h2>{{$t('myChoice.RecommendedBlending.title')}}</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button>
                      <i class="icon-info"></i>
                    </button>
                    <template #content>
                      <div class="heading-tooltip-content" v-html="$t('myChoice.RecommendedBlending.popup')">
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
              <div class="heading-left">
                <div class="dropdown">
                  <!-- <vue-select
                    :options="['in order of popularity', 'in alphabetical Order']"
                    placeholder="in order of popularity"
                    close-on-select
                  ></vue-select>-->
                  <select @change="onChange">
                    <option value="popularity">{{$t('myChoice.RawMaterial.popularity')}}</option>
                    <option value="alphabetical">in alphabetical order</option>
                  </select>
                </div>
              </div>
            </div>
            <ul class="recomanded-list">
              <li v-for="item in blendingData" :key="item">
                <SearchCard type="recomandedBlending" :category="item.category_name_ko" :name="item.name_ko"
                  :desc="item.description_ko" :image="item.thumbnail_1_path" :image_hover="item.thumbnail_2_path"
                  :image_link="imgBaseUrl" :route_link="'/choice-recommended-blending-detailed-page/' + item.id" />
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
export default {
  name: "MyChoiceRecomandedBlending",
  components: {
    Popper,
    SearchCard,
    "vue-select": VueNextSelect,
  },
  data() {
    return {
      blendingData: [],
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.allBlendingData();
  },
  methods: {
    // allBlendingData list
    allBlendingData() {
      this.mychoiceService.getRecommendedData().then((res) => {
        // console.log(res);
        if (res.status == 200) {
          //  console.log('allBlendingData res', res.data.blendingData);
          this.blendingData = res.data.blendingData;
        } else {

          this.$swal(res.data.message, "error");
        }
      });
    },
    onChange(event) {
      // console.log(event.target.value);
      if (event.target.value == 'popularity') {

        this.mychoiceService.getRecommendedBlendingPopularity().then((res) => {
          //  console.log(res.data);
          if (res.data.status == 200) {
            // console.log('getRawMaterial res', res.data.data.rawMaterialData);
            this.blendingData = res.data.data.blendingData;

          } else {
            this.$swal(res.data.message, "error");
          }
        });
      }
      else if (event.target.value == 'alphabetical') {

        this.mychoiceService.getRecommendedBlendingAlphabetical().then((res) => {
          // console.log(res.data);
          if (res.data.status == 200) {
            // console.log('getRawMaterial res', res.data.data.rawMaterialData);
            this.blendingData = res.data.data.blendingData;

          } else {
            this.$swal(res.data.message, "error");
          }
        });
      }
    },
  }
};
</script>