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
        <FaqAccordion v-for="(item, index) in NoticeList" :key="index">
          <template v-slot:title>
            <div class="item-left lp-2">
              <div class="item-left-inner">
                <p class="para-category"> {{item.date}}</p>
                <span class="mr-2" v-if="item.tag">{{item.tag}}</span>
              </div>
              <div class="item-right-inner">
                <p>{{item.title}}</p>
              </div>
            </div>
          </template>
          <template v-slot:content>
            <div class="contWrap">
              <div class="contCol">
                <h4>attachment</h4>
                <p>
                  <a href="#">image file2.jpg</a>
                </p>
              </div>
              <div class="contCol">
                <h4>Inquiries</h4>
                <p>
                  {{item.content}}
                </p>
              </div>
            </div>
          </template>
        </FaqAccordion>
         <Pagination />
      </div>
    </div>
  </div>
</template>
<script>
import FaqAccordion from "../../components/FaqAccordion.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  name: "FAQ",
  components: {
    FaqAccordion,
    Pagination,
  },
  data(){
    return{
      NoticeList:[
        {
          date:"2022.01.19",
          tag:"Unanswered",
          title:"Please inquire about a quote.",
          content:"1 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          date:"2022.01.19",
          tag:"Unanswered",
          title:"Please inquire about a quote.",
          content:"1 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          date:"2022.01.19",
          tag:"Unanswered",
          title:"Please inquire about a quote.",
          content:"1 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          date:"2022.01.19",
          tag:"Unanswered",
          title:"Please inquire about a quote.",
          content:"1 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          date:"2022.01.19",
          tag:"Unanswered",
          title:"Please inquire about a quote.",
          content:"1 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
      ]
    }
    },
};
</script>