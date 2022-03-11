<template>
  <div class="createParcel">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mt-4">
          <h4>Customer Information:</h4>
          <form class="row g-3" @submit.prevent="CustomerInfo">
            <div class="col-md-6">
              <label for="inputName" class="form-label">Name</label>
              <input type="text" 
              class="form-control" 
              id="inputName"
              v-model="userInfo.name"
              >
            </div>
            <div class="col-md-6">
              <label for="inputPhone" class="form-label">Phone Number</label>
              <input type="number" 
              class="form-control" 
              id="inputPhone"
              v-model="userInfo.phoneNumber"
              >
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" 
              class="form-control" 
              id="inputAddress" 
              v-model="userInfo.address"
              >
            </div>
            <h4>Delivery Information:</h4>
            <div class="col-12">
              <label for="" class="form-label">Select Destination</label>
            </div>
          <div class="col-md-6">    
           <select v-model="userInfo.district" class="form-select" aria-label="Default select example">
              <option selected>Select District</option>
              <option  v-for="(District,index) in Districts" :key="index">{{District}}</option>
          </select>
          <p>{{userInfo.district}}</p>
          </div>
          <div class="col-md-6">    
           <select v-model="userInfo.area" class="form-select" aria-label="Default select example">
              <option selected>Select Area</option>
              <option value="1">Nikunjo</option>
              <option value="2">Uttara</option>
              <option value="3">Gulshan</option>
          </select>
          </div>
          <div class="col-md-6">    
           <label for="inputSellingPrice" class="form-label">Selling Price</label>
              <input type="number" v-model="userInfo.sPrice" class="form-control" id="inputSellingPrice">
          </div>
          <div class="col-md-6">    
           <label for="inputCashingPrice" class="form-label">Cash Collection</label>
              <input v-model="userInfo.cPrice" type="number" class="form-control" id="inputCashingPrice">
          </div>
          <div class="col-md-12">  
            <label for="inputCashingPrice" class="form-label">Product Category</label>  
           <select v-model="userInfo.pCategory" class="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option v-for="(Product,index) in ProductCategory" :key="index">{{Product}}</option>
          </select>
          </div>
          <button class="btn btn-primary" type="Submit">Submit</button>
        </form>
        </div>
        <div class="col-md-4">
          <div class="position-sticky bg-dark text-white">
            <h1>আপনার পিকআপ এড্রেস থেকে ডেলিভারি চার্জ</h1>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userInfo:{
        name:'',
        phoneNumber:null,
        address:'',
        district:'',
        area:'',
        sPrice:null,
        cPrice:null,
        pCategory:''
      },
      Districts:['Dhaka','Lakshmipur','Commilla'],
      ProductCategory:['AC','Bed','Fridge','Computer','TV','Laptop','Mobile Phone']
    }
  },
  methods:{
    CustomerInfo(){

    }
  }
}
</script>

<style scoped>
.dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}

</style>
