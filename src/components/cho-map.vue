<template>
  <div class="cho-map">
    <router-link :to="{ name: 'catalog', params: {} }">
      <p>Go to Catalog</p>
    </router-link>
    <div ref="choMapContainer" id="cho-map-container"></div>
  </div>
</template>

<script type="text/javascript">
  import { mapActions, mapMutations, mapState } from 'vuex'
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
    props: {
      heritageObject_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        mapMarkers: [
          {"id": 2, "lat": 53.20014684699569,"lon": 45.02100794652688,"city":"Las Matas de Santa Cruz",
          "polygon": [
            [79.07181, -100.63477],
            [79.06348, -90.43945],
            [77.52312, -90.52734],
            [77.50412, -94.21875],
            [77.41825, -94.35059],
            [77.40868, -96.72363],
            [77.51362, -96.81152],
            [77.53261, -100.63477]
          ]
          }
        ]
      }
    },
    computed: {
      // ...mapGetters([
      //   'MAPMARKERS'
      // ]),
      ...mapState(['mapInstance'])
      // ...mapState(['mapInstance', 'mapMarkers'])
    },
    methods: {
      ...mapActions([
        'GET_MAPMARKERS_FROM_API'
      ]),
      ...mapMutations(['SET_MAP_INSTANCE']),
      createMapInstance() {
        const map = L.map(this.$refs.choMapContainer, { preferCanvas: true }).setView([53.20024921222899, 45.021507950982425], 30);
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
        // if (this.mapInstance) {
        //   for (const marker of this.mapMarkers) {
        //     this.mapInstance.removeLayer(marker)
        //   }
        // }
      },
      addMarkers() {
        // if (this.mapInstance) {
        //   for (const mapMarker of this.mapMarkers) {
        //   const marker = L.Polygon([
        //     [53.20014, 45.02100],
        //     [53.200124468081526, 45.02123951782364],
        //     [53.19998789821103, 45.02120666076445],
        //     [53.20000958874892, 45.02097397914123],
        //     [53.20014684699569, 45.02100794652688]
        //   ], {'label': "MyLabel", 'popup': "MyContent", 'otherStuff': 'abc123'})
        //   this.mapInstance.addLayer(marker)
        //   }
        // }
        // if (this.mapInstance) {
        //   for (const mapMarker of this.mapMarkers) {
        //     const marker = L.marker(new L.LatLng(mapMarker.latitude, mapMarker.longitude), { title: mapMarker.city })
        //     this.mapInstance.addLayer(marker)
        //   }
        //   for (const mapMarker of this.mapMarkers) {
        //     const marker = L.marker([53.20014, 45.02100], { title: mapMarker.city })
        //     this.mapInstance.addLayer(marker)
        //   }
        // }
      }
    },
    watch: {
      mapMarkers () {
        this.removeMarkers()
        this.addMarkers()
      }
    },
    mounted() {
      // this.GET_MAPMARKERS_FROM_API()
      // .then((response) => {
      //   if (response.data) {
      //     console.log('MapMarkers arrived!')
      //   }
      // })
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
