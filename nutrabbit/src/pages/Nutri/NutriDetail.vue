<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="recomanded-blending-details">
        <div class="blending-left">
          <div v-if="product_sub_image_path.length > 0">
            <!-- <swiper
              :spaceBetween="10"
              :modules="[Thumbs]"
              :thumbs="{ swiper: thumbsSwiper }"
              class="mySwiper"
              v-for="(items, index) of nutriDetails"
              :key="index"
            >
              <swiper-slide
                v-for="(item, index) of items.product_sub_image_path"
                :key="index"
              >
                <img v-if="item" :src="imgBaseUrl + item" alt />
              </swiper-slide>
            </swiper> -->
            <swiper class="mySwiper">
              <swiper-slide>
                <img :src="imgBaseUrl + thumb_image" alt />
              </swiper-slide>
            </swiper>
          </div>
          <div v-else>
            <img src="../../assets/images/content_place.png" alt="" />
          </div>
          <div v-if="product_sub_image_path.length > 0">
            <swiper
              :spaceBetween="10"
              :slidesPerView="4"
              :freeMode="true"
              :modules="[Thumbs]"
              watch-slides-progress
              @swiper="setThumbsSwiper"
              class="mySwiper2 thumbsSwiperCustom"
              v-for="(items, index) of nutriDetails"
              :key="index"
            >
              <swiper-slide
                v-for="(item, index) of items.product_sub_image_path"
                :key="index"
              >
                <img v-if="item" :src="imgBaseUrl + item" alt />
              </swiper-slide>
            </swiper>
          </div>
          <!-- <div v-else>
            <img src="../../assets/images/content_place.png" alt="" />
          </div> -->
        </div>
        <div
          class="blending-right"
          v-for="(item, index) of nutriDetails"
          :key="index"
        >
          <div class="right-heading">
            <i class="login-icon-green"></i>
            <h2>{{ item.name_ko }}</h2>
            <div class="blending-tag">
              <span
                v-for="(tag, index) in splitJoin(item.tags_ko)"
                :key="index"
                v-text="tag"
              ></span>
            </div>
          </div>
          <div class="product-details-wrap">
            <p>{{ item.description_ko }}</p>
            <button @click="openmodal()" class="btn-primary blue-btn-solid">
              {{ $t("nutri.nutriDetails.button") }}
            </button>
          </div>
        </div>
      </div>
      <div class="nutriDetail">
        <img :src="imgBaseUrl + detail_image_path" />
      </div>
    </div>
  </div>
  <div class="main-page">
    <div class="main-page-body">
      <div class="devider"><i class="icon-grey-star"></i></div>
      <div class="container-medium">
        <div class="nutri-blending">
          <div class="nutri-choice">
            <h2 class="nutri-choice-heading text-center">
              {{ $t("nutri.nutriDetails.title") }}<br />
              {{ $t("nutri.nutriDetails.title2") }}
            </h2>
            <p class="desc text-center">
              {{ $t("nutri.nutriDetails.subtitle") }}
            </p>
            <button class="btn-small-solid green" @click="openmodal()">
              {{ $t("nutri.nutriDetails.button") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
    v-show="isModalVisible"
    @close="closeModal"
    :bodytext1="$t('nutri.nutrimodal.bodytext')"
    :bodytext2="$t('nutri.nutrimodal.bodytext2')"
    :btnText1="$t('nutri.nutrimodal.btntext')"
    :btnText2="$t('nutri.nutrimodal.btntext2')"
    @confirm="confirm"
    link = '/my-application-detail'
  />
</template>


<script>
import Modal from "../../components/Modal.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref } from "vue";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useRoute } from "vue-router";
import NutriService from "../../services/NutriService";
 

export default {
  name: "NutriDetail",
  components: {
    Swiper,
    SwiperSlide,
    Modal,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      FreeMode,
      Navigation,
    };
  },
  data() {
    return {
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      blending_id: null,
      blending_data: "",
      ProductImages: ["../../../src/assets/images/suggested-product-img.png"],
      lang: "KO",
      id: "",
      nutriDetails: [],
      isModalVisible: false,
      product_sub_image_path: [],
      thumb_image: "",
      detail_image_path:''
    };
  },
  created() {
    this.nutriService = new NutriService();
  },
  mounted() {
    this.getNutridetails();
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
      // window.location.href = "";
    },

    confirm(){
      this.confirmbutton();
    },

    openmodal() {
      this.isModalVisible = true;
      // this.confirmbutton();
    },

    splitJoin(theText) {
      // console.log(theText.split(','))
      return theText.split(",");
    },

    getNutridetails() {
      this.id = this.$route.params.id;
      // console.log("id",this.id);
      this.nutriService
        .getNutridetails(this.id)
        .then((res) => {
          if (res.status == 200) {
            this.nutriDetails = res.data.data;
            //  console.log("this.nutriDetails",this.nutriDetails);
            this.product_sub_image_path =
              res.data.data[0].product_sub_image_path;
              this.thumb_image= res.data.data[0].thumbnail_path;
              this.detail_image_path=res.data.data[0].detail_image_path;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    confirmbutton() {
      this.id = this.$route.params.id;
      // console.log("id",this.id);
      this.nutriService
        .confirmbutton(this.id)
        .then((res) => {
          if (res.status == 200) {
            // console.log("ress", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.mySwiper2 {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper2 .swiper-slide {
  width: 25%;
  height: 100%;
  /* opacity: 0.4; */
}

.thumbsSwiperCustom .swiper-slide {
  margin-bottom: 9px !important;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>