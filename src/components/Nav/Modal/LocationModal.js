import React from 'react';
import styled from 'styled-components';

const LocationModal = () => {
  return (
    <LocationModalLayout
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <LocationModalBox>
        <LocationTit>언제 어디로든 떠나는 여행</LocationTit>
        <LocationInput></LocationInput>
      </LocationModalBox>
    </LocationModalLayout>
  );
};

export default LocationModal;

const LocationModalLayout = styled.div`
  position: relative;
`;

const LocationModalBox = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 166px;
  top: -26px;
  left: -35px;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const LocationTit = styled.div``;

const LocationInput = styled.input``;
