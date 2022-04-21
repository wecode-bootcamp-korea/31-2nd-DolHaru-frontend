/*global kakao*/
import React, { useEffect } from 'react';

const Map = ({ latitude, longitude }) => {
  useEffect(() => {
    let mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 2,
      };
    let map = new kakao.maps.Map(mapContainer, mapOption);

    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);

    let markerPosition = new kakao.maps.LatLng(latitude, longitude);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, [latitude, longitude]);

  return <div id="map" style={{ width: '60vw', height: '60vh' }} />;
};
export default Map;
