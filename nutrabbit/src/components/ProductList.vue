<template>
  <div class="product-item">
    <div class="radio-wrap">
      <label class="custom-radio">
        <input type="radio" name="radio" id="radio" :value="item.id" @click="getPackageId" />
        <span class="checkmark"></span>
      </label>
      <div class="img-wrap">
        <img v-bind:src="'http://api-nutrabbit-dev.dvconsulting.org//public' + item.thumbnail_image_path[1]" v-bind:alt="item.title" />
      </div>
    </div>
    <div class="material-details">
      <h2>{{item.title}}</h2>
      <div class="description">
        <!-- <p>{{item.description_ko}}</p> -->
        <!-- <p v-for="(description, ind) of item.desc" :key="ind">{{description}}</p> -->
        <table>
          <tr>
            <th>Raw material</th>
            <td>{{ item.raw_material_name }}</td>
          </tr>
          <tr>
            <th>Formulation</th>
            <td>{{ item.formulation }}</td>
          </tr>
          <tr>
            <th>Package</th>
            <td>{{ item.package }}</td>
          </tr>
          <tr>
            <th>Additional Request</th>
            <td>{{ item.additional_request }}</td>
          </tr>
          <tr>
            <th>Service</th>
            <td>{{ item.service }}</td>
          </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:["item", "deleteRecommended", "deleteChoice"],
   methods: {
         getPackageId(event) {
           this.$emit('changeId',event.target.value);
           console.log(event.target.value)
         }
   }
};
</script>