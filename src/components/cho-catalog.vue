<template>
  <div class="cho-catalog">
    <router-link :to="{ name: 'map', params: {} }">
      <p>Go to Map</p>
    </router-link>
    <h1>Im a catalog</h1>
    <!-- <div class="cho-catalog__add-new-item">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(obj, key) in table" :key="key">
            <td> <b @click="deleteRow(obj._id)">X</b> {{ (key + 1) }} </td>
            <td><input v-model="obj.name" @change="editValue(obj)"></td>
            <td><input v-model="obj.description" @change="editValue(obj)"></td>
          </tr>
        </tbody>
      </table>
      <button type="button" @click="appendRow()">Add Item</button>
    </div> -->
    <button type="button" @click="appendRow()">Add Item</button>
    <div class="cho-catalog__list">
      <div v-for="(obj, key) in table" :key="key" class="cho-catalog-item">
        <p><b @click="deleteRow(obj._id)">X</b></p>
        <p>Название: <input v-model="obj.name" @change="editValue(obj)"></p>
        <p>Описание: <input v-model="obj.description" @change="editValue(obj)"></p>
      </div>

      <!-- TO DO: Catalog Item Component with VueX -->
      <!-- <cho-catalog-item
        v-for="heritageObject in HERITAGEOBJECTS"
        :key="heritageObject.title"
        :heritageObject_data="heritageObject"
        @sendTitle="showChildTitleInConsole"
      /> -->
    </div>
  </div>
</template>

<script type="text/javascript">
// import choCatalogItem from './cho-catalog-item'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import axios from 'axios'

  export default {
    name: 'cho-catalog',
    components: {
      // choCatalogItem
    },
    props: {},
    data() {
      return {
        host: "http://127.0.0.1:3000",
        page: 1,
        table: []
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
        'CREATE_ITEM'
      ]),
      ...mapMutations([
        'SET_FORM_TO_STATE'
      ]),
      // _SET_FORM_TO_STATE(event) {
      //   this.SET_FORM_TO_STATE({
      //     key: 'item',
      //     value: event.target.value
      //   });
      // },
      // _submitItem(event) {
      //   event.preventDefault();
      //   this.CREATE_ITEM();
      // },
      load() {
        axios.get(this.host + "/test/" + this.page)
        .then(result => {
          this.table = result.data;
        });
      },
      appendRow() {
        axios.post(this.host + "/test/", { name: "", description: "" })
        .then(result => {
          this.load();
          return result;
        });
      },
      deleteRow(id) {
        axios.delete(this.host + "/test/" + id)
        .then(result => {
          this.load();
          return result;
        });
      },
      editValue(obj) {
        axios.patch(this.host + "/test/" + obj._id, { name: obj.name, description: obj.description })
        .then(result => {
          this.load();
          return result;
        });
      }
    },
    watch: {},
    mounted() {
      this.load();
      // this.GET_HERITAGEOBJECTS_FROM_API()
      // .then((response) => {
      //   if (response.data) {
      //     console.log('Data arrived!')
      //   }
      // })
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
