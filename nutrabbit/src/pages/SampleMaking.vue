<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice sample-choice">
            <span class="my-choice-title-top">Sample Guide</span>
            <h2 class="nutri-choice-heading text-center">
              {{ $t("sampleMaking.title.title") }}
            </h2>
            <p class="title text-center sampleBLueAfter sample-diff">
              {{ $t("sampleMaking.title.subtitle") }}
            </p>
            <p class="sample-desc text-center">
              {{ $t("sampleMaking.title.titledesc") }} <br />
              {{ $t("sampleMaking.title.titledesc1") }}
            </p>
            <button class="btn-small-solid">
              <router-link to="/my-choice">{{
                $t("sampleMaking.title.button")
              }}</router-link>
            </button>
            <p class="sampleNote">{{ $t("sampleMaking.title.text") }}</p>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-large">
          <div class="sampleServices sampleMarketing">
            <p class="title text-center samllTitle">my choice</p>
            <h4 class="title text-center">
              {{ $t("sampleMaking.sampleprocress.title") }}
            </h4>
            <ul>
              <li>
                <div class="imgCont">
                  <img src="~@/assets/images/step1.png" />
                </div>
                <span>STEP.1</span>
                <h5>{{ $t("sampleMaking.sampleprocress.title1") }}</h5>
                <p>
                  {{ $t("sampleMaking.sampleprocress.desc1") }}<br /><br /><span
                    class="light-grey"
                    >{{ $t("sampleMaking.sampleprocress.desc_sub") }}</span
                  >
                </p>
              </li>
              <li>
                <div class="imgCont">
                  <img src="~@/assets/images/step2.png" />
                </div>
                <span>STEP.2</span>
                <h5>{{ $t("sampleMaking.sampleprocress.title2") }}</h5>
                <p>{{ $t("sampleMaking.sampleprocress.desc2") }}</p>
              </li>
              <li>
                <div class="imgCont">
                  <img src="~@/assets/images/step3.png" />
                </div>
                <span>STEP.3</span>
                <h5>{{ $t("sampleMaking.sampleprocress.title3") }}</h5>
                <p>{{ $t("sampleMaking.sampleprocress.desc3") }}</p>
              </li>
              <li>
                <div class="imgCont">
                  <img src="~@/assets/images/step4.png" />
                </div>
                <span>STEP.4</span>
                <h5>{{ $t("sampleMaking.sampleprocress.title4") }}</h5>
                <p>{{ $t("sampleMaking.sampleprocress.desc4") }}</p>
              </li>
              <li>
                <div class="imgCont">
                  <img src="~@/assets/images/step5.png" />
                </div>
                <span>STEP.5</span>
                <h5>{{ $t("sampleMaking.sampleprocress.title5") }}</h5>
                <p>{{ $t("sampleMaking.sampleprocress.desc5") }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-medium">
          <div class="sampleServices questionSection">
            <p class="title text-center samllTitle">my choice</p>
            <h4 class="title text-center">
              {{ $t("sampleMaking.sampleFaq.title") }}
            </h4>
            <div id="app" class="accCont">
              <accordion
                class="mb-4"
                v-for="(item, index) of faqList"
                :key="index"
              >
                <template v-slot:title>
                  <!-- <span class="font-semibold text-xl accTItle">{{ $t("sampleMaking.sampleFaq.ques1") }}</span> -->
                  <span class="font-semibold text-xl accTItle">{{
                    item.title
                  }}</span>
                </template>
                <template v-slot:content>
                  <p class="accBody">
                    <!-- {{ $t("sampleMaking.sampleFaq.ans1") }} -->
                    {{ item.description }}
                  </p>
                </template>
              </accordion>

              <!-- <accordion class="mb-4">
                <template v-slot:title>
                  <span class="font-semibold text-xl accTItle">{{ $t("sampleMaking.sampleFaq.ques2") }}</span>
                </template>
                <template v-slot:content>
                  <p class="accBody">
                    {{ $t("sampleMaking.sampleFaq.ans2") }}
                  </p>
                </template>
              </accordion> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/Accordion.vue";
import CustomerCenterService from "../services/CustomerCenterService";
import KakaoChat from "../components/KakaoChat.vue";
export default {
  name: "Samplemaking",
  components: {
    Accordion,
  },
  data() {
    return {
      faqList: [],
      totalfaqlist: [],
      // page: 1,
      // limit: 4,
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  methods: {
    allFaqList() {
      this.CustomerCenterService.getFAQList()

        .then((res) => {
          if (res.status == 200) {
            this.totalfaqlist = res.data.data.faq;

            const size = 4;
            this.faqList = this.totalfaqlist.slice(0, size);
          }
        })
        .catch((err) => {
          return;
        });
    },
  },
  mounted() {
    this.allFaqList();
  },
};
</script>

<style lang="scss" scoped>
.sample-desc {
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: $grey-4C;
  /* margin-top: 19px; */
}
.btn-small-solid {
  margin-top: 40px !important;
}
.light-grey{
  color: $grey-A4;
}
</style>