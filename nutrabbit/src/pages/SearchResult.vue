<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="search-result-main">
        <div class="search-wrap">
          <div class="search-inner">
            <input type="text" placeholder="Search" />
            <i class="icon-search-black"></i>
          </div>
        </div>
        <div class="search-result-body">
          <p class="search-result-title">gun<span>5 pieces</span>result</p>
          <ul class="search-resul-list-wrap">
            <li class="search-resul-list" v-for="item in searchResult" :key="item">
              <h1 class="list-heading">{{ item.title }}</h1>
              <ul class="search-list-inner">
                <li
                  class="search-list-item"
                  v-for="item in item.searchListData"
                  :key="item"
                >
                  <div class="item-img-wrap">
                    <img v-bind:src="item.img" alt="" />
                    <!-- <img src="../assets/images/aloe-img1.png" alt="" /> -->
                  </div>
                  <p class="text-center">{{ item.desc }}</p>
                </li>
              </ul>
            </li>
            <!-- <li></li>
            <li></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",

  data() {
    return {
      searchResult: [
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