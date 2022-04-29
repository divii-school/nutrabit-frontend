<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="search-result-main">
        <div class="search-result-body">
          <p class="search-result-title" v-if="this.newSearchResult">
            Total
            <span>{{ this.newSearchResult.length }}</span
            >result
          </p>
          <p class="search-result-title" v-else>
            Total
            <span>0</span>result
          </p>
          <ul class="search-resul-list-wrap">
            <li class="search-resul-list">
              <h1 class="list-heading">nutri 3.3</h1>
              <div class="search-list-inner" v-if="nutriBlending.length > 0">
                <div class="search-list-item">
                  <template
                    v-for="(item, index) of NewNutriBlending"
                    :key="index"
                  >
                    <SearchCard
                      :category="item.name_en"
                      :image="item.image"
                      :image_link= imgBaseUrl
                      type2="search"
                      :route_link="'/nutri-detail/' + item.id"
                    />
                  </template>
                </div>
                <pagination
                  v-model="page1"
                  :records="nutriBlending.length"
                  :per-page="perPage"
                  @paginate="myCallback1"
                />
              </div>
              <div class="no-result-found" v-else>
                <span>No results were found for your search.</span>
              </div>
            </li>
            <li class="search-resul-list">
              <h1 class="list-heading">Recommended Blending</h1>
              <div
                class="search-list-inner"
                v-if="recomanedBlending.length > 0"
              >
                <div class="search-list-item">
                  <template
                    v-for="(item, index) of NewRecomanedBlending"
                    :key="index"
                  >
                    <SearchCard
                      :category="item.name_en"
                      :image="item.image"
                      :image_link= imgBaseUrl
                      type2="search"
                      :route_link="'/choice-recommended-blending-detailed-page/' + item.id"
                    />
                  </template>
                </div>
                <pagination
                  v-model="page2"
                  :records="recomanedBlending.length"
                  :per-page="perPage"
                  @paginate="myCallback2"
                />
              </div>
              <div class="no-result-found" v-else>
                <span>No results were found for your search.</span>
              </div>
            </li>
            <li class="search-resul-list">
              <h1 class="list-heading">Raw Material</h1>
              <div class="search-list-inner" v-if="rawMaterial.length > 0">
                <div class="search-list-item">
                  <template
                    v-for="(item, index) of NewRawMaterial"
                    :key="index"
                  >
                    <SearchCard
                      :category="item.name_en"
                      :image="item.image"
                      :image_link= imgBaseUrl
                      type2="search"
                    />
                  </template>
                </div>
                <pagination
                  v-model="page3"
                  :records="rawMaterial.length"
                  :per-page="perPage"
                  @paginate="myCallback3"
                />
              </div>
              <div class="no-result-found" v-else>
                <span>No results were found for your search.</span>
              </div>
            </li>
          </ul>

          <ul class="search-resul-list-wrap faq">
            <li class="search-resul-list">
              <h1 class="list-heading">FAQ</h1>
              <template v-if="faq.length > 0">
                <template v-for="(item, index) of NewFaq" :key="index">
                  <SearchAccordion
                    :title="item.name_en"
                    :description="item.description_en"
                  />
                </template>
                <pagination
                  v-model="page4"
                  :records="faq.length"
                  :per-page="FaqPerPage"
                  @paginate="myCallback4"
                />
              </template>
              <template v-else>
                <div class="no-result-found">
                  <span>No results were found for your search.</span>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <KakaoChat />
</template>

<script>
import SearchCard from "../../components/SearchCard.vue";
import SearchAccordion from "../../components/SearchAccordion.vue";
import CommonService from "../../services/CommonService";
import KakaoChat from "../../components/KakaoChat.vue";
import { inject } from "vue";
export default {
  name: "SearchResult",
  components: {
    SearchCard,
    SearchAccordion,
    KakaoChat
  },
  data() {
    return {
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      newSearchResult: [],
      nutriBlending: [],
      recomanedBlending: [],
      rawMaterial: [],
      faq: [],
      NewRawMaterial: [],
      NewNutriBlending: [],
      NewRecomanedBlending: [],
      NewFaq: [],
      page1: 1,
      page2: 1,
      page3: 1,
      page4: 1,
      perPage: 4,
      FaqPerPage: 1,
      res_data: "",
    };
  },
  setup() {
    const common = inject("common");
    return { common };
  },
  mounted() {
    if (this.searchKeyword) {
      this.showSarchResult(this.searchKeyword);
    }
  },
  created() {
    this.commonService = new CommonService();
  },
  watch: {
    searchKeyword(newkeyword) {
      if (newkeyword) {
        this.showSarchResult(newkeyword);
      }
    },
  },
  methods: {
    showSarchResult(searchKeyword) {
      this.commonService
        .getSearchResult(searchKeyword, this.common.state.myIP)
        .then((res) => {
          const nutriBlending = [];
          const recomanedBlending = [];
          const rawMaterial = [];
          const faq = [];
          this.newSearchResult = res.data.data.search;
          this.newSearchResult.map((value)=> {
            if (value.type == "nutri_blending") {
                nutriBlending.push({
                  id: value.id,
                  name_en: value.name_en,
                  image: value.image,
                });
              }
              if (value.type == "recommended_blending") {
                recomanedBlending.push({
                  id: value.id,
                  name_en: value.name_en,
                  image: value.image,
                });
              }
              if (value.type == "raw_material") {
                rawMaterial.push({
                  id: value.id,
                  name_en: value.name_en,
                  image: value.image,
                });
              }
              if (value.type == "faq") {
                faq.push({
                  id: value.id,
                  name_en: value.name_en,
                  description_en: value.description_en,
                });
              }
          })
          this.nutriBlending = nutriBlending;
          this.recomanedBlending = recomanedBlending;
          console.log(recomanedBlending);
          this.rawMaterial = rawMaterial;
          this.faq = faq;
          this.myCallback1(1);
          this.myCallback2(1);
          this.myCallback3(1);
          this.myCallback4(1);
        })
        .catch((err) => {
          // console.log({ err });
        });
    },

    // paginations

    myCallback1(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.NewNutriBlending = this.nutriBlending.slice(startIndex, endIndex);
    },
    myCallback2(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.NewRecomanedBlending = this.recomanedBlending.slice(
        startIndex,
        endIndex
      );
    },
    myCallback3(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.NewRawMaterial = this.rawMaterial.slice(startIndex, endIndex);
    },
    myCallback4(ClickPage) {
      const startIndex = (ClickPage - 1) * this.FaqPerPage;
      const endIndex = startIndex + this.FaqPerPage;
      this.NewFaq = this.faq.slice(startIndex, endIndex);
    },
  },
  computed: {
    searchKeyword() {
      return this.common.state.searchKeyword;
    },
  },
};
</script>