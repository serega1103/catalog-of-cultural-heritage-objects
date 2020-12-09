<template>
  <div class="cho-catalog-item-full">
    <router-link :to="{ name: 'catalog' }">
      <p>Go to Catalog</p>
    </router-link>
    <button @click="goBack">Back</button>
    <h1>{{ heritageObjectId }}</h1>
    <div v-if="heritageObject">
      <p>Название: <input v-model="heritageObject.name" @change="EDIT_HERITAGEOBJECT_IN_DB(heritageObject)"></p>
      <p>Описание: <input v-model="heritageObject.description" @change="EDIT_HERITAGEOBJECT_IN_DB(heritageObject)"></p>
    </div>
    <button type="button" @click="REMOVE_HERITAGEOBJECT_FROM_DB(heritageObject._id)">Delete Item</button>
  <cho-map :heritageObject_data="heritageObject"/>
  </div>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
import choMap from './cho-map'


  export default {
    name: 'cho-main-wrapper',
    components: {
      choMap
    },
    props: {
      // heritageObjectId: {
      //   type: Object,
      //   default() {
      //     return {}
      //   }
      // }
    },
    data() {
      return {
        isLoaded: false,
        heritageObjectId: this.$route.params.heritageObjectId
      }
    },
    computed: {
      ...mapGetters([
        'HERITAGEOBJECTS',
        'HERITAGEOBJECT'
      ]),
      heritageObject() {
        if (this.HERITAGEOBJECTS) {
          return this.HERITAGEOBJECT(this.heritageObjectId);
        }
        else {
          return {}
        }

      }
    },
    methods: {
      ...mapActions([
        'GET_HERITAGEOBJECTS_FROM_DB',
        'APPEND_HERITAGEOBJECT_TO_DB',
        'REMOVE_HERITAGEOBJECT_FROM_DB',
        'EDIT_HERITAGEOBJECT_IN_DB'
      ]),
      goBack() {
        this.$router.go(-1);
      }
    },
    watch: {},
    created() {

    },
    mounted() {
      this.GET_HERITAGEOBJECTS_FROM_DB()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
        }
      });
      // this.heritageObject = this.HERITAGEOBJECT(this.heritageObjectId);
      // console.log('This heritageObject: ' + this.heritageObject);
      // this.isLoaded = true;
    }
    // TO DO: Checking for saving changes by the admin
    // beforeRouteLeave(to, from, next) {
    //
    // }
  }
</script>

<style>

</style>
