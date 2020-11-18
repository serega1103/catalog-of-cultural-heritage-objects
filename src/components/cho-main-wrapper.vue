<template>
  <div class="cho-main-wrapper">
    <h1>{{ title }}</h1>
    <cho-catalog />
    <cho-cart
      v-if="CART.length"
      :cart_data="CART"
    />
  </div>
</template>

<script type="text/javascript">
import choCatalog from './cho-catalog'
import choCart from './cho-cart'
import {mapGetters} from 'vuex'

  export default {
    name: 'cho-main-wrapper',
    components: {
      choCatalog,
      choCart
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello world!')
    }
  }
</script>

<style>
  .cho-main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
  }

</style>
