<template>
  <div class="main-page">
    <div class="main-slider">
      <swiper
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(slider, index) of MainSlider" :key="index">
          <img
            :src="'http://api-nutrabbit-dev.dvconsulting.org/public/' + slider.desktop_banner_path"
            alt
          />
          <p class="banner-title text-center">{{ slider.title }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="token" class="main-page-body">
      <div class="container-medium">
        <div class="nutri-choice with-img">
          <span class="my-choice-title-top">my choice</span>
          <p class="title text-center">my choice</p>
          <h2 class="nutri-choice-heading text-center">
            Direct health functional food recipes
            <br />Opportunity to create!
          </h2>
          <p
            class="desc text-center"
          >Create your own recipe with just one combination of your choice!</p>
          <router-link to="/my-choice">
          
            <button class="btn-small-solid">Go to my choice</button>
          </router-link>
        </div>
      </div>
      <div class="devider">
        <i class="icon-grey-star"></i>
      </div>
      <div class="container-medium">
        <div class="nutri-blending">
          <div class="nutri-choice">
            <span class="my-choice-title-top">nutri 3.3</span>
            <p class="title text-center">nutri 3.3 blending</p>
            <h2 class="nutri-choice-heading text-center">
              service only for you
              <br />Easily seize the opportunity to launch
              your own product!
            </h2>
            <p
              class="desc text-center"
            >We provide all services from A to Z of health functional food.</p>
            <button class="btn-small-solid green">What is nutri 3.3 Blending?</button>
            <button @click="allNutidata">jhbkjbjk</button>
          </div>
          <div class="nutri-dom-product">
            <ul>
              <li v-for="(item, index) of ProductData" :key="index">
                <MainProductCard :item="item" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import MainProductCard from "../../components/MainProductCard.vue";
import { inject } from "vue";
import MainService from "../../services/MainService";
export default {
  name: "Main",
  components: {
    Swiper,
    SwiperSlide,
    MainProductCard,
  },
  data() {
    return {
      MainSlider: [],
      ProductData: [],
      token: localStorage.getItem('token'),
    };
  },
  setup() {
    const common = inject("common");
    return {
      modules: [Pagination],
      common
    };
  },
  created() {
    this.MainService = new MainService();
  },
  mounted() {
    this.allBanner();

    if (localStorage.getItem("token")) {
      this.allBanner();
      this.allNutidata();
    } else {
      this.allBanner();
    }
  },
  methods: {
    // allBanner list
    allBanner() {
      this.MainService.getSlider().then((res) => {
        if (res.response) {
          this.$swal(res.response.data.message, "error");
        } else {
          // console.log('getBanner res', res.data.bannerData);
          this.MainSlider = res.data.bannerData;
        }
      });
    },
    // allNutidata list
    allNutidata() {
      this.MainService.getNutriData().then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.ProductData = res.data.blendingData;

        } else {
          // console.log('getNutridata res', res.data.blendingData);
          this.$swal(res.message, "error");
        }
      });
    },
  }

};
</script>