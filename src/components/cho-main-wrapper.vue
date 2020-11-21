<template>
  <div class="cho-main-wrapper">
    <!--<cho-catalog />-->
    <cho-map />
  </div>
</template>

<script type="text/javascript">
//import choCatalog from './cho-catalog'
import choMap from './cho-map'

  export default {
    name: 'cho-main-wrapper',
    components: {
      //choCatalog,
      choMap
    },
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
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
