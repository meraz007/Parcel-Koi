<template>
  <div class="createParcel pb-5">
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
              <option  v-for="(District,index) in Districts" :key="index">{{District}}</option>
          </select>
          </div>
          <div class="col-md-6">    
           <select v-model="userInfo.area" class="form-select" aria-label="Default select example">
              <option v-for="(Area,index) in Areas" :key="index">{{Area}}</option>
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
          <div class="col-md-6">  
            <label for="inputCashingPrice" class="form-label">Product Category</label>  
           <select v-model="userInfo.pCategory" class="form-select" aria-label="Default select example">
              <option v-for="(cat,index) in ProductCategory" :key="index">{{cat}}</option>
          </select>
          </div>
          <div class="col-md-6">    
           <label for="inputweight" class="form-label">weight</label>
              <input v-model="userInfo.weight" type="number" step="500" class="form-control" id="inputweight">
          </div>
          <div class="col-md-3 float-right">
            <button class="btn btn-primary" type="Submit">Submit</button>
          </div>
        </form>
        </div>
        <div class="col-md-4">
          <div class="position-sticky p-3" style="background-color: #F5F5F5;">
            <h4 class="p-3">Delivery Charge And Cash Collection:</h4>
            <table class="table table-borderless">
                <tr>
                  <th>Charge List  </th>
                  <td>Amount</td>
                </tr>
                <hr>
                <tr>
                  <th>Cash Collection</th>
                  <td>{{userInfo.cPrice}}</td>
                </tr>
                <tr>
                  <th>Delivery Charge</th>
                  <td>{{deliveryCharge}}</td>
                </tr>
                <tr>
                  <th>Weight Charge</th>
                  <td>{{weightCharge}}</td>
                </tr>
                <hr>
                 <tr>
                  <th>Total Payable</th>
                  <td>{{totalCharge}}</td>
                </tr>
            </table>
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
        district:'Select district',
        area:'Select Area',
        sPrice:null,
        cPrice:null,
        pCategory:'Select Category',
        weight:parseInt(500)
      },
      Districts:['Select district','Dhaka','Lakshmipur','Commilla'],
      ProductCategory:['Select Category','AC','Bed','Fridge','Computer','TV','Laptop','Mobile Phone'],
      Areas:['Select Area','Nikunjo','Uttara','Gulshan']
    }
  },
  computed:{
    deliveryCharge(){
      var charge;
      if(this.userInfo.district=='Dhaka' ){
        charge=60
      }
      else if(this.userInfo.district=='Select district'){
        charge=0
      }
      else{
        charge=120
      }
      return charge
    },
    weightCharge(){
      var wCharge;
      if(this.userInfo.weight===1000){
        wCharge=0
      }
      else if(this.userInfo.weight >1000 && this.userInfo.weight <=5000){
        wCharge=20
      }
      else if(this.userInfo.weight >5000){
        wCharge=40
      }
      return wCharge
    },
    totalCharge(){
      var total;
      total =parseInt(this.userInfo.cPrice + this.deliveryCharge + this.weightCharge) 
      return total
    }
  },
  methods:{
    CustomerInfo(){
      this.$store.commit('itemAdd',this.userInfo)
      this.userInfo=''
      this.$router.push('/desh-board')
    }
  }
}
</script>

