<template>
<div class="container">
    <table class="table table-bordered table-hover mt-5" >
  <thead>
    <tr>
      <th class="th-sm">SI</th>
      <th class="th-sm">Customer Name</th>
      <th class="th-sm">Phone Number</th>
      <th class="th-sm">Address </th>
      <th class="th-sm">district</th>
      <th class="th-sm">area</th>
      <th class="th-sm">Selling Price</th>
      <th class="th-sm">Cash Collection Price</th>
      <th class="th-sm">Product Category</th>
      <th class="th-sm">Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(parcel,index) in parcels" :key="index">
      <td>{{index}}</td>
      <td>{{parcel.name}}</td>
      <td>{{parcel.phoneNumber}}</td>
      <td>{{parcel.address}}</td>
      <td>{{parcel.district}}</td>
      <td>{{parcel.area}}</td>
      <td>{{parcel.sPrice}}</td>
      <td>{{parcel.cPrice}}</td>
      <td>{{parcel.pCategory}}</td>
      <td>{{parcel.weight}} gm</td>
    </tr>
  </tbody>
    </table>
</div>
</template>

<script>
export default {
  computed:{
      parcels(){
          return this.$store.getters.getParcel
      }
  }  
}
</script>