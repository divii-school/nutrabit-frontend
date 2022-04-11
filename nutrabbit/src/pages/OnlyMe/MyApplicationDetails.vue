<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>My Application</h2>
        </div>
        
        <div id="app">
          <ul class="overlay-panel-actions-primary">
              <li v-for="(tab, index) in tabs" 
              @click="currentTab = index" 
              :class="{active: currentTab === index}" :key="index">{{tab}}</li>
          </ul>
          <div class="content-bd">
              <div class="tab-content">
                  <div v-show="currentTab === 0">
                      <div class="choice-selection-item-wrap choice-wrap-border">
                        <div class="choice-selection-item raw-material-product">
                          <div class="heading-wrap">
                            <div class="heading">
                              <h2>nutri 3.3</h2>
                            </div>
                          </div>
                          <div class="materialForm">
                            <div class="tableWrap">
                              <table>
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Explanation</th>
                                    <th>Application Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(item, index) of applicationList" :key="index">
                                    <td>{{item.id}}</td>
                                    <!-- <td @click="secondpage(item.id)">{{item.explanation}}</td> -->
                                    <td @click="this.$router.push(`/my-recipe-details-sample/${item.id}`)">{{item.explanation}}</td>
                                    <td>{{dateformat(item.createdDate)}}</td>
                                  </tr>
                                  <!-- <tr>
                                    <td>2</td>
                                    <td>Raw material</td>
                                    <td>aloe gel</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Raw material</td>
                                    <td>aloe gel</td>
                                  </tr> -->
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <pagination
                          v-model="page"
                          :records="5"
                          :per-page="1"
                          @paginate="myCallback"
                        />
                      </div>
                      <div class="choice-selection-item-wrap choice-wrap-border">
                        <div class="choice-selection-item raw-material-product">
                          <div class="heading-wrap">
                            <div class="heading">
                              <h2>Recommended blending</h2>
                            </div>
                          </div>
                          <div class="materialForm">
                            <div class="tableWrap">
                              <table>
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>category</th>
                                    <th>Explanation</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>One</td>
                                    <td>Raw material</td>
                                    <td>aloe gel</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Raw material</td>
                                    <td>aloe gel</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Raw material</td>
                                    <td>aloe gel</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <Pagination />
                      </div>
                  </div>
                  <div v-show="currentTab === 1">
                    <div class="choice-selection-item-wrap choice-wrap-border">
                    <div class="choice-selection-item raw-material-product">
                      <div class="heading-wrap">
                        <div class="heading">
                          <h2>Recommended blending</h2>
                        </div>
                      </div>
                      <div class="materialForm">
                        <div class="tableWrap">
                          <table>
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>category</th>
                                <th>Explanation</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>One</td>
                                <td>Raw material</td>
                                <td>aloe gel</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Raw material</td>
                                <td>aloe gel</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Raw material</td>
                                <td>aloe gel</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <Pagination />
                  </div>
                    <div class="choice-selection-item-wrap choice-wrap-border">
                      <div class="choice-selection-item raw-material-product">
                        <div class="heading-wrap">
                          <div class="heading">
                            <h2>nutri 3.3</h2>
                          </div>
                        </div>
                        <div class="materialForm">
                          <div class="tableWrap">
                            <table>
                              <thead>
                                <tr>
                                  <th>No</th>
                                  <th>category</th>
                                  <th>Explanation</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>One</td>
                                  <td>Raw material</td>
                                  <td>aloe gel</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Raw material</td>
                                  <td>aloe gel</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Raw material</td>
                                  <td>aloe gel</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <Pagination />
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
// import Popper from "vue3-popper";
import ProductList from "../../components/ProductList.vue";
import Pagination from "../../components/Pagination.vue";
import MyApplicationDetails from "../../services/MyApplicationDetails";
import moment from "moment";
import { inject } from "vue";
export default {
  name: "MyRecipeDetails",
  components: {
    // Popper,
    ProductList,
    Pagination
  },
  // tab code
  el: "#app",
  data() {
      return {
        currentTab: 0,
        tabs: ['Sample Application Details', 'Quotation Request Details'],
        applicationList: [],
        // UpdatedapplicationList: [],
        // page: 1,
        // perPage: 5,
        userId: this.common.state.userId,
        lang:"KO",
        application_type:"",
        page:1,
        limit:10,
        sortBy: "",
        sortOrder: "",
      };
  },

  setup() {
    const common = inject("common");
    return { common };
  },

   created() {
    this.myApplicationDetails = new MyApplicationDetails();
  },

  methods: {

    // myCallback(ClickPage){
    //   const startIndex = (ClickPage - 1) * this.perPage;
    //   // const endIndex = (this.perPage * ClickPage);
    //   const endIndex = startIndex + this.perPage;
    //   this.UpdatedapplicationList = this.applicationList.slice(startIndex, endIndex);
    // },

    applicationlist() {
      this.myApplicationDetails.applicationlist(
        this.userId,
        this.lang,
        this.application_type,
        this.page,
        this.limit,
        this.sortBy,
        this.sortOrder,
        )
        .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          this.applicationList = res.data.data.applicationData;
          console.log("this.applicationList",this.applicationList);
          // this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    dateformat(value) {
      if (value) {
        return moment(String(value)).format("YYYY.MM.DD");
      }
    },

    // secondpage(id){
    //   window.location = "/my-recipe-details-sample" + id;
    // },

  },

  mounted() {
    this.applicationlist();
    this.dateformat();
  }
  
};
</script>