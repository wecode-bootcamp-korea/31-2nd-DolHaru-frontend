/*global kakao*/
import React, { useEffect } from 'react';

const StayMap = ({ fetchData }) => {
  useEffect(() => {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 마커를 표시합니다

    const displayMarker = data => {
      const markerPosition = new kakao.maps.LatLng( //마커 포지션 띄우기
        data.latitude,
        data.longitude
      );

      new kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });

      const content = `<div style="padding: 11px 14px;
      position: relative; left: 70px; bottom:50px; border-radius: 28px; background-color: rgb(255, 255, 255);
      box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
      color: rgb(34, 34, 34); text-align:center;
      font-size: 14px;
      font-weight: 880;"> $ ${Number(data.price).toLocaleString()}</div>`;

      new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: markerPosition,
      });
    };

    fetchData.map(data => {
      return displayMarker(data);
    });

    // let content =
    //   '<div class="wrap">' +
    //   '    <div class="info">' +
    //   '        <div class="title">' +
    //   '            카카오 스페이스닷원' +
    //   '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    //   '        </div>' +
    //   '        <div class="body">' +
    //   '            <div class="img">' +
    //   '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
    //   '           </div>' +
    //   '            <div class="desc">' +
    //   '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
    //   '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
    //   '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
    //   '            </div>' +
    //   '        </div>' +
    //   '    </div>' +
    //   '</div>';

    // let overlay = new kakao.maps.CustomOverlay({
    //   content: content,
    //   map: map,
    //   position: marker.getPosition(),
    // });

    // // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    // kakao.maps.event.addListener(marker, 'click', function () {
    //   overlay.setMap(map);
    // });

    // // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
    // function closeOverlay() {
    //   overlay.setMap(null);
    // }

    // for (let i = 0; i < positions.length; i++) {
    //   // 마커를 생성합니다
    //   let marker = new kakao.maps.Marker({
    //     map: map, // 마커를 표시할 지도
    //     position: positions[i].latlng, // 마커의 위치
    //   });

    //   // 마커에 표시할 인포윈도우를 생성합니다
    //   let infowindow = new kakao.maps.InfoWindow({
    //     content: positions[i].content, // 인포윈도우에 표시할 내용
    //   });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    // kakao.maps.event.addListener(
    //   marker,
    //   'mouseover',
    //   makeOverListener(map, marker, infowindow)
    // );
    // kakao.maps.event.addListener(
    //   marker,
    //   'mouseout',
    //   makeOutListener(infowindow)
    // );

    // // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    // function makeOverListener(map, marker, infowindow) {
    //   return function () {
    //     infowindow.open(map, marker);
    //   };
    // }

    // // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    // function makeOutListener(infowindow) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }

    // 지도에 확대 축소 컨트롤을 생성한다
    let zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default StayMap;
