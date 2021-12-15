<template>
  <div>
      <h1>All Products</h1>
      <hr/>
      <table class="table">
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
                <button class="btn btn-dark text-light">
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