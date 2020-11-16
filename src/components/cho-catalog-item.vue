<template>
  <div class="cho-catalog-item">
    <img class="cho-catalog-item__image" :src=" require('../assets/images/' + chobject_data.image) " alt="object_data.title">
    <div class="cho-catalog-item__description">
      <p class="cho-catalog-item__title"><b>{{ chobject_data.title }}</b></p>
      <p class="cho-catalog-item__type">{{ chobject_data.type }}</p>
      <p class="cho-catalog-item__construction"><i>{{ chobject_data.construction }}</i></p>
      <p class="cho-catalog-item__number_of_storeys">Этажей: {{ chobject_data.number_of_storeys }}</p>
      <p class="cho-catalog-item__condition">Состояние: {{ chobject_data.condition }}</p>
      <p class="cho-catalog-item__appearance">Внешний вид: {{ chobject_data.appearance }}</p>
      <p class="cho-catalog-item__human_influence">Влияние человека: {{ chobject_data.human_influence }}</p>

      <p class="cho-catalog-item__construction_period"><b>{{ chobject_data.construction_period }}</b></p>
      <p class="cho-catalog-item__adress">{{ chobject_data.address }}</p>
      <button
      class="cho-catalog-item__add_to_cart_btn btn"
      @click="sendDataToParent">
      Add to cart</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'cho-catalog-item',
    components: {},
    props: {
      chobject_data: {
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
      sendDataToParent() {
        this.$emit( {event: 'sendTitle'}, this.chobject_data.title)
      }
    },
    watch: {}
  }
</script>

<style lang="scss">
  .cho-catalog-item {
    flex-basis: 15%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: $margin*2;
    &__image {
      width: 350px;
    }
    &__description {
      padding: $padding*2;
    }
  }
</style>
