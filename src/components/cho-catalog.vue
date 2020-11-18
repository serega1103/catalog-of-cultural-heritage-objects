<template>
  <div class="cho-catalog">
    <h1>Im a catalog</h1>
    <div class="cho-catalog__list">
      <cho-catalog-item
        v-for="heritageObject in HERITAGEOBJECTS"
        :key="heritageObject.title"
        :heritageObject_data="heritageObject"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
import choCatalogItem from './cho-catalog-item'
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'cho-catalog',
    components: {
      choCatalogItem
    },
    props: {},
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'HERITAGEOBJECTS'
      ])
    },
    methods: {
      ...mapActions([
        'GET_HERITAGEOBJECTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    watch: {},
    mounted() {
      this.GET_HERITAGEOBJECTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
        }
      })
    }
  }
</script>

<style lang="scss">
  .cho-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
</style>
