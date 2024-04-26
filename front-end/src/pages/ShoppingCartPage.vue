<template>
    <h1>My Cart</h1>
    <div v-if="cartItems.length>0">
      <div 
        v-for="product in cartItems"
        class="product-container"
        :key= "product.id"
      >
      <img class="product-image" :src="product.imageName" />
      <div class="details-wrap">
        <h3>{{ product.name}}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button class="remove-button">Remove from cart</button>
    </div>
  </div>
  <div v-if="cartItems.length === 0">
    No items in
  </div>
   
</template>
<script>
import { cartItems } from '../temp-data';
export default {
  name: 'ShoppingCartPage',
  data(){
    return{
      cartItems,
    }
  }
}
</script>