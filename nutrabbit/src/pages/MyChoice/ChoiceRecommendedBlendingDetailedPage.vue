<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="recomanded-blending-details">
        <div class="blending-left">
          <swiper :pagination="pagination" :modules="modules" class="mySwiper" >
            <swiper-slide v-for="(item, index) of blending_data.detail_image_path" :key="index">
              <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' +item" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div
          class="blending-right"
          v-for="(item, index) of blending_data"
          :key="index"
        >
          <div class="right-heading">
            <i class="login-icon"></i>
            <h2>{{ item.name_ko }}</h2>
            <!-- <div
              class="blending-tag"
              v-for="(tag, index) of item.tags"
              :key="index"
            >
              <span>{{ tag.tag1 }}</span>
              <span>{{ tag.tag2 }}</span>
              <span>{{ tag.tag3 }}</span>
              <span>{{ tag.tag4 }}</span>
              <span>{{ tag.tag5 }}</span>
              <span>{{ tag.tag6 }}</span>
            </div> -->
            <div
              class="blending-tag"
            
            >
              <span>{{ item.tags_ko }}</span>
            </div>
          </div>
          <div class="product-details-wrap">
            <ul>
              <!-- <li v-for="(desc, index) of item.innderData" :key="index">
                <h2>{{ desc.title }}</h2>
                <p>{{ desc.desc }}</p>
              </li> -->
              <li>
                <h2>Sub raw Material</h2>
                <p>{{ item.sub_raw_materials }}</p>
              </li>
              <li>
                <h2>efficacy</h2>
                <p>{{ item.efficiency_ko }}</p>
              </li>
              <li>
                <h2>Category Name</h2>
                <p>{{ item.category_name_ko }}</p>
              </li>
              <li>
                <h2>Material Name</h2>
                <p>{{ item.material_name_ko }}</p>
              </li>
              <li>
                <h2>Product Information</h2>
                <p>{{ item.description_ko }}</p>
              </li>
            </ul>
            <button class="btn-primary blue-btn-solid">next</button>
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
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useRoute } from 'vue-router'
import MyChoiceService from "../../services/MyChoiceService";

export default {
  name: "ChoiceRecommendedBlendingDetailedPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      blending_id: null,
      blending_data:'',
      pagination: {
        clickable: true,
        renderBullet: (index, className) => {
          return (
            '<span class="' +
            className +
            '">' +
            `<img src="${this.blending_data[index]}" alt="" />` +
            "</span>"
          );
        },
      },
      modules: [Pagination],
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
      ProductImages: [],
    };
  },
   created() {
    this.mychoiceService = new MyChoiceService();
  },
   mounted() {
    this.blendingDetail();
  },
  methods: {
     // blendingDetails
    blendingDetail() {
      let sub_cat = useRoute();
      this.blending_id = sub_cat.params.id;
      const setBlendingId = this.blending_id;
      // console.log(setBlendingId);

      this.mychoiceService.getRecommendedBlendingDetail(setBlendingId).then((res) => {
        //  console.log(res.data);
        if (res.response) {
          this.$swal(res.response.data.message, "error");
        } else {
          console.log('getBlendingdetail res', res.data.data.Sample1);
          this.blending_data = res.data.data;

          // let ids =  this.blending_data.map( (item) => item.detail_image_path);
          
          // this.ProductImages = ids;
          // console.log(this.ProductImages);
        }
      });
    },
  }
};
</script>