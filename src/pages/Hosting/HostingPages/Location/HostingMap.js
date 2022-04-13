/*global kakao*/
import React, { useEffect } from 'react';

const HostingMap = ({ address, setIsOpen, newStayInfo, isOpen }) => {
  useEffect(() => {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826004661, 126.978652258309), // 지도의 중심좌표
        level: 2,
      };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);

    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        let searchedPlace;
        searchedPlace =
          result[0].road_address === null
            ? (searchedPlace = result[0].address_name)
            : result[0].address_name +
              ' ' +
              result[0].road_address.building_name;

        let infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:7px 12px; font-size:14px; line-height:17px;">${searchedPlace}</div>`,
        });
        infowindow.open(map, marker);
        map.setCenter(coords);

        newStayInfo.latitude = result[0].y;
        newStayInfo.longitude = result[0].x;
        newStayInfo.address = searchedPlace;

        kakao.maps.event.addListener(marker, 'click', function () {
          setIsOpen();
        });
      } else if (address) {
        alert('검색 결과가 없습니다! 다시 검색해 주세요');
        setIsOpen();
      }
    });
  }, [address, isOpen, setIsOpen, newStayInfo]);

  return <div id="map" style={{ width: '50vw', height: '100vh' }} />;
};

export default HostingMap;
