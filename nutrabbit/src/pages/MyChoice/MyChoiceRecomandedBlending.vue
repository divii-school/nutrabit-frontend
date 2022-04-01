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
                <div class="dropdown">
                  <vue-select
                    :options="['in order of popularity', 'in order of popularity']"
                    placeholder="in order of popularity"
                    close-on-select
                  ></vue-select>
                </div>
              </div>
            </div>
            <ul class="recomanded-list">
              <li v-for="item in blendingData" :key="item">
                <SearchCard :item="item" type="recomandedBlending" />
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
        if (res.response) {
          this.$swal(res.response.data.message, "error");
        } else {
          //  console.log('allBlendingData res', res.data.blendingData);
          this.blendingData = res.data.blendingData;
        }
      });
    },
  }
};
</script>