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
            <li class="search-resul-list" v-for="link in user" :key="link">
              <h1 class="list-heading">{{ link.name }}</h1>
              <ul class="search-list-inner">
                <li
                  class="search-list-item"
                  v-for="link in user.links"
                  :key="link"
                >
                  <div class="item-img-wrap">
                    <img v-bind:src="link.name" alt="" />
                  </div>
                  <p class="text-center">{{ link.url }}</p>
                </li>
              </ul>
              <Pagination />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
export default {
  name: "SearchResult",
  components: {
    Pagination,
  },

  data() {
    return {
      users: [
        {
          name: "nutri 3.3",
          links: [
            {
              name: "../../../src/assets/images/aloe-img1.png",
              url: "Aloe A B",
            },
            {
              name: "../../../src/assets/images/aloe-img2.png",
              url: "Aloe A B C",
            },
          ],
        },
        {
          name: "Vue User",
          links: [
            {
              name: "Vue Forum",
              url: "forum.vuejs.org",
            },
            {
              name: "Vue Chat",
              url: "chat.vuejs.org",
            },
          ],
        },
      ],
    };
  },
};
</script>