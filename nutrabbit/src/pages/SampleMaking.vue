<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice">
            <span class="my-choice-title-top">Sample Guide</span>
            <h2 class="nutri-choice-heading text-center">
              Sample making guide
            </h2>
            <p class="title text-center sampleBLueAfter">nuitri 3.3 sample service</p>
            <p class="desc text-center">
              Make the health functional core food sample you want in nutri 3.3! It can be produced at a sampling cost of 300,000 won (VAT included) per one time.
            </p>
            <button class="btn-small-solid">go to sample</button>
            <p class="sampleNote">*Sample service is a paid service, and it usually takes 2 weeks for delivery after payment is completed.</p>
          </div>
          <div class="devider"><i class="icon-grey-star"></i></div>
          <div class="sampleServices">
            <p class="title text-center samllTitle">my choice</p>
            <h4 class="title text-center">nutri 3.3 blending</h4>
            <ul>
              <li v-for="(item, index) in processData" :key="index">
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
            <h4 class="title text-center">Frequently Asked Questions</h4>
            <div id="app" class="accCont">
              <accordion class="mb-4">
                <template v-slot:title>
                  <span class="font-semibold text-xl accTItle">How long does it take to make a sample?</span>
                </template>
                <template v-slot:content>
                  <p class="accBody">
                    It usually takes about 2 weeks after payment is completed, but there may be changes depending on the product.
                  </p>
                </template>
              </accordion>

              <accordion class="mb-4">
                <template v-slot:title>
                  <span class="font-semibold text-xl accTItle">What is the volume and quantity of samples provided?</span>
                </template>
                <template v-slot:content>
                  <p class="accBody">
                    Sample quantity offered is as follows:
                  </p>
                </template>
              </accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/Accordion.vue";
export default {
  
  name: "Samplemaking",
  components: {
    Accordion,
  },
  data() {
    return {
      processData: [
        {
          img: "../../../src/assets/icons/step1.svg",
          step: "Step 1",
          title: "sample application",
          desc: "my choice in nutri 3.3 After using the desired sample Request a sample production! (Sample production costs 300,000 won / Additional modifications are charged separately)"
        },
        {
          img: "../../../src/assets/icons/step2.svg",
          step: "Step 2",
          title: "development meeting",
          desc: "Based on the sample service requested We check your requirements."
        },
        {
          img: "../../../src/assets/icons/step3.svg",
          step: "Step 3",
          title: "product development",
          desc: "based on the requested information Develop samples."
        },
        {
          img: "../../../src/assets/icons/step4.svg",
          step: "Step 4",
          title: "sample production",
          desc: "After product development Produce samples."
        },
           {
          img: "../../../src/assets/icons/step5.svg",
          step: "Step 5",
          title: "customer delivery",
          desc: "The finished sample is your It will be shipped to your address."
        },
      ],
    };
  },
};
</script>