<template>
  <div class="main-body themePurple">
    <div class="container-medium">
      <div class="recomanded-blending-details">
        <div class="blending-left">
          <!-- <swiper :pagination="pagination" :modules="modules" class="mySwiper" >
            <swiper-slide v-for="(item, index) of raw_material_image" :key="index">
              <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + item.image_path" alt="" />
            </swiper-slide>
          </swiper> -->
          <swiper
            :spaceBetween="10"
            :modules="[Thumbs]"
            :thumbs="{ swiper: thumbsSwiper }"
            class="mySwiper"
          >
            <swiper-slide v-for="(item, index) of raw_material_image" :key="index">
              <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + item.image_path" alt="" />
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
          >
            <swiper-slide v-for="(item, index) of raw_material_image" :key="index">
               <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + item.image_path" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div
          class="blending-right"
          v-for="(item, index) of raw_material_data"
          :key="index"
        >
          <div class="right-heading">
            <i class="login-icon"></i>
            <h2>{{ item.material_name_ko }}</h2>
            <div class="blending-tag">
              <span v-for="(tag, index) in splitJoin(item.tag_ko)" :key="index" v-text="tag"></span>
            </div>
          </div>
          <div class="product-details-wrap">
            <ul>
              <!-- <li v-for="(desc, index) of item.innderData" :key="index">
                <h2>{{ desc.title }}</h2>
                <p>{{ desc.desc }}</p>
              </li> -->
              <li>
                <h2>Material Prequotion</h2>
                <p>{{ item.material_prequotion_ko }}</p>
              </li>
              <li>
                <h2>Standard</h2>
                <p>{{ item.standard_ko }}</p>
              </li>
              <li>
                <h2>Daily Intake Amount</h2>
                <p>{{ item.daily_intake_amount_ko }}</p>
              </li>
              <li>
                <h2>Material Information</h2>
                <p>{{ item.material_description_ko }}</p>
              </li>
            </ul>
            <div class="blendBtnList">
              <button  @click="addRawMaterial()" class="btn-primary purple-btn-outline">add</button>
              <button  @click="this.$router.push(`/ingredient-formulation/${item.id}`)" class="btn-primary blue-btn-solid">next</button>
            </div>
          </div>
          <div class="suggested-product">
            <h2>Recommended Blending</h2>
            <ul class="smilar-product-img">
              <li v-for="(items, index) of blendingData" :key="index">
                <img @click="this.$router.push(`/choice-recommended-blending-detailed-page/${items.id}`)" :src="'http://api-nutrabbit-dev.dvconsulting.org/' + items.thumbnail_1_path" alt />
              </li>
            </ul>
          </div>
          <div
            class="suggested-product"
            v-for="(items, index) of silimarProduct"
            :key="index"
          >
            <h2>{{ items.title }}</h2>
            <!-- <img src="../assets/images/suggested-product-img.png" alt="" /> -->
            <ul
              class="smilar-product-img"
              v-for="(item, index) of items.productImg"
              :key="index"
            >
              <li>
                <img :src="item.img1" alt="" />
              </li>
              <li>
                <img :src="item.img2" alt="" />
              </li>
              <li>
                <img :src="item.img3" alt="" />
              </li>
              <li>
                <img :src="item.img4" alt="" />
              </li>
              <li>
                <img :src="item.img5" alt="" />
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
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
import { ref } from 'vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { useRoute } from 'vue-router'
import MyChoiceService from "../../services/MyChoiceService";

export default {
  name: "MyChoiceRawMaterialDetailedPage",
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
      raw_material_data: '',
      raw_material_id:'',
      raw_material_image:'',
      blendingData:'',
      // pagination: {
      //   clickable: true,
      //   renderBullet: (index, className) => {
      //     return (
      //       '<span class="' +
      //       className +
      //       '">' +
      //       `<img src="${this.ProductImages[index]}" alt="" />` +
      //       "</span>"
      //     );
      //   },
      // },
      // modules: [Pagination],
      productDetails: [
        {
          title: "aloe gel",
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
        "../../../src/assets/images/product-img1.png",
        "../../../src/assets/images/product-img2.png",
        "../../../src/assets/images/product-img3.png",
        "../../../src/assets/images/product-img4.png",
        "../../../src/assets/images/product-img6.png",
      ],
    };
  },
   created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.rawMaterialDetail();
    this.rawMaterialImage();
    this.allBlendingData();
  },
  methods: {
    splitJoin(theText) {
      // console.log(theText.split(','))
      return theText.split(',');
    },
    // rawmaterial details
    rawMaterialDetail() {
      let sub_cat = useRoute();
      this.raw_material_id = sub_cat.params.id;
      const setRawMaterialId = this.raw_material_id;
      //  console.log(setRawMaterialId);

      this.mychoiceService.getRawMaterialDetail(setRawMaterialId).then((res) => {
         //console.log(res.data);
        if (res.data.status == 200) {
          this.raw_material_data = res.data.data;
        } else {
          this.$swal(res.data.message, "error");
        }
      });
    },
     rawMaterialImage() {
      this.mychoiceService.getRawMaterialImage(this.$route.params.id).then((res) => {
        //  console.log(res.data);
        if (res.data.status == 200) {
          this.raw_material_image = res.data.data;
        } else {
          this.$swal(res.data.message, "error");
        }
      });
    },
    // allBlendingData list
    allBlendingData() {
      let limit = 5;
      let page = 1;
      this.mychoiceService.getRecommendedData(limit, page).then((res) => {
        // console.log(res);
        if (res.status == 200) {
          //  console.log('allBlendingData res', res.data.blendingData);
          this.blendingData = res.data.blendingData;

        } else {
          this.$swal(res.data.message, "error");
        }
      });
    },
    addRawMaterial() {
      //  console.log(this.raw_material_id);
      this.mychoiceService.rawMaterialStorageBoxAdd(this.$route.params.id).then((res) => {
        //console.log(res.data);
        if (res.data.status=200) {
          this.$router.push('/add-ingredient')
         
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
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>