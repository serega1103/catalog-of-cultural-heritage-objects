<template>
  <div class="cho-map">
    <router-link :to="{ name: 'catalog', params: {} }">
      <p>Go to Catalog</p>
    </router-link>
    <div ref="choMapContainer" id="cho-map-container"></div>
  </div>
</template>

<script type="text/javascript">
  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'

  // FIX Leaflet's default icon path problems with webpack
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  export default {
    name: 'cho-map',
    components: {},
    props: {},
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'MAPMARKERS'
      ]),
      ...mapState(['mapInstance', 'mapMarkers'])
    },
    methods: {
      ...mapActions([
        'GET_MAPMARKERS_FROM_API'
      ]),
      ...mapMutations(['SET_MAP_INSTANCE']),
      createMapInstance() {
        const map = L.map(this.$refs.choMapContainer, { preferCanvas: true }).setView([51.505, -0.09], 13);
        const mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
        map.addLayer(mapLayer)
        return map
      },
      renderMap() {
        this.SET_MAP_INSTANCE(this.createMapInstance())
      },
      removeMarkers() {
        if (this.mapInstance) {
          for (const marker of this.mapMarkers) {
            this.mapInstance.removeLayer(marker)
          }
        }
      },
      addMarkers() {
        if (this.mapInstance) {
          for (const mapMarker of this.mapMarkers) {
            const marker = L.marker(new L.LatLng(mapMarker.latitude, mapMarker.longitude), { title: mapMarker.city })
            this.mapInstance.addLayer(marker)
          }
        }
      }
    },
    watch: {
      mapMarkers () {
        this.removeMarkers()
        this.addMarkers()
      }
    },
    mounted() {
      this.GET_MAPMARKERS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('MapMarkers arrived!')
        }
      })
      this.renderMap();
    },
    beforeDestroy() {
      if (this.mapInstance) {
        this.mapInstance.remove()
        this.SET_MAP_INSTANCE(null)
      }
    }
  }
</script>

<style>
  #cho-map-container {
    width: 1440px;
    height: 900px;
  }
</style>
