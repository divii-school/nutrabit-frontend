<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading noFlex">
          <h2>1:1 inquiry</h2>
          <button class="btn-primary grenn-btn2">1:1 Inquiry</button>
        </div>
        <div class="faq-heading inquiry">
          <p class="category">Published date</p>
          <p class="status">Status</p>
          <p class="title">title</p>
        </div>
        <FaqAccordion v-for="(item, index) in UpdatedEnqueryList" :key="index">
          <template v-slot:title>
            <div class="item-left lp-2">
              <div class="item-left-inner">
                <p class="para-category">{{ item.date }}</p>
                <span class="mr-2" :class="item.status == 'Not Answered' ? 'grey' : '' ">{{ item.status }}</span>
              </div>
              <div class="item-right-inner">
                <p>{{ item.title }}</p>
              </div>
            </div>
          </template>
          <template v-slot:content>
            <div class="contWrap">
              <div class="contCol">
                <h4>attachment</h4>
                <p>
                  <a :href="'http://api-nutrabbit-dev.dvconsulting.org/public' + item.attachment_path" target="_blank">
                  {{item.attachment}}
                  </a>
                </p>
              </div>
              <div class="contCol">
                <h4>Inquiries</h4>
                <p>
                  {{ item.description }}
                </p>
              </div>
               <div class="contCol" :class="item.status == 'Answer Complete' ? 'show' : 'hide' ">
                <h4>Inquiries</h4>
                <p>
                  {{ item.replyText }}
                </p>
              </div>
            </div>
          </template>
        </FaqAccordion>
        <pagination
          v-model="page"
          :records="5"
          :per-page="1"
          @paginate="myCallback"
        />
      </div>
    </div>
  </div>
</template>
<script>
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
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  mounted() {
    this.allEnqueryList();
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
            console.log(res.data.data);
            this.enqueryList = res.data.data.inquery;
            this.myCallback(1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>