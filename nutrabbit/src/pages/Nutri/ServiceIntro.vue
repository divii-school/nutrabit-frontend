<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice theme-green with-img servIntro">
            <h2 class="nutri-choice-heading text-center">
              What is nutri 3.3 blending?
            </h2>
            <p class="title text-center">Introduction to nutri 3.3 blending</p>
            <p class="text-center">nutri3.3 blending provides ready-to-market products. <br>Seize the opportunity to easily enjoy all services from A to Z from product concept, package, and branding.</p>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-medium">
          <div class="sampleServices about-recom">
            <p class="title text-center samllTitle">nutri 3.3</p>
            <h4 class="title text-center">How to use nuitri 3.3 blending</h4>
            <ul class="nutriBlending">
              <li v-for="(item, index) of processData" :key="index">
                <img :src="item.img">
                <span>{{ item.step }}</span>
                <p>{{ item.desc }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-medium">
          <div class="sampleServices about-recom">
            <p class="title text-center samllTitle">nutri 3.3</p>
            <h4 class="title text-center">nutri 3.3 blending product</h4>
            <div class="nutri-dom-product blendedPro">
              <ul >
                <li v-for="(item, index) of nutriList" :key="index">
                  <div class="nutri-product-item">
                    <div @click="this.$router.push(`/nutri-detail/${item.id}`)">
                      <img v-if="item.thumbnail_path" class="nutri-pimg" :src="imgBaseUrl +  item.thumbnail_path" alt="" />
                      <img v-else class="nutri-pimg" src="../../assets/images/aloe-img-4.png" alt="" />
                    </div>
                    <div class="tag-wrap">
                      <span>nutri 3.3</span>
                      <span>nutri 3.3</span>
                    </div>
                    <p @click="this.$router.push(`/nutri-detail/${item.id}`)">{{item.name_ko}}</p>
                  </div>
                </li>
              </ul>
              <!-- <ul >
                <li>
                  <div class="nutri-product-item">
                    <div >
                     
                      <img class="nutri-pimg" src="../../assets/images/aloe-img-4.png" alt="" />
                    </div>
                    <div class="tag-wrap">
                      <span>nutri 3.3</span>
                      <span>nutri 3.3</span>
                    </div>
                    <p >HI</p>
                  </div>
                </li>
                <li>
                  <div class="nutri-product-item">
                    <div >
                      
                      <img class="nutri-pimg" src="../../assets/images/aloe-img-4.png" alt="" />
                    </div>
                    <div class="tag-wrap">
                      <span>nutri 3.3</span>
                      <span>nutri 3.3</span>
                    </div>
                    <p >HI</p>
                  </div>
                </li>
                <li>
                  <div class="nutri-product-item">
                    <div >
                      
                      <img class="nutri-pimg" src="../../assets/images/aloe-img-4.png" alt="" />
                    </div>
                    <div class="tag-wrap">
                      <span>nutri 3.3</span>
                      <span>nutri 3.3</span>
                    </div>
                    <p >HI</p>
                  </div>
                </li>
              </ul> -->
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
  components: {
  },
  data() {
    return {
      processData: [
        {
          img: "../../../src/assets/images/blending1.png",
          step: "Step.1",
          desc: "Take a look at our branded products"
        },
        {
          img: "../../../src/assets/images/blending2.png",
          step: "Step.2",
          desc: "The product you want to launch Choose"
        },
        {
          img: "../../../src/assets/images/blending3.png",
          step: "Step.3",
          desc: "at the bottom of the selected product detail page Click the Get Quote button"
        },
        {
          img: "../../../src/assets/images/blending4.png",
          step: "Step.4",
          desc: "After checking in nutri 3.3 We will contact you"
        },
      ],
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      lang:"",
      nutriList:[],
    };
  },

  created() {
    this.nutriService = new NutriService();
  },

  methods: {

    getNutriService() {
      this.nutriService
        .getNutriService(
          this.lang,
        )
        .then((res) => {
          if (res.status == 200) {
            console.log("res", res);
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
  }
};
</script>