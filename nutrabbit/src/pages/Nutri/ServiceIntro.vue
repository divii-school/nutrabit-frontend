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
            <p class="text-center">
              {{ $t("nutri.title.paragraph1") }} <br />
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
              <li>
                <img src="~@/assets/images/blending1.png"/>
                <span>Step.1</span>
                <p>{{$t("nutri.title.desc1")}}</p>
              </li>
              <li>
                <img src="~@/assets/images/blending2.png"/>
                <span>Step.2</span>
                <p>{{$t("nutri.title.desc2")}}</p>
              </li>
              <li>
                <img src="~@/assets/images/blending3.png"/>
                <span>Step.3</span>
                <p>{{$t("nutri.title.desc3")}}</p>
              </li>
              <li>
                <img src="~@/assets/images/blending4.png"/>
                <span>Step.3</span>
                <p>{{$t("nutri.title.desc4")}}</p>
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
              <ul>
                <li v-for="(item, index) of nutriList" :key="index">
                  <div class="nutri-product-item">
                    <div @click="this.$router.push(`/nutri-detail/${item.id}`)">
                      <img
                        v-if="item.thumbnail_path"
                        class="nutri-pimg"
                        :src="imgBaseUrl + item.thumbnail_path"
                        alt=""
                      />
                      <img
                        v-else
                        class="nutri-pimg"
                        src="../../assets/images/content_place.png"
                        alt=""
                      />
                    </div>
                    <div class="tag-wrap">
                      <span>nutri 3.3</span>
                      <span>nutri 3.3</span>
                    </div>
                    <p @click="this.$router.push(`/nutri-detail/${item.id}`)">
                      {{ item.name }}
                    </p>
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
  data() {
    return {
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      nutriList: [],
      lang:"",
    };
  },

  created() {
    this.nutriService = new NutriService();
  },

  methods: {
    getNutriService() {
      this.nutriService
        .getNutriService(this.lang)
        .then((res) => {
          if (res.status == 200) {
            // console.log("res", res);
            this.nutriList = res.data.data.blendingData;
            console.log("nutriList", this.nutriList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getNutriService();
  },
};
</script>

<style scoped>
.nutri-product-item .nutri-pimg,
.nutri-product-item p {
  cursor: pointer;
}
</style>