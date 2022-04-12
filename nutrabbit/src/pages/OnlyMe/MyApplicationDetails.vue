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
                                    <td>{{index +1}}</td>
                                    <td @click="this.$router.push(`/my-recipe-details-sample/${item.id}`)">{{item.explanation}}</td>
                                    <td>{{dateformat(item.createdDate)}}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <!-- <pagination
                          v-model="page"
                          :records="5"
                          :per-page="1"
                          @paginate="myCallback"
                        /> -->
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
                                    <th>Explanation</th>
                                    <th>Application Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(item, index) of applicationList2" :key="index">
                                    <td>{{index +1}}</td>
                                    <td @click="this.$router.push(`/my-recipe-details-sample/${item.id}`)">{{item.explanation}}</td>
                                    <td>{{dateformat(item.createdDate)}}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <!-- <Pagination /> -->
                      </div>
                      <div class="choice-selection-item-wrap choice-wrap-border">
                        <div class="choice-selection-item raw-material-product">
                          <div class="heading-wrap">
                            <div class="heading">
                              <h2>My Choice</h2>
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
                                  <tr v-for="(item, index) of newApplicationList3" :key="index">
                                    <td>{{index +1}}</td>
                                    <td @click="this.$router.push(`/my-recipe-details-sample/${item.id}`)">{{item.explanation}}</td>
                                    <td>{{dateformat(item.createdDate)}}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <pagination
                          v-model="page"
                          :records="mychoice_total"
                          :per-page="limit"
                          @paginate="myCallback"
                        />
                      </div>
                    </div>
                  <div v-show="currentTab === 1">
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
                              <tr v-for="(item, index) of quotationList" :key="index">
                                <td>{{index +1}}</td>
                                <td @click="$router.push({name : 'MyApplicationQuoteRequestBlending', params : { id : item.id ,  type : 'nutri'}})">{{item.explanation}}</td>
                                <td>{{dateformat(item.createdDate)}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <!-- <Pagination /> -->
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
                                  <th>Explanation</th>
                                  <th>Application Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(item, index) of quotationList2" :key="index">
                                  <td>{{index +1}}</td>
                                  <td @click="$router.push({name : 'MyApplicationQuoteRequestBlending', params : { id : item.id ,  type : 'recommended'}})">{{item.explanation}}</td>
                                  <td>{{dateformat(item.createdDate)}}</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <!-- <Pagination /> -->
                    </div>
                    <div class="choice-selection-item-wrap choice-wrap-border">
                      <div class="choice-selection-item raw-material-product">
                        <div class="heading-wrap">
                          <div class="heading">
                            <h2>My Choice</h2>
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
                                <tr v-for="(item, index) of quotationList3" :key="index">
                                  <td>{{index +1}}</td>
                                  <td @click="$router.push({name : 'MyApplicationQuoteRequestChoice', params : { id : item.id }})">{{item.explanation}}</td>
                                  <td>{{dateformat(item.createdDate)}}</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <!-- <Pagination /> -->
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
        applicationList2: [],
        applicationList3: [],
        application_type:"nutri_blending", 
        application_type2:"recommended_blending",
        application_type3:"my_choice",
        quotationList:[],
        quotationList2:[],
        quotationList3:[],
        // UpdatedapplicationList: [],
        // page: 1,
        // perPage: 5,
        userId: this.common.state.userId,
        lang:"KO",
        page:1,
        limit:5,
        sortBy: "",
        sortOrder: "",
        nutri_blending_total:"",
        mychoice_total:"",
        recommended_total: "",

        newApplicationList3: [],
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

    myCallback(ClickPage){
      const startIndex = (ClickPage - 1) * this.limit;
      // const endIndex = (this.perPage * ClickPage);
      const endIndex = startIndex + this.limit;
      this.newApplicationList3 = this.applicationList3.slice(startIndex, endIndex);
      console.log("this.newApplicationList3",this.newApplicationList3);
    },

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
          this.nutri_blending_total = res.data.data.total;
          console.log("nutri_blending",this.nutri_blending_total);
          // this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    applicationlist2() {
      this.myApplicationDetails.applicationlist2(
        this.userId,
        this.lang,
        this.application_type2,
        this.page,
        this.limit,
        this.sortBy,
        this.sortOrder,
        )
        .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          this.applicationList2 = res.data.data.applicationData;
          this.recommended_total = res.data.data.total;
          console.log("MyChoice",this.recommended_total);
          // this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    applicationlist3() {
      this.myApplicationDetails.applicationlist3(
        this.userId,
        this.lang,
        this.application_type3,
        this.page,
        this.limit,
        this.sortBy,
        this.sortOrder,
        )
        .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          this.applicationList3 = res.data.data.applicationData;
          this.mychoice_total = res.data.data.total;
          console.log("MyChoice",this.mychoice_total);
          this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    quotationlist() {
      this.myApplicationDetails.quotationlist(
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
          this.quotationList = res.data.data.applicationData;
          console.log("quotation_nutri_blending",this.quotationList);
          // this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    quotationlist2() {
      this.myApplicationDetails.quotationlist2(
        this.userId,
        this.lang,
        this.application_type2,
        this.page,
        this.limit,
        this.sortBy,
        this.sortOrder,
        )
        .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          this.quotationList2 = res.data.data.applicationData;
          console.log("quotationRecommended",this.quotationList2);
          // this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    quotationlist3() {
      this.myApplicationDetails.quotationlist3(
        this.userId,
        this.lang,
        this.application_type3,
        this.page,
        this.limit,
        this.sortBy,
        this.sortOrder,
        )
        .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          this.quotationList3 = res.data.data.applicationData;
          console.log("quotationMyChoice",this.quotationList3);
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

  },

  mounted() {
    this.applicationlist();
    this.dateformat();
    this.quotationlist();
    this.quotationlist2();
    this.quotationlist3();

    this.applicationlist2();
    this.applicationlist3();
  }
  
};
</script>