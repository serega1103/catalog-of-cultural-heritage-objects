<template>
  <div class="cho-main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
// import choCatalog from './cho-catalog'

  export default {
    name: 'cho-main-wrapper',
    components: {},
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
