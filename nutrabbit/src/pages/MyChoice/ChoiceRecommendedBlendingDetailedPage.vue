<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="recomanded-blending-details">
        <div class="blending-left">
          <div v-if="blending_image.length > 0">
            <swiper class="mySwiper">
              <swiper-slide>
                <img :src="imgBaseUrl + thumb_image" alt />
              </swiper-slide>
            </swiper>
            
            <swiper :spaceBetween="10" :slidesPerView="4" :freeMode="true" :modules="[Thumbs]" watch-slides-progress
              @swiper="setThumbsSwiper" class="mySwiper2" v-for="(items, index) of blending_data" :key="index">
              <swiper-slide v-for="(item, index) of items.detail_image_path" :key="index">
                <img :src="imgBaseUrl + item" alt />
              </swiper-slide>
            </swiper>
          </div>
          <div v-else>
            <img src="../../assets/images/thumbnail_place.png" alt />
          </div>


        </div>
        <div class="blending-right" v-for="(item, index) of blending_data" :key="index">
          <div class="right-heading">
            <i class="login-icon"></i>
            <h2>{{ item.name_ko }}</h2>
            <div class="blending-tag">
              <span v-for="(tag, index) in splitJoin(item.tags_ko)" :key="index" v-text="tag"></span>
            </div>
          </div>
          <div class="product-details-wrap">
            <ul>
              <!-- <li v-for="(desc, index) of item.innderData" :key="index">
                <h2>{{ desc.title }}</h2>
                <p>{{ desc.desc }}</p>
              </li>-->

              <li>
                <h2>{{ $t("myChoice.RecommendedBlending.detail.main_raw_material") }}</h2>
                <p>{{ item.material_name_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RecommendedBlending.detail.Auxiliary_material") }}</h2>
                <p>{{ item.sub_raw_materials }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RecommendedBlending.detail.Efficacy") }}</h2>
                <p>{{ item.efficiency_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RecommendedBlending.detail.Appearance") }}</h2>
                <p>{{ item.ingredients_en }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RecommendedBlending.detail.Product_Information") }}</h2>
                <p>{{ item.description_ko }}</p>
              </li>
            </ul>
            <button
              @click="this.$router.push({ name: 'ChoiceRecommendedBlendingPackageSelection', query: { blending_id: this.blending_id } })"
              class="btn-primary blue-btn-solid">{{ $t("button.next") }}</button>
          </div>
          <div class="suggested-product">
            <h2>{{ $t("myChoice.RecommendedBlending.detail.Similar_Products") }}</h2>
            <!-- <img src="../assets/images/suggested-product-img.png" alt="" /> -->
            <ul class="smilar-product-img" v-if="item.similar_image_path">
              <li v-for="(items, index) of item.similar_image_path" :key="index">
                <img v-if="items" :src="imgBaseUrl + items" alt />
                <img v-else src="../../assets/images/similar_place.png" alt />
              </li>
            </ul>
            <ul class="smilar-product-img" v-else>
              <li>
                <img src="../../assets/images/similar_place.png" alt />
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
import "swiper/css";
import { ref } from 'vue';
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { useRoute } from 'vue-router'
import MyChoiceService from "../../services/MyChoiceService";

export default {
  name: "ChoiceRecommendedBlendingDetailedPage",
  components: {
    Swiper,
    SwiperSlide,
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
      blending_data: '',
      blending_image: '',
      thumb_image:"",
      // pagination: {
      //   clickable: true,
      //   renderBullet: (index, className) => {
      //     return (
      //       '<span class="' +
      //       className +
      //       '" >' +
      //       `<img src="${this.ProductImages[index]}" alt="" />` +
      //       "</span>"
      //     );

      //   },
      // },
      // modules: [Pagination],
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
      ProductImages: [
        "../../../src/assets/images/suggested-product-img.png",
      ],
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.blendingDetail();
  },
  methods: {
    splitJoin(theText) {
      // console.log(theText.split(','))
      return theText.split(',');
    },
    // blendingDetails
    blendingDetail() {
      let sub_cat = useRoute();
      this.blending_id = sub_cat.params.id;
      const setBlendingId = this.blending_id;
      // console.log(setBlendingId);

      this.mychoiceService.getRecommendedBlendingDetail(setBlendingId).then((res) => {
        //console.log(res.data.data[0].thumbnail_1_path);
        if (res.data.status == 200) {
          this.blending_data = res.data.data;
          this.blending_image = res.data.data[0].detail_image_path;
          this.thumb_image=res.data.data[0].thumbnail_1_path;
        } else {
          this.$swal(res.data.message, "error");
        }
      });
    },
  }
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
  margin-bottom: 10px;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>