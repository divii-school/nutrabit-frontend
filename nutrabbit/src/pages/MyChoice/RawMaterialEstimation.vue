<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>my choice</h2>
          <ul class="recomanded-status-wrap">
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Raw material selection</p>
              </div>
            </li>
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Formulation selection</p>
              </div>
            </li>
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Choose a package</p>
              </div>
            </li>
            <li class="recomanded-status active">
              <div class="d-item">
                <span></span>
                <p>final quote</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>options</h2>
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
                <label>title</label>
                <input type="text" name="" placeholder="Please enter the subject.">
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <span>If you provide more details, it will help you get an accurate quote.</span>
                <textarea placeholder="Please write freely"></textarea>
              </div>
              <div class="fGroup">
                <label>Select service
                  <span>* Multiple selection possible</span>
                </label>
              </div>
              <div class="product-list-wrap">
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-radio">
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>Get a quote</h2>
                  </div>
                </div>
                <div class="product-item with-input">
                  <div class="radio-wrap">
                    <label class="custom-radio">
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="material-details">
                    <h2>sample application <span>(Sample cost 300,000 won/paid)</span></h2>
                  </div>
                </div>
                <ul>
                  <li>* Packages are excluded when requesting samples.</li>
                  <li>* The quotation will be sent to the registered email address within 2 business days.</li>
                  <li>* Unit price may vary depending on quantity & package design.</li>
                  <li>* It may differ from the detailed estimate at the time of completion.</li>
                </ul>
                <div class="btn-wrap">
                  <button class="btn-small-solid grey">Previous</button>
                  <button class="btn-small-solid blue">next</button>
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
  name: "RawMaterialEstimation",
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