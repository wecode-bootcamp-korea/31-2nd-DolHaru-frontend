import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StaylistSlider from '../StaylistImgSlider/StaylistSlider';

const Placelist = ({
  placelist: {
    stayId,
    placeImages,
    description,
    placeName,
    adult,
    kid,
    pet,
    bed,
    bedRoom,
    bathRoom,
    stayService,
    price,
  },
}) => {
  const navigate = useNavigate();
  return (
    <PlacelistContainer>
      <PlaceImg>
        <StaylistSlider images={placeImages} />
      </PlaceImg>
      <PlaceTextlist>
        <PlaceDesc>
          <div>
            <Desc>{description}</Desc>
            <Desc
              onClick={() => {
                navigate(`/staydetail/${stayId}`);
              }}
            >
              {placeName}
            </Desc>
            <div />
          </div>
          <button>
            <FavoriteBorderIcon />
          </button>
        </PlaceDesc>
        <Options>
          <span>최대 인원 {adult + kid + pet}명</span>
          <span> · </span>
          <span>침실 {bedRoom}개</span>
          <span> · </span>
          <span>침대 {bed}개</span>
          <span> · </span>
          <span>욕실 {bathRoom}개</span>
        </Options>
        <Options>
          <span>{stayService.join('·')}</span>
        </Options>
        <Price>
          <div>$ {Number(price).toLocaleString()} / 박</div>
        </Price>
      </PlaceTextlist>
    </PlacelistContainer>
  );
};

export default Placelist;

const PlacelistContainer = styled.div`
  display: flex;
  width: 95%;
  height: 250px;
  align-items: center;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.mainWhite};
  border-bottom: 1px solid #dbdbdb;
`;

const PlaceImg = styled.div`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const PlaceTextlist = styled.div`
  width: 500px;
  height: 200px;
  background-color: #fff;
`;

const PlaceDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
  height: 70px;
  background-color: ${({ theme }) => theme.mainWhite};

  div {
    font-size: ${({ theme }) => theme.fontMicro};
    color: #737373;

    &:nth-child(2) {
      height: 40px;
      font-size: ${({ theme }) => theme.fontRegular};
      color: #000;
    }
    &:last-child {
      width: 32px;
      height: 10px;
      margin: 0 0 10px 10px;
      border-bottom: 1px solid #dbdbdb;
      background-color: ragb(0, 0, 0, 0);
    }
  }

  button {
    width: 30px;
    height: 30px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.mainWhite};
  cursor: pointer;

  &:last-child {
    height: 25px;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  padding-left: 10px;
  padding-top: 10px;
  color: #737373;
  background-color: ${({ theme }) => theme.mainWhite};
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;
  margin-right: 30px;
`;
