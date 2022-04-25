<template>
  <div class="main-page">
    <div class="main-slider">
      <swiper :pagination="{
        type: 'fraction',
      }" :navigation="true" :modules="modules" :speed="1000" class="mySwiper">
        <swiper-slide v-for="(slider, index) of MainSlider" :key="index">
          <img v-if="slider.desktop_banner_path" :src="imgBaseUrl + slider.desktop_banner_path" alt="" />
          <img v-else src="../../assets/images/banner_place.png" alt />
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
            Opportunity to create <br>
            Health Functional Food Recipes <br>
            on your own!
          </h2>
          <p class="desc text-center">Combine whatever you want and make your own health functional food recipe!</p>
          <router-link to="/my-choice" v-if="token">
            <button class="btn-small-solid">Go to my choice</button>
          </router-link>
          <router-link to="/" v-else @click="accessPage()">
            <button class="btn-small-solid">Go to my choice</button>
          </router-link>
        </div>
        <!-- {{ 'ENV = ' +  process.env.VITE_SOME_KEY }} -->
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
              A service only for you <br>
              Don't miss the chance to launch your own product!
            </h2>
            <p class="desc text-center">We provide all services from A to Z of health functional food.</p>
            <button @click="toNutri()" class="btn-small-solid green">What is nutri 3.3
              Blending?</button>
            <!-- <button @click="allNutidata">jhbkjbjk</button> -->
          </div>
          <div class="nutri-dom-product">
            <ul>
              <li v-for="(item, index) of ProductData" :key="index" >
                <MainProductCard :item="item" @login="accessPage"/>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- payment-test -->
      <div class="devider">
        <i class="icon-grey-star"></i>
      </div>

      <div class="payment-test" style="padding:40px">
        <button type="button" class="btn-small-solid" @click="makePay">Make Payment Test</button>
        <!-- <button type="button" class="btn-small-solid" id="naver_id_login" @click="naverLogin">Naver Login</button>
        <div id="naver_id_login"></div> -->
      </div>
      <!-- payment-test -->
    </div>
  </div>
  <Modal
    v-show="isModalVisible"
    @close="closeModal"
    bodytext1="This service requires login."
    bodytext2="Please use the service after logging in."
    btnText1="Cancel"
    btnText2="Login"
    link="/login"
  />
  <CacaoChatVue />
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import MainProductCard from "../../components/MainProductCard.vue";
import { inject, onMounted } from "vue";
import MainService from "../../services/MainService";
import Button from '../../components/Button.vue';
import PaymentService from "../../services/PaymentService";
import CacaoChatVue from "../../components/CacaoChat.vue";
import Modal from "../../components/Modal.vue";
export default {
  name: "Main",
  components: {
    Swiper,
    SwiperSlide,
    MainProductCard,
    Button,
    CacaoChatVue,
    Modal,
  },
  data() {
    return {
      MainSlider: [],
      ProductData: [],
      token: localStorage.getItem('token'),
      isMobile: false,
      isiPhone: false,
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      isModalVisible : false,
    };
  },
  setup() {
    const common = inject("common");
    onMounted(() => {
      common.methods.isFromApp();
    });
    return {
      modules: [Pagination, Navigation],
      common
    };
  },
  created() {
    this.MainService = new MainService();
    this.paymentService = new PaymentService();
  },
  mounted() {
    this.allBanner();
    this.allNutidata();
    localStorage.removeItem('sub_category_id');
    localStorage.removeItem('raw_material_id');
    localStorage.removeItem('package_id');
    localStorage.removeItem('pill_id');
    localStorage.removeItem('option');
    localStorage.removeItem('etc');
    localStorage.removeItem('storage_box');

  },
  methods: {
    // makePay test function
    makePay() {
      // console.log('makePay');
      alert('makePay');
      this.paymentService.requestPay();
    },

    // naverLogin() {
    //   var naver_id_login = new window.naver_id_login("RzAKRIVkiYS3ETx4MlTd", "http://localhost:8082/login");
    //   var state = naver_id_login.getUniqState();
    //   naver_id_login.setButton("green", 5, 50);
    //   naver_id_login.setDomain("http://localhost:8082/login");
    //   naver_id_login.setState(state);
    //   // naver_id_login.setPopup();
    //   naver_id_login.init_naver_id_login();
    //   // this.naverLoginCallback();
    // },

    // naverLoginCallback() {
    //   var naver_id_login = new window.naver_id_login("RzAKRIVkiYS3ETx4MlTd", "http://localhost:8082/login");
    //   // 접근 토큰 값 출력
    //   alert(naver_id_login.oauthParams.access_token);
    //   // 네이버 사용자 프로필 조회
    //   naver_id_login.get_naver_userprofile(`this.naverSignInCallback()`);
    //   // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    //   this.naverSignInCallback();  
    // },

    // naverSignInCallback() {
    //   alert(naver_id_login.getProfileData('email'));
    //   alert(naver_id_login.getProfileData('nickname'));
    //   alert(naver_id_login.getProfileData('age'));
    // },






    // allBanner list
    allBanner() {
      this.MainService.getSlider().then((res) => {
        // console.log(res);
        if (res.status == 200) {
          // console.log('getBanner res', res.data.bannerData);
          this.MainSlider = res.data.bannerData;

        } else {
          this.$swal(res.message, "error");
        }
      });
    },
    // allNutidata list
    allNutidata() {
      this.MainService.getNutriData().then((res) => {
        //console.log(res);
        if (res.status == 200) {
          this.ProductData = res.data.blendingData;

        } else {
          // console.log('getNutridata res', res.data.blendingData);
          this.$swal(res.message, "error");
        }
      });
    },
    accessPage() {
      //this.$router.push('/login')
      //this.$swal("Unauthorized Access.Please Login.");
      this.isModalVisible = true;

    },

    toNutri(){
      if(this.token){
        this.$router.push(`/service-intro`)
      }else{
        this.isModalVisible = true;
      }
    },

    closeModal(){
      this.isModalVisible = false;
    }
  },
};
</script>