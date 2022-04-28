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
          <div>
            <h2 class="heading">my choice</h2>
          </div>
          <div v-if="raw_material_image.length > 0">
            <swiper :spaceBetween="10" :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper">
              <swiper-slide v-for="(item, index) of raw_material_image" :key="index">
                <img :src="imgBaseUrl + item.image_path" alt="" />
              </swiper-slide>
            </swiper>
            <swiper :spaceBetween="10" :slidesPerView="4" :freeMode="true" :modules="[Thumbs]" watch-slides-progress
              @swiper="setThumbsSwiper" class="mySwiper2">
              <swiper-slide v-for="(item, index) of raw_material_image" :key="index">
                <img :src="imgBaseUrl + item.image_path" alt="" />
              </swiper-slide>
            </swiper>
          </div>
          <div v-else>
            <img src="../../assets/images/thumbnail_place.png" alt />
          </div>

        </div>
        <div class="blending-right" v-for="(item, index) of raw_material_data" :key="index">
          <div class="right-heading">
            <i class="login-icon"></i>
            <h2>{{ item.material_name_ko }}</h2>
            <div class="blending-tag" v-if="item.tag_ko">
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
                <h2>{{ $t("myChoice.RawMaterial.detail.Standard") }}</h2>
                <p>{{ item.standard_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RawMaterial.detail.Rawmaterials") }}</h2>
                <p>{{ item.material_description_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RawMaterial.detail.Appearance") }}</h2>
                <p>{{ item.material_function_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RawMaterial.detail.Functionalcontent") }}</h2>
                <p>{{ item.material_function_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RawMaterial.detail.DailyIntake") }}</h2>
                <p>{{ item.daily_intake_amount_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RawMaterial.detail.Precautions") }}</h2>
                <p>{{ item.material_prequotion_ko }}</p>
              </li>
              <li>
                <h2>{{ $t("myChoice.RawMaterial.detail.Etc") }}</h2>
                <p>{{ item.material_extra_info_ko }}</p>
              </li>
            </ul>
            <div class="blendBtnList">
              <button @click="addRawMaterial()" class="btn-primary purple-btn-outline">{{$t('button.add')}}</button>
              <button @click="gotoNextPage()" class="btn-primary blue-btn-solid">{{$t('button.next')}}</button>
            </div>
          </div>
          <div class="suggested-product">
            <h2>{{ $t('myChoice.RecommendedBlending.title') }}</h2>
            <ul class="smilar-product-img">
              <li v-for="(items, index) of blendingData" :key="index">
                <img v-if="items.thumbnail_1_path"
                class="link-img"
                  @click="this.$router.push(`/choice-recommended-blending-detailed-page/${items.id}`)"
                  :src="imgBaseUrl + items.thumbnail_1_path" alt />
                <img v-else @click="this.$router.push(`/choice-recommended-blending-detailed-page/${items.id}`)"
                  class="link-img"
                  src="../../assets/images/similar_place.png" alt />
              </li>
            </ul>
          </div>
          <div class="suggested-product">
            <h2>{{$t('myChoice.RawMaterial.detail.Similar_Products')}}</h2>
            <div v-if="raw_material_image.length > 0">
              <ul class="smilar-product-img">
                <li v-for="(item, index) of similar_product_img" :key="index">
                  <img :src="imgBaseUrl + item.image_path" alt="" />
                </li>
              </ul>
            </div>
            <div v-else>
              <ul class="smilar-product-img">
                <li><img src="../../assets/images/similar_place.png" alt /></li>
              </ul>

            </div>

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
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      raw_material_data: '',
      raw_material_id: '',
      raw_material_image: [],
      blendingData: '',
      item_exist: '',
      similar_product_img: [],
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
    localStorage.removeItem('option');
  },
  methods: {
    splitJoin(theText) {
      // console.log(theText.split(','))
      return theText.split(',');
    },
    gotoNextPage() {

      var option_data = JSON.parse(localStorage.getItem("option") || "[]");

      for (let i = 0; i < option_data.length; i++) {
        var option_array = option_data[i];
        var res_option_type = Object.keys(option_array).toString();
        //console.log(res_option_type);
        if (res_option_type == "raw_material") { option_data.pop(option_data[i]); };
      }

      var put_raw = {
        raw_material: localStorage.getItem('raw_material_id')
      };
      option_data.push(put_raw);
      // Saving
      localStorage.setItem("option", JSON.stringify(option_data));

      this.$router.push('/ingredient-formulation/');

    },
    // rawmaterial details
    rawMaterialDetail() {
      this.raw_material_id = localStorage.getItem('raw_material_id');
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
      this.mychoiceService.getRawMaterialImage(localStorage.getItem('raw_material_id')).then((res) => {
        //console.log(res.data);
        if (res.data.status == 200) {
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].type == 'similar_product_img') {
              this.similar_product_img.push(res.data.data[i]);
            }
            else {
              this.raw_material_image.push(res.data.data[i]);
            }
          }
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
      let uid = localStorage.getItem('uid');
      this.mychoiceService.getRawMaterialStorageBox(uid).then((res) => {
        //console.log(res);
        if (res.status == 200) {
          for (let i = 0; i < res.data.data.length; i++) {

            if (localStorage.getItem('raw_material_id') == res.data.data[i].id) {
              this.item_exist = "yes";
            }

          }
          if (this.item_exist == "yes") {
            // this.$swal("You have already added this item");
            this.$router.push('/add-ingredient')

          }
          else {
            this.mychoiceService.rawMaterialStorageBoxAdd(localStorage.getItem('raw_material_id')).then((res) => {
              //console.log(res.data);
              if (res.data.status = 200) {
                this.$router.push('/add-ingredient')

              } else {
                this.$swal(res.data.message, "error");
              }
            });
          }
        } else {
          this.$swal(res.message, "error");
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
  margin-bottom: 10px;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}
.link-img{
  cursor: pointer;
}
.heading{
  font-weight: 700;
font-size: 40px;
line-height: 100%;
color: #9642F4;
padding-bottom: 36px;
}
@media screen and (max-width: 768px) {
  .heading{
    font-size: 30px;
    padding-bottom: 10px;
  }
}
</style>