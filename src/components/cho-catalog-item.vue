<template>
  <div class="cho-catalog-item">
    <!-- <img class="cho-catalog-item__image" :src=" require('../assets/images/' + heritageObject_data.image) " alt="heritageObject_data.title"> -->
    <div class="cho-catalog-item__description">
      <p>Название: {{ heritageObject_data.name }}</p>
      <p>Описание: {{ heritageObject_data.description }}</p>
      <!-- <p class="cho-catalog-item__title"><b>{{ heritageObject_data.title }}</b></p>
      <p class="cho-catalog-item__type">{{ heritageObject_data.type }}</p>
      <p class="cho-catalog-item__construction"><i>{{ heritageObject_data.construction }}</i></p>
      <p class="cho-catalog-item__number_of_storeys">Этажей: {{ heritageObject_data.number_of_storeys }}</p>
      <p class="cho-catalog-item__condition">Состояние: {{ heritageObject_data.condition }}</p>
      <p class="cho-catalog-item__appearance">Внешний вид: {{ heritageObject_data.appearance }}</p>
      <p class="cho-catalog-item__human_influence">Влияние человека: {{ heritageObject_data.human_influence }}</p>

      <p class="cho-catalog-item__construction_period"><b>{{ heritageObject_data.construction_period }}</b></p>
      <p class="cho-catalog-item__adress">{{ heritageObject_data.address }}</p> -->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'cho-catalog-item',
    components: {},
    props: {
      heritageObject_data: {
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
    methods: {},
    watch: {}
  }
</script>

<style lang="scss">
  .cho-catalog-item {
    width: 350px;
    height: 140px;
    flex-basis: 15%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: $margin*2;

    text-align: left;
    &__image {
      width: 350px;
    }
    &__description {
      padding: $padding*2;
    }
  }

  a {
    text-decoration: none;
  }
</style>
