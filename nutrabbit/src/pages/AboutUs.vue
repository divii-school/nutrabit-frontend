<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice">
            <p class="title text-center">If you want to have your own health functional food brand easily and conveniently</p>
            <h2 class="nutri-choice-heading text-center">
              nutri 3.3
            </h2>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
          <div class="container-medium">
          <div class="sampleServices about-recom">
            <p class="title text-center samllTitle">nutri 3.3</p>
            <h4 class="title text-center">I recommend it to these people!</h4>
            <div class="recom-section">
              <div class="row-type type-1">
                <div class="num">1</div>
                <figure><img src="../../../src/assets/images/about1.png"></figure>
                <div class="text-box"><p>I don't know how to start!</p></div>
              </div>
              <div class="row-type rev">
                <div class="num">2</div>
                <figure><img src="../../../src/assets/images/about2.png"></figure>
                <div class="text-box">
                  <p>Complex FDA approval process, as there are many prohibitions like drugs, 
                    professional manpower is a must!</p>
                </div>
              </div>
              <div class="row-type">
                <div class="num">3</div>
                <figure><img src="../../../src/assets/images/about3.png"></figure>
                <div class="text-box"><p>Minimum quantity and high cost I'm worried.</p></div>
              </div>
            </div>
          </div>
          </div>
          <div class="container-medium">
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
          img: "../../../src/assets/images/step1.png",
          step: "Step 1",
          title: "sample application",
          desc: "my choice in nutri 3.3 After using the desired sample Request a sample production! (Sample production costs 300,000 won / Additional modifications are charged separately)"
        },
        {
          img: "../../../src/assets/images/step2.png",
          step: "Step 2",
          title: "development meeting",
          desc: "Based on the sample service requested We check your requirements."
        },
        {
          img: "../../../src/assets/images/step3.png",
          step: "Step 3",
          title: "product development",
          desc: "based on the requested information Develop samples."
        },
        {
          img: "../../../src/assets/images/step4.png",
          step: "Step 4",
          title: "sample production",
          desc: "After product development Produce samples."
        },
           {
          img: "../../../src/assets/images/step5.png",
          step: "Step 5",
          title: "customer delivery",
          desc: "The finished sample is your It will be shipped to your address."
        },
      ],
    };
  },
};
</script>