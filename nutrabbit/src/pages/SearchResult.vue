<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="search-result-main">
        <div class="search-wrap">
          <div class="search-inner">
            <!-- <input v-model="search" type="text" placeholder="Search" /> -->
            <input type="text" placeholder="Search" />
            <a href="#"><i class="icon-search-black"></i></a>
          </div>
        </div>
        <div class="search-result-body">
          <p class="search-result-title">gun<span>5 pieces</span>result</p>
          <ul class="search-resul-list-wrap">
            <li
              class="search-resul-list"
              v-for="item of searchResultData"
              :key="item"
            >
              <h1 class="list-heading">{{ item.title }}</h1>
              <div class="search-list-inner-wrap" v-if="item && item.searchListData && item.searchListData.length">
                <ul class="search-list-inner" >
                  <li
                    class="search-list-item"
                    v-for="item in item.searchListData"
                    :key="item"
                  >
                    <SearchCard :item="item" />
                  </li>
                </ul>
              </div>
              <div class="no-result-found" v-else>
                <span>No results were found for your search.</span>
              </div>
              <Pagination />
            </li>
          </ul>

          <!-- this is for no data -->

          <!-- <ul class="search-resul-list-wrap faq">
            <li class="search-resul-list">
              <h1 class="list-heading">No Data Sec</h1>
              <div class="no-result-found">
                <span>No results were found for your search.</span>
              </div>
            </li>
          </ul> -->

          <ul class="search-resul-list-wrap faq">
            <li class="search-resul-list">
              <h1 class="list-heading">FAQ</h1>
              <SearchAccordion />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import SearchCard from "../components/SearchCard.vue";
import SearchAccordion from "../components/SearchAccordion.vue";
export default {
  name: "SearchResult",
  components: {
    SearchCard,
    Pagination,
    SearchAccordion,
  },
  //   computed: {
  //     filteresult() {
  //       return this.searchResultData.filter((item) => {
  //         for (const { desc } of item.searchListData) {
  //           if (desc.indexOf(this.search) > -1) {
  //             return item;
  //           }
  //           else{
  //               return "no data"
  //           }
  //         }
  //       });
  //     },
  //   },
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