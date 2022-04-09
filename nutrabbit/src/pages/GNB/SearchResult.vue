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
          <p class="search-result-title" v-if="this.totalResult">
            Total<span>{{ this.totalResult }} </span>result
          </p>
          <p class="search-result-title" v-else>
            Total<span>0 </span>result
          </p>
          <ul class="search-resul-list-wrap">
            <li class="search-resul-list">
              <h1 class="list-heading">nutri 3.3</h1>
              <div class="search-list-inner-wrap">
                <ul class="search-list-inner">
                  <li
                    class="search-list-item"
                    v-for="(item, index) of newSearchResult"
                    :key="index"
                  >
                    <div v-if="item.type == 'recommended_blending'">
                      <div class="img-wrap">
                        <img
                          :src="
                            'http://api-nutrabbit-dev.dvconsulting.org/public/' +
                            item.image
                          "
                          alt
                        />
                      </div>
                      <p>{{ item.name_en }}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- <div class="no-result-found">
                <span>No results were found for your search.</span>
              </div> -->
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

          <!-- <ul class="search-resul-list-wrap faq">
            <li class="search-resul-list">
              <h1 class="list-heading">FAQ</h1>
              <SearchAccordion />
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCard from "../../components/SearchCard.vue";
import SearchAccordion from "../../components/SearchAccordion.vue";
import { inject } from "vue";
export default {
  name: "SearchResult",
  components: {
    SearchCard,
    SearchAccordion,
  },
  // computed: {
  //   filteresult() {
  //     return this.searchResultData.filter((item) => {
  //       for (const { desc } of item.searchListData) {
  //         if (desc.indexOf(this.search) > -1) {
  //           return item;
  //         } else {
  //           return "no data";
  //         }
  //       }
  //     });
  //   },
  // },
  data() {
    return {
      newSearchResult: [],
      totalResult: "",
    };
  },
  setup() {
    const common = inject("common");
    return { common };
  },
  mounted() {
    this.newSearchResult = this.common.state.SearchResult;
    this.totalResult = this.common.state.TotalSearchResult;
  },
};
</script>