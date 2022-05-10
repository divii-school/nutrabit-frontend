<template>
  <div class="main-body">
    <div class="container-medium ">
      <div class="my-notice-wrap inquery-wrap">
        <div class="my-notice-heading noFlex">
          <h2>{{$t("customer.title.Inquiry")}}</h2>
          <button
            class="btn-primary grenn-btn2"
            @click="this.$router.push('/inquiry-contactUs')"
          >
            {{$t("customer.title.Inquiry")}} 
          </button>
        </div>
        <div class="faq-heading inquiry">
          <p class="category">{{$t("customer.title.PublishedDate")}}</p>
          <p class="status">{{$t("onlyme.title.Title")}}</p>
          <p class="title">{{$t("customer.title.Status")}}</p>
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
                <h4>{{$t("customer.tag.Attachment")}}</h4>
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
                <h4>{{$t("customer.tag.Inquiries")}}</h4>
                <p>
                  {{ item.description }}
                </p>
              </div>
              <div
                class="contCol"
                :class="item.status == 'Answered' ? 'show' : 'hide'"
              >
                <h4>{{$t("customer.tag.AnswerContent")}}</h4>
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
    FaqAccordion
  },
  data() {
    return {
      enqueryList: [],
      UpdatedEnqueryList: [],
      page: 1,
      perPage: 10,
      inqId: localStorage.getItem("uid"),
      chunkPage : { chunk : 5 },
      globalLocale : '',
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },

  updated(){
    this.globalLocale = localStorage.getItem('selectedLang');
    console.log(this.globalLocale)
  },
  watch: {
    globalLocale(newVal, oldVal) {
      if((newVal == 'KO' && oldVal == 'EN') || (newVal == 'EN' && oldVal == 'KO')){
       this.allEnqueryList();
       this.dateformat();
      }
    },
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
            console.log(res.data)
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

<style scoped>
.inquery-wrap .grenn-btn2{
  padding: 11px 30px;
}
</style>