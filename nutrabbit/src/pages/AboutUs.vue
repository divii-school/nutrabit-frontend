<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice theme-green">
            <span class="my-choice-title-top">Nutri 3.3</span>
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
                  <figure><img src="~@/assets/images/about1.png"></figure>
                  <div class="text-box"><p>I don't know how to start!</p></div>
                </div>
                <div class="row-type">
                  <div class="num">2</div>
                  <figure><img src="~@/assets/images/about2.png"></figure>
                  <div class="text-box">
                    <p>Complex FDA approval process, as there are many prohibitions like drugs, 
                      professional manpower is a must!</p>
                  </div>
                </div>
                <div class="row-type">
                  <div class="num">3</div>
                  <figure><img src="~@/assets/images/about3.png"></figure>
                  <div class="text-box"><p>Minimum quantity and high cost I'm worried.</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="green-belt">
            <div class="container-medium">
              <h2>Nutri3.3 provides A-Z full service in the manufacturing process. <br>
It is a One Step Nutrition Platform.</h2>
            </div>
          </div>
          <div class="container-medium">
            <div class="nutri-choice theme-green">
              <span class="my-choice-title-top">Nutri 3.3</span>
              <p class="title text-center">Dry manufacturing navigation in the palm of your hand</p>
              <h2 class="nutri-choice-heading text-center">
                nutri 3.3 service
              </h2>
            </div>
            <div class="about-servcie">
              <div class="row-type">
                <div class="num">
                  1
                </div>
                <div class="desc">
                  <h3>nutri3.3 blending</h3>
                  <p>nutri3.3 blending provides ready-to-market products.
From product concept to packaging and branding.
Seize the opportunity to enjoy all the services from A to Z at your fingertips.</p>
                </div>
              </div>
              <div class="row-type">
                <div class="num">
                  2
                </div>
                <div class="desc">
                  <h3>nutri3.3 blending</h3>
                  <p>nutri3.3 blending provides ready-to-market products.
From product concept to packaging and branding.
Seize the opportunity to enjoy all the services from A to Z at your fingertips.</p>
                </div>
              </div>
              <div class="row-type">
                <div class="num">
                  3
                </div>
                <div class="desc">
                  <h3>nutri3.3 blending</h3>
                  <p>nutri3.3 blending provides ready-to-market products.
From product concept to packaging and branding.
Seize the opportunity to enjoy all the services from A to Z at your fingertips.</p>
                </div>
              </div>
              <div class="row-type">
                <div class="num">
                  4
                </div>
                <div class="desc">
                  <h3>nutri3.3 blending</h3>
                  <p>nutri3.3 blending provides ready-to-market products.
From product concept to packaging and branding.
Seize the opportunity to enjoy all the services from A to Z at your fingertips.</p>
                </div>
              </div>
              <div class="row-type">
                <div class="num">
                  5
                </div>
                <div class="desc">
                  <h3>nutri3.3 blending</h3>
                  <p>nutri3.3 blending provides ready-to-market products.
From product concept to packaging and branding.
Seize the opportunity to enjoy all the services from A to Z at your fingertips.</p>
                </div>
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
          img: "~@/assets/images/step1.png",
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