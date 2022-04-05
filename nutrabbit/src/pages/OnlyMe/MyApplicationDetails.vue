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
          tabs: ['Sample Application Details', 'Quotation Request Details']
      };
  },
  
};
</script>