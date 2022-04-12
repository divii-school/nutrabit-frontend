<template>
  <div class="product-item">
    <div class="radio-wrap">
      <label class="custom-radio">
        <input type="radio" name="radio" id="radio" :value="item.id" @click="getPackageId" />
        <span class="checkmark"></span>
      </label>
      <div class="img-wrap">
        <img v-bind:src="'http://api-nutrabbit-dev.dvconsulting.org//public' + item.thumbnail_image_path[0]" v-bind:alt="item.title" />
      </div>
    </div>
    <div class="material-details">
      <h2>{{item.title}}</h2>
      <div class="description">
        <table>
          <tr>
            <th><p>Raw material</p></th>
            <td><p>{{ item.raw_material_name }}</p></td>
          </tr>
          <tr>
            <th><p>Formulation</p></th>
            <td><p>{{ item.formulation }}</p></td>
          </tr>
          <tr>
            <th><p>Package</p></th>
            <td><p>{{ item.package }}</p></td>
          </tr>
          <tr>
            <th><p>Additional Request</p></th>
            <td><p>{{ item.additional_request }}</p></td>
          </tr>
          <tr>
            <th><p>Service</p></th>
            <td><p>{{ item.service }}</p></td>
          </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:["item"],
   methods: {
         getPackageId(event) {
           this.$emit('changeId',event.target.value);
           console.log(event.target.value)
         }
   }
};
</script>