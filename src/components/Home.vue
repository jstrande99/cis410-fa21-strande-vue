<template>
  <div>
      <h1>Home</h1>
      <hr/>
      <hr/>
      <h5 class="text-center">Our Top Products</h5>
      <hr/>
      
      <table class="table table-dark">
        <thead> 
          <tr> 
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aProduct in theProducts" :key="aProduct.ProductID">
            <th>
              {{aProduct.productName}}
            </th>
            <th>
              ${{aProduct.productPrice}}
            </th>
            <th>
              {{aProduct.CategoryName}}
            </th>
            <th>
              <router-link :to="`/products/${aProduct.ProductID}`">
                <button class="btn btn-dark text-light btn-outline-light">
                Details
                </button>
              </router-link>
            </th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  computed:{
    theProducts(){
      return this.$store.state.products; 
    }
  }
}
</script>

<style>

</style>