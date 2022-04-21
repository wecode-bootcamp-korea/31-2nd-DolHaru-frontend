import React from 'react';
import styled from 'styled-components';

const ImgContainer = ({ placeImages }) => {
  return (
    <ImgBox>
      <MainImgBox>
        <MainImg alt="thumbnail" src={placeImages && placeImages[0]} />
      </MainImgBox>
      <SideImgBox>
        <SideImage>
          <OneImg alt="thumbnail" src={placeImages && placeImages[1]} />
        </SideImage>
        <SideImage>
          <TwoImg alt="thumbnail" src={placeImages && placeImages[2]} />
        </SideImage>
        <SideImage>
          <ThreeImg alt="thumbnail" src={placeImages && placeImages[3]} />
        </SideImage>
        <SideImage>
          <FourImg alt="thumbnail" src={placeImages && placeImages[4]} />
        </SideImage>
      </SideImgBox>
    </ImgBox>
  );
};

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 370px;
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

const SideImage = styled.div`
  width: 290px;
  height: 180px;
`;

const OneImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TwoImg = styled.img`
  border-top-right-radius: 17px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThreeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 5px;
`;

const FourImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 5px;
  border-bottom-right-radius: 17px;
`;

export default ImgContainer;
