<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="recomanded-blending-details">
        <div class="blending-left">
          <swiper
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
              <img
                :src="imgBaseUrl + item"
                alt
              />
            </swiper-slide>
          </swiper>
          <swiper
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :modules="[Thumbs]"
            watch-slides-progress
            @swiper="setThumbsSwiper"
            class="mySwiper2"
            v-for="(items, index) of nutriDetails"
            :key="index"
          >
            <swiper-slide
              v-for="(item, index) of items.product_sub_image_path"
              :key="index"
            >
              <img
                :src="imgBaseUrl + item"
                alt
              />
            </swiper-slide>
          </swiper>
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
            <p>{{item.description_ko}}</p>
            <button
              @click="openmodal()"
              class="btn-primary blue-btn-solid"
            >
              Get a quote
            </button>
          </div>
          <!-- <div class="suggested-product">
            <h2>similar products</h2>
            <img src="../assets/images/suggested-product-img.png" alt="" />
            <ul class="smilar-product-img">
              <li
                v-for="(items, index) of item.similar_image_path"
                :key="index"
              >
                <img :src="imgBaseUrl + items" alt />
              </li>
            </ul>
          </div> -->
        </div>
      </div>
      <div class="nutriDetail">
        <img src="../../assets/images/nutri-info.jpg">
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
              A service just for you<br> Easily seize your own product launch opportunity!
            </h2>
            <p
              class="desc text-center"
            >Click the button below to become the hero of the product!</p>
            <button class="btn-small-solid green" @click="openmodal()">Get a quote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal 
    v-show="isModalVisible"
    @close="closeModal"
    bodytext1="Would you like to get a quote for this product?"
    bodytext2 = "A quote will be sent to you by email when you click OK."
    btnText1="cancellation"
    btnText2="Confirm"
    link = ''
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
    Modal
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
      productDetails: [
        {
          title: "dark blend",
          tags: [
            {
              tag1: "Allergic",
              tag2: "Masks",
              tag3: "Disposable gloves",
              tag4: "Immunomodulators",
              tag5: "Vitamins",
              tag6: "Nasal drop",
            },
          ],
          innderData: [
            {
              title: "main raw material",
              desc: "Description of the main ingredient",
            },
            {
              title: "auxiliary material",
              desc: "Description of auxiliary ingredients",
            },
            {
              title: "efficacy",
              desc: "Description of Efficacy",
            },
            {
              title: "appearance",
              desc: "Description of the features",
            },
            {
              title: "Product Information",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tristique nisl turpis nisl placerat ac, diam felis.",
            },
          ],
        },
      ],
      silimarProduct: [
        {
          title: "similar products",
          productImg: [
            {
              img1: "../../../src/assets/images/suggested-product-img.png",
              img2: "../../../src/assets/images/suggested-product-img.png",
              img3: "../../../src/assets/images/suggested-product-img.png",
              img4: "../../../src/assets/images/suggested-product-img.png",
              img5: "../../../src/assets/images/suggested-product-img.png",
            },
          ],
        },
      ],
      ProductImages: ["../../../src/assets/images/suggested-product-img.png"],
      lang:"KO",
      id:"",
      nutriDetails:[],
      isModalVisible:false,
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

    openmodal() {
      this.isModalVisible = true;
      this.confirmbutton();
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
        .confirmbutton()
        .then((res) => {
          if (res.status == 200) {
            console.log("ress",res);
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
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>