import React from 'react';
import styled from 'styled-components';
import { GrFormNext } from 'react-icons/gr';

const LocationModal = () => {
  return (
    <LocationModalLayout
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <LocationModalBox>
        <LocationTit>언제 어디로든 떠나는 여행</LocationTit>
        <LocationInputWrap>
          <LocationInput />
          <GrFormNext size={30} />
        </LocationInputWrap>
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
  z-index: 9;
`;

const LocationTit = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 30px 0 0 30px;
`;

const LocationInputWrap = styled.div`
  border: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 30px;
  border-radius: 30px;
  width: 344px;
  height: 58px;
  padding: 0 20px;
`;

const LocationInput = styled.input`
  width: 300px;
  border: none;
  outline: none;
`;
