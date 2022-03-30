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
        <swiper-slide v-for="(slider, index) in MainSlider" :key="index">
          <img
            :src="'http://api-nutrabbit-dev.dvconsulting.org/public/' + slider.desktop_banner_path"
            alt
          />
          <p class="banner-title text-center">{{ slider.title }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="main-page-body">
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
          <button class="btn-small-solid">Go to my choice</button>
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
          </div>
          <div class="nutri-dom-product">
            <ul>
              <li v-for="(item, index) in ProductData" :key="index">
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
      ProductData: [
        {
          img: "../../../src/assets/images/dom-pimg.png",
          title: "Nutri ODM Product Title",
          tags: [
            {
              tag1: "nutri 3.3",
              tag1: "nutri 3.3",
            },
          ],
        },
        {
          img: "../../../src/assets/images/dom-pimg.png",
          title: "Event Banner",
          tags: [
            {
              tag1: "nutri 3.3",
              tag1: "nutri 3.3",
            },
          ],
        },
        {
          img: "../../../src/assets/images/dom-pimg.png",
          title: "Event Banner",
          tags: [
            {
              tag1: "nutri 3.3",
              tag1: "nutri 3.3",
            },
          ],
        },
        {
          img: "../../../src/assets/images/dom-pimg.png",
          title: "Event Banner",
          tags: [
            {
              tag1: "nutri 3.3",
              tag1: "nutri 3.3",
            },
          ],
        },
        {
          img: "../../../src/assets/images/dom-pimg.png",
          title: "Event Banner",
          tags: [
            {
              tag1: "nutri 3.3",
              tag1: "nutri 3.3",
            },
          ],
        },
        {
          img: "../../../src/assets/images/dom-pimg.png",
          title: "Event Banner",
          tags: [
            {
              tag1: "nutri 3.3",
              tag1: "nutri 3.3",
            },
          ],
        },
      ],
    };
  },
  setup() {
    const common = inject("common");
    return {
      modules: [Pagination],
      common
    };
  },
  mounted() {
    this.created();
    if (localStorage.getItem("logedInUserDetails")) {
      this.logedInUserDetails =
        JSON.parse(localStorage.getItem("logedInUserDetails")) || {};
    } else {
      this.logedInUserDetails = null;
    }
  },
  methods: {
    async created() {
      try {
        const data = await axios.post("/v1/sites/banner", {
          lang: "KO"
        })
          .then((response) => {
            if (response.data.status == 200) {
              this.MainSlider = response.data.data.bannerData;
              // console.log(response.data.data.bannerData);
            }
          });
      }
      catch (e) {
        console.error(e);
      }
    },
  }

};
</script>