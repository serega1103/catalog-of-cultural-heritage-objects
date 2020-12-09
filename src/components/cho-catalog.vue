<template>
  <div class="cho-catalog">
    <router-link :to="{ name: 'map', params: {} }">
      <p>Go to Map</p>
    </router-link>
    <h1>Im a catalog</h1>
    <button type="button" @click="APPEND_HERITAGEOBJECT_TO_DB()">Add Item</button>
    <div class="cho-catalog__list">
      <!-- <router-link v-for="(heritageObject, index) in HERITAGEOBJECTS" :key="index" :to="{'/catalog/object/' + index, params: {heritageObject_data: heritageObject} }"> -->
      <router-link
        v-for="(heritageObject, index) in HERITAGEOBJECTS"
        :key="index"
        :to="{ name: 'object', params: { heritageObjectId: heritageObject._id } }">
        <cho-catalog-item :heritageObject_data="heritageObject"/>
      </router-link>
      <!-- <router-link v-for="(heritageObject, key) in HERITAGEOBJECTS" :key="key" :to="'/catalog/object/' + key">
        <div class="cho-catalog-item">
          <p>Название: <input v-model="heritageObject.name"></p>
          <p>Описание: <input v-model="heritageObject.description"></p>
          <p><b @click="deleteRow(obj._id)">X</b></p>
          <p>Название: <input v-model="obj.name" @change="editValue(obj)"></p>
          <p>Описание: <input v-model="obj.description" @change="editValue(obj)"></p>
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script type="text/javascript">
import choCatalogItem from './cho-catalog-item'
import { mapActions, mapGetters } from 'vuex'
// import axios from 'axios'

  export default {
    name: 'cho-catalog',
    components: {
      choCatalogItem
    },
    props: {},
    data() {
      return {
        heritageObject_data: null
      }
    },
    computed: {
      ...mapGetters([
        'HERITAGEOBJECTS'
      ])
    },
    methods: {
      ...mapActions([
        'GET_HERITAGEOBJECTS_FROM_DB',
        'APPEND_HERITAGEOBJECT_TO_DB',
        'REMOVE_HERITAGEOBJECT_FROM_DB',
        'EDIT_HERITAGEOBJECT_IN_DB'
      ])
      // load() {
      //   axios.get(this.host + "/test/" + this.page)
      //   .then(result => {
      //     HERITAGEOBJECTS = result.data;
      //   });
      // },
      // appendRow() {
      //   axios.post(this.host + "/test/", { name: "", description: "" })
      //   .then(result => {
      //     this.load();
      //     return result;
      //   });
      // },
      // deleteRow(id) {
      //   axios.delete(this.host + "/test/" + id)
      //   .then(result => {
      //     this.load();
      //     return result;
      //   });
      // },
      // editValue(obj) {
      //   axios.patch(this.host + "/test/" + obj._id, { name: obj.name, description: obj.description })
      //   .then(result => {
      //     this.load();
      //     return result;
      //   });
      // }
    },
    watch: {},
    mounted() {
      this.GET_HERITAGEOBJECTS_FROM_DB()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
        }
      })
      // this.load();
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
    &__add-new-item {
      padding: 0 15px 15px 15px;
      border: 1px solid black;
    }
  }
  .cho-catalog-item {
    flex-basis: 15%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: $margin*2;
  }
</style>
