<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading noFlex">
          <h2>1:1 문의</h2>
          <button
            class="btn-primary grenn-btn2"
            @click="this.$router.push('/inquiry-contactUs')"
          >
            1:1 문의하기 
          </button>
        </div>
        <div class="faq-heading inquiry">
          <p class="category">게시날짜</p>
          <p class="status">답변여부</p>
          <p class="title">제목</p>
        </div>
        <FaqAccordion v-for="(item, index) in UpdatedEnqueryList" :key="index">
          <template v-slot:title>
            <div class="item-left lp-2">
              <div class="item-left-inner">
                <p class="para-category">{{ dateformat(item.createdDate) }}</p>
                <span
                  class="mr-2"
                  :class="item.status == 'Unanswered' ? 'grey' : ''"
                  >{{ item.status }}</span
                >
              </div>
              <div class="item-right-inner">
                <p>{{ item.title }}</p>
              </div>
            </div>
          </template>
          <template v-slot:content>
            <div class="contWrap">
              <div class="contCol">
                <h4>첨부파일</h4>
                <p>
                  <a
                    :href="
                      'http://api-nutrabbit-dev.dvconsulting.org/public' +
                      item.attachment_path
                    "
                    target="_blank"
                  >
                    {{ item.attachment }}
                  </a>
                </p>
              </div>
              <div class="contCol">
                <h4>문의내용</h4>
                <p>
                  {{ item.description }}
                </p>
              </div>
              <div
                class="contCol"
                :class="item.status == 'Answer Complete' ? 'show' : 'hide'"
              >
                <h4>답변내용</h4>
                <p>
                  {{ item.replyText }}
                </p>
              </div>
            </div>
          </template>
        </FaqAccordion>
        <template v-if="this.UpdatedEnqueryList.length > 0">
          <pagination
            v-model="page"
            :records="enqueryList.length"
            :options="chunkPage"
            :per-page="perPage"
            @paginate="myCallback"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import FaqAccordion from "../../components/FaqAccordion.vue";
import CustomerCenterService from "../../services/CustomerCenterService";
export default {
  name: "Inquery",
  components: {
    FaqAccordion,
  },
  data() {
    return {
      enqueryList: [],
      UpdatedEnqueryList: [],
      page: 1,
      perPage: 10,
      inqId: localStorage.getItem("uid"),
      chunkPage : { chunk : 5 },
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  mounted() {
    this.allEnqueryList();
    this.dateformat();
  },
  methods: {
    myCallback(ClickPage) {
      const startIndex = (ClickPage - 1) * this.perPage;
      // const endIndex = (this.perPage * ClickPage);
      const endIndex = startIndex + this.perPage;
      this.UpdatedEnqueryList = this.enqueryList.slice(startIndex, endIndex);
    },
    allEnqueryList() {
      this.CustomerCenterService.getEnqueryList(this.inqId)
        .then((res) => {
          if (res.status == 200) {
            this.enqueryList = res.data.data.inquery;
            this.myCallback(1);
          }
        })
        .catch((err) => {
          return;
        });
    },
    dateformat(value) {
      if (value) {
        return moment(String(value)).format("YYYY.MM.DD");
      }
    },
  },
};
</script>