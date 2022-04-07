<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>My choice</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Options</h2>
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
              <div class="fGroup">
                <label>Title</label>
                <input type="text" name="" placeholder="My own recipe made with guar gum hydrolyzate">
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <span>The more detailed you are, the more accurate your estimate will be.</span>
                <textarea placeholder="Please write freely"></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0">Select service
                  <span>* Duplicate selection possible (package is excluded when requesting a sample.)</span>
                </label>
              </div>
              <div class="product-list-wrap">
                <div class="product-item recipeCheck">
                  <div class="form-group">
                    <div class="check-box-wrap">
                      <label class="custom-check">
                         <input type="checkbox"><span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="material-details">
                    <h2>Get a quote</h2>
                  </div>
                </div>
                <div class="product-item recipeCheck">
                  <div class="form-group">
                    <div class="check-box-wrap">
                      <label class="custom-check">
                         <input type="checkbox"><span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="material-details">
                    <h2>sample application <span>(Sample cost 300,000 won/paid)</span></h2>
                  </div>
                </div>
                <ul>
                  <li>* The quotation will be sent to the registered email address within 2 business days.</li>
                  <li>* Unit price may vary depending on quantity & package design.</li>
                  <li>* It may differ from the detailed estimate at the time of completion.</li>
                </ul>
                <div class="btn-wrap">
                  <button class="btn-small-solid grey">Cancel</button>
                  <div class="btnWrapRight">
                    <button class="btn-small-solid blue ml-4">Save</button>
                  </div>
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
export default {
  name: "MyRecipeDetailsEdit",
  components: {
    // Popper,
    ProductList,
  },
  data() {
    return {
      // rwaMaterialData: [
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "Bottle",
      //     desc: [
      //       "Choose from a variety of sizes and shapes of bottles and caps.",
      //     ],
      //   },
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "PTP",
      //     desc: [
      //       "It is hygienic and convenient.",
      //       "The packaging volume is slightly larger.",
      //     ],
      //   },
      // ],
    };
  },
};
</script>