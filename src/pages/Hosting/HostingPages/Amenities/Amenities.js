import React, { useState } from 'react';
import styled from 'styled-components';
import AmenitiesOption from './AmenitiesOption';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PoolIcon from '@mui/icons-material/Pool';
import HotTubIcon from '@mui/icons-material/HotTub';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

function Amenities({ newStayInfo }) {
  const [amenities, setAmenities] = useState([]);
  const [services, setServices] = useState([]);

  const changeAmenityOptions = id => {
    if (amenities.includes(id)) {
      let newAmenityOption = amenities.filter(number => number !== id);
      setAmenities(newAmenityOption);
    } else {
      setAmenities([...amenities, id]);
    }
  };

  const changeServiceOptions = id => {
    if (services.includes(id)) {
      let newServiceOptions = services.filter(number => number !== id);
      setServices(newServiceOptions);
    } else {
      setServices([...services, id]);
    }
  };

  const handleOptions = (category, id) => {
    if (category === 'amenities') {
      changeAmenityOptions(id);
    } else if (category === 'services') {
      changeServiceOptions(id);
    }
  };

  newStayInfo.amenities = amenities;
  newStayInfo.services = services;

  return (
    <PageContainer>
      <OptionsContainer>
        <OptionContainer>
          <OptionTitle>특별히 내세울 만한 편의시설이 있나요?</OptionTitle>
          <Options>
            {AMENITIY_OPTIONS.map(({ id, text, icon, category }) => {
              return (
                <AmenitiesOption
                  key={id}
                  id={id}
                  text={text}
                  icon={icon}
                  category={category}
                  handleOptions={handleOptions}
                  checkArr={amenities}
                />
              );
            })}
          </Options>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>다음 인기 편의시설이 있나요?</OptionTitle>
          <Options>
            {SERVICE_OPTIONS.map(({ id, text, icon, category }) => {
              return (
                <AmenitiesOption
                  key={id}
                  id={id}
                  text={text}
                  icon={icon}
                  category={category}
                  handleOptions={handleOptions}
                  checkArr={services}
                />
              );
            })}
          </Options>
        </OptionContainer>
      </OptionsContainer>
    </PageContainer>
  );
}

export default Amenities;

const AMENITIY_OPTIONS = [
  { id: 1, text: '무선 인터넷', icon: <CellWifiIcon />, category: 'amenities' },
  {
    id: 2,
    text: '주방',
    icon: <KitchenIcon />,
    category: 'amenities',
  },
  {
    id: 3,
    text: '주차장',
    icon: <DirectionsCarIcon />,
    category: 'amenities',
  },
];

const SERVICE_OPTIONS = [
  { id: 1, text: '수영장', icon: <PoolIcon />, category: 'services' },
  {
    id: 2,
    text: '자쿠지',
    icon: <HotTubIcon />,
    category: 'services',
  },
  {
    id: 3,
    text: '바베큐',
    icon: <OutdoorGrillIcon />,
    category: 'services',
  },
];

const PageContainer = styled.div`
  height: 100vh;
  margin: 0;
`;

const OptionsContainer = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  transform: translateY(50%);
`;

const OptionContainer = styled.div`
  margin-bottom: 20px;
`;

const OptionTitle = styled.h2`
  margin-bottom: 15px;
  padding-left: 8px;
  font-size: ${({ theme }) => theme.fontSemiMedium};
`;

const Options = styled.div`
  display: flex;
`;
