<template>
  <div>
      <h1>Account</h1>
      <hr/>
      <h3>{{firstName}}'s Orders</h3>

    <p v-if="accountError" class="text-danger">Cannot get your account info, please try again later </p>
      <table v-if="reviewsByUser" class="table">
        <thead>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
        </thead>  
        <tbody>
          <tr v-for="thisOrder in ordersByUser" :key="thisOrder.OrderID">
            <th><router-link :to='`/products/${thisOrder.ProductID}`'>{{thisOrder.productName}}</router-link></th>
            <th>{{thisOrder.CategoryName}}</th>
            <th>{{thisOrder.productPrice}}</th>
          </tr>
        </tbody>
      </table> 
  
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      ordersByUser: null,
      accountError: false
    }
  },
  computed:{
    firstName(){
      console.log("here is the store so far ", this.$store.state); 
      return this.$store.state.user.NameFirst;
    }
  },
  created(){
    axios.get("/orders/me", {
      headers: { 
        Authorization: `Bearer ${this.$store.state.token}`
      }
    }).then((theResponse)=>{
      console.log("here is the repsonse", theResponse);
      this.ordersByUser = theResponse.data;
    }).catch(()=>{this.accountError=true})
  }
};
</script>

<style>

</style>