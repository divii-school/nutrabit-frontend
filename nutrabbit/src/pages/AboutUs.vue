<template>
  <div class="main-page">
    <div class="main-slider">
      <div class="main-page-body">
        <div class="container-medium">
          <div class="nutri-choice theme-green">
            <span class="my-choice-title-top">Nutri 3.3</span>
            <p class="title text-center">쉽고 편하게 나만의 건강기능식품 브랜드를 갖고 싶다면</p>
            <h2 class="nutri-choice-heading text-center">
              nutri 3.3
            </h2>
          </div>
        </div>
        <div class="devider"><i class="icon-grey-star"></i></div>
        <div class="container-medium">
          <div class="sampleServices about-recom">
            <p class="title text-center samllTitle">nutri 3.3</p>
            <h4 class="title text-center">이런 분들에게 추천 드립니다!</h4>
            <div class="recom-section">
             <div class="row-type type-1">
                  <div class="num">1</div>
                  <figure><img src="~@/assets/images/about1.png"></figure>
                  <div class="text-box"><p><span class="green-text">어떻게 시작</span>해야 할 지 모르겠어요!</p></div>
                </div>
              <div class="row-type">
                <div class="num">2</div>
                <figure><img src="~@/assets/images/about2.png"></figure>
                <div class="text-box">
                  <!-- <p><span class="black-text">I need</span> <span class="green-text">professional support</span> because there are too many prohibitions
                    like pharmaceuticals, complicated approval process from public organization!</p> -->
                    <p>복잡한 식약처 허가진행,의약품처럼
                      금지 사항이 많아
                      <span class="green-text">전문 인력</span>이 꼭! 필요해요!</p>
                </div>
              </div>
              <div class="row-type">
                <div class="num">3</div>
                <figure><img src="~@/assets/images/about3.png"></figure>
                <div class="text-box">
                  <!-- <p>I’m concerned about minimum
                    quantity and high cost.</p> -->
                    <p>최소수량과 비용이 많이 들어서 
                      고민이 돼요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="green-belt">
          <div class="container-medium">
           <div class="green-belt-inner">
              <div class="green-belt-content">
                <h2>뉴트리3.3은 제조과정의 A-Z 풀서비스를 제공하는</h2>
              <p>One Step Nutrition Platform <span>입니다.</span> </p>
              </div>
           </div>
          </div>
        </div>
        <div class="container-medium">
          <div class="nutri-choice theme-green">
            <span class="my-choice-title-top">Nutri 3.3</span>
            <p class="title text-center">내 손안의 건식 제조 내비게이션</p>
            <h2 class="nutri-choice-heading text-center">
              nutri 3.3 서비스
            </h2>
          </div>
          <div class="about-servcie">
            <div class="row-type">
              <div class="num">
                1
              </div>
              <div class="desc">
                <h3>nutri3.3 블랜딩</h3>
                <p>nutri3.3 블랜딩은 출시만을 앞둔 준비된 제품을 제공합니다.
                  제품의 컨셉, 패키지, 브랜딩까지 A to Z 모든 서비스를 간편하게 누릴 수 있는 기회를 
                  잡아보세요.</p>
              </div>
            </div>
            <div class="row-type">
              <div class="num">
                2
              </div>
              <div class="desc">
                <h3>추천 블랜딩</h3>
                <p>추천 블랜딩은 효과적인 원료와 제형이 이미 구성되어 있는 반제품으로원료 선택이
                  어려우신 분들을 위한 추천 레시피입니다.</p>
              </div>
            </div>
            <div class="row-type">
              <div class="num">
                3
              </div>
              <div class="desc">
                <h3>my choice</h3>
                <p>my choice는 내가 직접 선택한 원료로 오직 하나뿐인 나만의 제품을 만들어 보는 
                    서비스입니다.</p>
              </div>
            </div>
            <div class="row-type">
              <div class="num">
                4
              </div>
              <div class="desc">
                <h3>무료 견적 서비스</h3>
                <p>무료 견적 서비스는 내가 원하는대로 조합한 나만의 건강기능식품을 
                    제작 할 수 있도록 도와드립니다.
                </p>
              </div>
            </div>
            <div class="row-type">
              <div class="num">
                5
              </div>
              <div class="desc">
                <h3>샘플 제작 서비스</h3>
                <p>샘플 제작 서비스는 1회 샘플링 비용 300,000원으로 원하시는 건강기능식품 샘플을 
                    만들어 보실 수 있는 기회를 제공합니다.
                </p>
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