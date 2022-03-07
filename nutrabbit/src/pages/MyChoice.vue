<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap">
        <div class="my-choice-heading">
          <h2>my choice</h2>
        </div>
        <div class="my-choice-list-wrap">
            <ul class="my-choice-list-outer">
              <li class="my-choice-list-outer-item" v-for="item of searchResultData" :key="item">
                <h2 class="list-heading">{{ item.title }}</h2>
                <ul class="my-choice-list-inner">
                  <li class="my-choice-list-inner-item" v-for="item in item.searchListData" :key="item">
                    <div class="choice-card">
                      <img v-bind:src="item.img" alt="" />
                      <p>{{item.desc}}</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
  <!-- <ul class="search-resul-list-wrap">
    <li class="search-resul-list" v-for="item of searchResultData" :key="item">
      <h1 class="list-heading">{{ item.title }}</h1>
      <div
        class="search-list-inner-wrap"
        v-if="item && item.searchListData && item.searchListData.length"
      >
        <ul class="search-list-inner">
          <li
            class="search-list-item"
            v-for="item in item.searchListData"
            :key="item"
          >
            <div class="card-inner">
              <img class="search-result-img" v-bind:src="item.img" alt="" />
              <p class="text-center">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="no-result-found" v-else>
        <span>No results were found for your search.</span>
      </div>
    </li>
  </ul> -->
</template>

          

<script>
export default {
  name: "MyChoice",
  components: {},
  data() {
    return {
      //   search: "",
      searchResultData: [
        {
          title: "nutri 3.3",
          searchListData: [
            {
              img: "../../../src/assets/images/aloe-img1.png",
              desc: "Aloe A B",
            },
            {
              img: "../../../src/assets/images/aloe-img2.png",
              desc: "Aloe A B C",
            },
          ],
        },

        {
          title: "Recommended blending",
          searchListData: [
            {
              img: "../../../src/assets/images/aloe-img3.png",
              desc: "Aloe Blending",
            },
            {
              img: "../../../src/assets/images/aloe-img4.png",
              desc: "Aloe gel blending",
            },
          ],
        },
        {
          title: "Raw material",
          searchListData: [
            {
              img: "../../../src/assets/images/aloe-img5.png",
              desc: "aloe",
            },
          ],
        },
      ],
    };
  },
};
</script>