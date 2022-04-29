<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice">
            <span class="my-choice-title-top">Sample Guide</span>
            <h2 class="nutri-choice-heading text-center">
              {{ $t("sampleMaking.title.title") }}
            </h2>
            <p class="title text-center sampleBLueAfter">{{ $t("sampleMaking.title.subtitle") }}</p>
            <p class="desc text-center">
              {{ $t("sampleMaking.title.titledesc") }} <br>
                {{ $t("sampleMaking.title.titledesc1") }}
            </p>
            <button class="btn-small-solid">
              <router-link to="/my-choice">{{ $t("sampleMaking.title.button") }}</router-link>
            </button>
            <p class="sampleNote">{{ $t("sampleMaking.title.text") }}</p>
          </div>
          <div class="devider"><i class="icon-grey-star"></i></div>
          <div class="sampleServices">
            <p class="title text-center samllTitle">my choice</p>
            <h4 class="title text-center">{{ $t("sampleMaking.sampleprocress.title") }}</h4>
            <ul>
              <li v-for="(item, index) of processData" :key="index">
                <div class="imgCont">
                  <img :src="item.img">
                </div>
                <span>{{ item.step }}</span>
                <h5>{{ item.title }}</h5>
                <p>{{ item.desc }}</p>
              </li>
            </ul>
          </div>
          <div class="devider"><i class="icon-grey-star"></i></div>
          <div class="sampleServices questionSection">
            <p class="title text-center samllTitle">my choice</p>
            <h4 class="title text-center">{{ $t("sampleMaking.sampleFaq.title") }}</h4>
            <div id="app" class="accCont">
              <accordion class="mb-4" v-for="(item, index) of faqList" :key="index">
                <template v-slot:title>
                  <!-- <span class="font-semibold text-xl accTItle">{{ $t("sampleMaking.sampleFaq.ques1") }}</span> -->
                  <span class="font-semibold text-xl accTItle">{{ item.title_en }}</span>
                </template>
                <template v-slot:content>
                  <p class="accBody">
                    <!-- {{ $t("sampleMaking.sampleFaq.ans1") }} -->
                     {{ item.description_en }}
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
export default {
  
  name: "Samplemaking",
  components: {
    Accordion,
  },
  data() {
    return {
      faqList: [],
      totalfaqlist:[],
      // page: 1,
      // limit: 4,
    };
  },

  computed: {
    processData() { return[
        {
          img: "../../../src/assets/images/step1.png",
          step: "STEP.1",
          title: this.$t("sampleMaking.sampleprocress.title1"),
          desc: this.$t("sampleMaking.sampleprocress.desc1")
        },
        {
          img: "../../../src/assets/images/step2.png",
          step: "STEP.2",
          title: this.$t("sampleMaking.sampleprocress.title2"),
          desc: this.$t("sampleMaking.sampleprocress.desc2")
        },
        {
          img: "../../../src/assets/images/step3.png",
          step: "STEP.3",
          title: this.$t("sampleMaking.sampleprocress.title3"),
          desc: this.$t("sampleMaking.sampleprocress.desc3")
        },
        {
          img: "../../../src/assets/images/step4.png",
          step: "STEP.4",
          title: this.$t("sampleMaking.sampleprocress.title4"),
          desc: this.$t("sampleMaking.sampleprocress.desc4")
        },
        {
          img: "../../../src/assets/images/step5.png",
          step: "STEP.5",
          title: this.$t("sampleMaking.sampleprocress.title5"),
          desc: this.$t("sampleMaking.sampleprocress.desc5")
        },
      ]
    }
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

            const size = 4
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