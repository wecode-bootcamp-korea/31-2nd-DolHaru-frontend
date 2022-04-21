import React from 'react';
import styled from 'styled-components';
import {
  FaSwimmingPool,
  FaHotTub,
  FaHouseUser,
  FaFireAlt,
  FaParking,
  FaWifi,
} from 'react-icons/fa';

const Facilities = ({ services, amenities }) => {
  const addfacilities = services?.concat(amenities);

  return (
    <Section>
      <RoomService>숙소 편의시설</RoomService>
      <Ol>
        {addfacilities?.map(keyword => {
          return (
            <Li key={keyword}>
              {ICON_FOR_KEYWORD[keyword]}
              {keyword}
            </Li>
          );
        })}
      </Ol>
    </Section>
  );
};

export default Facilities;

const Section = styled.div`
  border: none;
  border-bottom: solid 1px #bfcace;
  margin-top: 10px;
`;

const RoomService = styled.div`
  font-size: 22px;
  padding-bottom: 30px;
`;

const Swim = styled(FaSwimmingPool)`
  font-size: 28px;
  margin-right: 10px;
`;

const Wifi = styled(FaWifi)`
  font-size: 28px;
  margin-right: 10px;
`;

const Kitchen = styled(FaFireAlt)`
  font-size: 28px;
  margin-right: 10px;
`;

const HotTub = styled(FaHotTub)`
  font-size: 28px;
  margin-right: 10px;
`;
const Li = styled.li`
  display: flex;
  width: 175px;
  align-items: center;
`;

const Park = styled(FaParking)`
  font-size: 28px;
  margin-right: 10px;
`;

const Bbq = styled(FaHouseUser)`
  font-size: 28px;
  margin-right: 10px;
`;

const Ol = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ICON_FOR_KEYWORD = {
  '무선 인터넷': <Wifi />,
  수영장: <Swim />,
  주방: <Kitchen />,
  자쿠지: <HotTub />,
  바베큐: <Bbq />,
  주차장: <Park />,
};
