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
          <p class="search-result-title" v-if="this.newSearchResult">
            Total<span>{{ this.newSearchResult.length }} </span>result
          </p>
          <p class="search-result-title" v-else>Total<span>0 </span>result</p>
          <ul class="search-resul-list-wrap">
            <li class="search-resul-list">
              <h1 class="list-heading">nutri 3.3</h1>
              <div class="search-list-inner">
                <div class="search-list-item">
                  <template v-for="(item, index) of NewNutriBlending" :key="index">
                    <SearchCard
                      :category="item.name_en"
                      :image="item.image"
                      image_link="http://api-nutrabbit-dev.dvconsulting.org/public/"
                    />
                  </template>
                </div>
                <pagination
                  v-model="page"
                  :records="4"
                  :per-page="2"
                  @paginate="myCallback3"
                />
              </div>
              <!-- <div class="no-result-found">
                <span>No results were found for your search.</span>
              </div> -->
            </li>
            <li class="search-resul-list">
              <h1 class="list-heading">Recommended Blending</h1>
              <div class="search-list-inner">
                <div class="search-list-item">
                  <template
                    v-for="(item, index) of NewRecomanedBlending"
                    :key="index"
                  >
                    <SearchCard
                      :category="item.name_en"
                      :image="item.image"
                      image_link="http://api-nutrabbit-dev.dvconsulting.org/public/"
                    />
                  </template>
                </div>
                <pagination
                  v-model="page"
                  :records="4"
                  :per-page="1"
                  @paginate="myCallback2"
                />
              </div>
              <!-- <div class="no-result-found">
                <span>No results were found for your search.</span>
              </div> -->
            </li>
            <li class="search-resul-list">
              <h1 class="list-heading">Raw Material</h1>
              <div class="search-list-inner">
                <div class="search-list-item">
                  <template
                    v-for="(item, index) of NewRawMaterial"
                    :key="index"
                  >
                    <SearchCard
                      :category="item.name_en"
                      :image="item.image"
                      image_link="http://api-nutrabbit-dev.dvconsulting.org/public/"
                    />
                  </template>
                </div>
                <pagination
                  v-model="page"
                  :records="pagi"
                  :per-page="1"
                  @paginate="myCallback1"
                />
              </div>
              <!-- <div class="no-result-found">
                <span>No results were found for your search.</span>
              </div> -->
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
      nutriBlending: [],
      recomanedBlending: [],
      rawMaterial: [],
      NewRawMaterial: [],
      NewNutriBlending: [],
      NewRecomanedBlending: [],
      page: 1,
      perPage: 4,
      res_data: "",
      pagi: 5,
    };
  },
  setup() {
    const common = inject("common");
    return { common };
  },
  mounted() {
    if (this.common.state.SearchResult != undefined) {
      this.newSearchResult = this.common.state.SearchResult;
      this.newSearchResult.map((value) => {
        if (value.type == "nutri_blending") {
          return this.nutriBlending.push({
            id: value.id,
            name_en: value.name_en,
            image: value.image,
          });
        }
        if (value.type == "recommended_blending") {
          return this.recomanedBlending.push({
            id: value.id,
            name_en: value.name_en,
            image: value.image,
          });
        }
        if (value.type == "raw_material") {
          return this.rawMaterial.push({
            id: value.id,
            name_en: value.name_en,
            image: value.image,
          });
        }
      });
      this.myCallback1(1);
      this.myCallback2(1);
      this.myCallback3(1);
    }
  },
  methods: {
    myCallback1(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      // const endIndex = (this.perPage * ClickPage);
      const endIndex = startIndex + this.perPage;
      this.NewRawMaterial = this.rawMaterial.slice(startIndex, endIndex);
    },
    myCallback2(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      // const endIndex = (this.perPage * ClickPage);
      const endIndex = startIndex + this.perPage;
      this.NewNutriBlending = this.nutriBlending.slice(startIndex, endIndex);
    },
    myCallback3(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      // const endIndex = (this.perPage * ClickPage);
      const endIndex = startIndex + this.perPage;
      this.NewRecomanedBlending = this.recomanedBlending.slice(startIndex, endIndex);
    },
  },
};
</script>