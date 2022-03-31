<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading">
          <h2>FAQ</h2>
        </div>
        <div class="faq-heading">
          <p class="category">category</p>
          <p class="title">title</p>
        </div>
        <FaqAccordion v-for="(item, index) in NoticeList" :key="index">
          <template v-slot:title>
            <div class="item-left">
              <p class="para-category"> {{item.categoryname}}</p>
              <span v-if="item.tag">{{item.tag}}</span>
              <p>{{item.title}}</p>
            </div>
          </template>
          <template v-slot:content>
            <p>
              {{item.content}}
            </p>
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
          categoryname:"all",
          tag:"important",
          title:"This is the FAQ title.",
          content:"1 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"estimate",
          tag:"important",
          title:"This is the FAQ title.",
          content:"2 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"Sample",  
          tag:"important",
          title:"This is the FAQ title.",
          content:"3 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"delivery",
          tag:"important",
          title:"This is the FAQ title.",
          content:"4 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"payment",
          tag:"important",
          title:"This is the FAQ title.",
          content:"5 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"service",
          tag:"important",
          title:"This is the FAQ title.",
          content:"6 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"Etc",
          tag:"important",
          title:"This is the FAQ title.",
          content:"7 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
        {
          categoryname:"service",
          title:"This is the FAQ title.",
          content:"8 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
         {
          categoryname:"service",
          title:"This is the FAQ title.",
          content:"9 ipsum dolor sit amet consectetur adipisicing elit. Quia,porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea itaque consectetur impedit?"
        },
         {
          categoryname:"service",
          title:"This is the FAQ title.",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare facilisi tempor rutrum blandit duis mauris egestas iaculis. Gravida eu nulla imperdiet turpis massa aliquam, vestibulum gravida tempor. Non fermentum malesuada sit amet vestibulum semper sem mollis. Magna pellentesque bibendum tellus est tortor, faucibus nibh sagittis. Nunc, scelerisque cras convallis duis orci ultrices nec amet eget. Gravida vestibulum, suspendisse eu ut. At at cursus faucibus ac risus mollis."
        },

      ]
    }
    },
};
</script>