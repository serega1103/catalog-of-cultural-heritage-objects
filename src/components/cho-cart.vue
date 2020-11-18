<template>
  <div class="cho-cart">
    <h1>Корзина</h1>
    <cho-cart-item
      v-for="(item, index) in cart_data"
      :key="item.title"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script type="text/javascript">
  import choCartItem from './cho-cart-item'
  import {mapActions} from 'vuex'

  export default {
    name: 'cho-cart',
    components: {
      choCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    },
    watch: {},
    mounted() {
      console.log('Hello world!')
    }
  }
</script>

<style>

</style>
