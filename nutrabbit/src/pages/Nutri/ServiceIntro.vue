<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice theme-green with-img servIntro">
            <h2 class="nutri-choice-heading text-center">
              {{ $t("nutri.title.heading") }}
            </h2>
            <p class="title text-center">{{ $t("nutri.title.sub_heading") }}</p>
            <p class="text-center">{{ $t("nutri.title.paragraph1") }} <br>
              {{ $t("nutri.title.paragraph2") }}
            </p>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-medium">
          <div class="sampleServices about-recom">
            <p class="title text-center samllTitle">nutri 3.3</p>
            <h4 class="title text-center">{{ $t("nutri.title.heading2") }}</h4>
            <ul class="nutriBlending">
              <li v-for="(item, index) of processData" :key="index">
                <img :src="item.img">
                <span>{{ item.step }}</span>
                <p>{{ item.desc }}</p>
              </li>
            </ul>
          </div>
           <ul>
            <li>{{ $t("nutri.title.nutri_list") }}</li>
            <li>{{ $t("nutri.title.nutri_list1") }}</li>
          </ul>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-medium">
          <div class="sampleServices about-recom">
            <p class="title text-center samllTitle">nutri 3.3</p>
            <h4 class="title text-center">{{ $t("nutri.title.blending") }}</h4>
            <div class="nutri-dom-product blendedPro">
              <ul >
                <li v-for="(item, index) of nutriList" :key="index">
                  <div class="nutri-product-item">
                    <div @click="this.$router.push(`/nutri-detail/${item.id}`)">
                      <img v-if="item.thumbnail_path" class="nutri-pimg" :src="imgBaseUrl +  item.thumbnail_path" alt="" />
                      <img v-else class="nutri-pimg" src="../../assets/images/content_place.png" alt="" />
                    </div>
                    <div class="tag-wrap">
                      <span>nutri 3.3</span>
                      <span>nutri 3.3</span>
                    </div>
                    <p @click="this.$router.push(`/nutri-detail/${item.id}`)">{{item.name_ko}}</p>
                  </div>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NutriService from "../../services/NutriService";
export default {
  
  name: "ServiceIntro",
  components: {
  },
  data() {
    return {
      
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      lang:"",
      nutriList:[],
    };
  },

computed: {
  processData() { return [
        {
          img: "../../../src/assets/images/blending1.png",
          step: "Step.1",
          desc: this.$t("nutri.title.desc1")
        },
        {
          img: "../../../src/assets/images/blending2.png",
          step: "Step.2",
          desc: this.$t("nutri.title.desc2")
        },
        {
          img: "../../../src/assets/images/blending3.png",
          step: "Step.3",
          desc: this.$t("nutri.title.desc3")
        },
        {
          img: "../../../src/assets/images/blending4.png",
          step: "Step.4",
          desc: this.$t("nutri.title.desc4")
        },
      ]
  }
},
 

  created() {
    this.nutriService = new NutriService();
  },

  methods: {

    getNutriService() {
      this.nutriService
        .getNutriService(
          this.lang,
        )
        .then((res) => {
          if (res.status == 200) {
            // console.log("res", res);
            this.nutriList = res.data.data.blendingData;
            // console.log("nutriList", this.nutriList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },

  mounted() {
    this.getNutriService();
  }
};
</script>