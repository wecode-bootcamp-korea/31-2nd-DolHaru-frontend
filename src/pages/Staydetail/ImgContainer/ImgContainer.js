import React from 'react';
import styled from 'styled-components';

const ImgContainer = ({ placeImages }) => {
  return (
    <ImgBox>
      <MainImgBox>
        <MainImg alt="thumbnail" src={placeImages && placeImages[0]} />
      </MainImgBox>
      <SideImgBox>
        <OneImg alt="thumbnail" src={placeImages && placeImages[1]} />
        <TwoImg alt="thumbnail" src={placeImages && placeImages[2]} />
        <ThreeImg alt="thumbnail" src={placeImages && placeImages[3]} />
        <FourImg alt="thumbnail" src={placeImages && placeImages[4]} />
      </SideImgBox>
    </ImgBox>
  );
};

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  margin-top: 0px;
`;

const MainImgBox = styled.div`
  width: 50%;
`;
const MainImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 370px;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
`;

const SideImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 49%;
`;

const OneImg = styled.img`
  width: 290px;
  height: 180px;
`;

const TwoImg = styled.img`
  width: 290px;
  height: 180px;
  border-top-right-radius: 17px;
`;

const ThreeImg = styled.img`
  width: 290px;
  height: 180px;
  margin-top: 5px;
`;

const FourImg = styled.img`
  width: 290px;
  height: 180px;
  margin-top: 5px;
  border-bottom-right-radius: 17px;
`;

export default ImgContainer;
