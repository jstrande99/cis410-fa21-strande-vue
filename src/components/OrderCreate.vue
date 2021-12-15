<template>
  <div>
    <div class="row justify-content-center" >
      <div class="col-lg-10" >
        <div class="card" >
          <div class="card-body" >
            <h4 >Order now</h4>
            <form id="order-form" @submit.prevent="submitOrder">
              <div class="mb-3" >
                <label for="quantity-input" class="form-label" 
                  >Quantity</label
                ><input
                  type="number"
                  class="form-control"
                  id="quantity-input"
                  required=""
                  min="1"
                  max="100"
                  v-model="quantity"
                />
              </div>
              <div class="mb-3" >
                <label for="payment-input" class="form-label"
                  >Payment: (ApplePay, PayPal)</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="payment-input"
                  required=""
                  v-model="payment"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Order</button
              ><button
                type="clear"
                class="btn btn-outline-danger"
                v-on:click="cancelOrder"
              >
                Cancel</button
              ><!---->
              <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      quantity: null,
      payment: "",
      errorMessage: null
    }
  },
  methods:{
    submitOrder(){
      let myOrder = {
        quantity: this.quantity,
        payment: this.payment,
        productID: this.$route.params.pk
      }
      axios.post("/orders",myOrder,{
        headers:{Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{this.$router.replace("/account");
      }).catch(()=>{
        this.errorMessage = "Unable to create review, please try again later"
      });
    },
    cancelReview(){
      this.$router.go(-1);
    }
  },
};
</script>

<style>
  button{
    margin-right: 5px;
  }
</style>