<template>
  <div class="cho-cart-item">
    <img class="cho-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="cart_item_data.title">
    <div class="cho-cart-item__info">
      <p>{{ cart_item_data.title }}</p>
      <p>{{ cart_item_data.construction_period }}</p>
    </div>
    <div class="cho-cart-item__quantity">
      <p>Количество: {{ cart_item_data.quantity }}</p>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: 'cho-cart-item',
    components: {},
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    },
    watch: {},
    mounted() {
      this.$set(this.cart_item_data, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .cho-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: $margin*2;
    &__image {
      max-width: 300px;
    }
  }
</style>
