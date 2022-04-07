<template>
  <div class="main-body themePurple">
    <div class="container-medium">
      <div class="recomanded-blending-details">
        <div class="blending-left">
          <swiper :pagination="pagination" :modules="modules" class="mySwiper" >
            <swiper-slide v-for="(item, index) of ProductImages" :key="index">
              <img :src="item" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div
          class="blending-right"
          v-for="(item, index) of productDetails"
          :key="index"
        >
          <div class="right-heading">
            <i class="login-icon"></i>
            <h2>{{ item.title }}</h2>
            <div
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
            </div>
          </div>
          <div class="product-details-wrap">
            <ul>
              <li v-for="(desc, index) of item.innderData" :key="index">
                <h2>{{ desc.title }}</h2>
                <p>{{ desc.desc }}</p>
              </li>
            </ul>
            <div class="blendBtnList">
              <button class="btn-primary purple-btn-outline">add</button>
              <button class="btn-primary blue-btn-solid">next</button>
            </div>
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

export default {
  name: "MyChoiceRawMaterialDetailedPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      pagination: {
        clickable: true,
        renderBullet: (index, className) => {
          return (
            '<span class="' +
            className +
            '">' +
            `<img src="${this.ProductImages[index]}" alt="" />` +
            "</span>"
          );
        },
      },
      modules: [Pagination],
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
};
</script>