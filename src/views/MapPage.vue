<template>
  <div class="map-page">
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import '@supermapgis/iclient-mapboxgl';

export default {
  name: 'MapPage',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
      const map = new mapboxgl.Map({
        container: this.$refs.mapContainer,
        style: 'https://iserver.supermap.io/iserver/services/map-mvt-China/rest/maps/China/tileFeature/vectorstyles.json?type=MapBox_GL&styleonly=true',
        center: [0, 0],
        zoom: 2,
      });

      map.on('load', () => {
        this.queryMapData(map, url);
      });
    },
    queryMapData(map, url) {
      const param = new mapboxgl.supermap.QueryByBoundsParameters({});
      new mapboxgl.supermap.QueryService(url).queryByBounds(param)
        .then((serviceResult) => {
          console.log('Query Result:', serviceResult);
        })
        .catch((error) => {
          console.error('Query Error:', error);
        });
    },
  },
};
</script>

<style scoped>
.map-page {
  width: 100%;
  height: 100%; /* 占满父容器 */
}

.map-container {
  width: 100%;
  height: 100%; /* 占满父容器 */
}
</style>