import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ImgContainer from './ImgContainer/ImgContainer';
import Reservation from './Reservation/Reservation';
import Map from './Map/Map';
import Facilities from './Facilities/Facilities';
import RoomRule from './RoomRule/RoomRule';
import {
  FaStar,
  FaMedal,
  FaShareSquare,
  FaRegHeart,
  FaDoorClosed,
  FaLocationArrow,
} from 'react-icons/fa';
import API from './../../config';

const Staydetail = () => {
  const [roomdetail, setRoomdetail] = useState({});
  const {
    title,
    address,
    placeImages,
    hostName,
    stayType,
    bedRoom,
    bed,
    bathRoom,
    maxAdult,
    maxKid,
    maxPet,
    description,
    services,
    amenities,
    latitude,
    longitude,
  } = roomdetail;
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`${API.stays}/${id}`)
      .then(res => res.json())
      .then(data => setRoomdetail(data.result));
  }, [id]);
  return (
    <Container>
      <RoomName>
        <p>{title}</p>
      </RoomName>
      <RoomInfoBox>
        <RoomIntroduce>
          <RoomInfoItem>
            <FaStar />
            <Roomintro>4.94</Roomintro>
            <RoomInfo>후기 256개</RoomInfo>
            <FaMedal />
            <Roomintro>슈퍼호스트</Roomintro>
            <Roomintro>{address}</Roomintro>
          </RoomInfoItem>
          <RoomInfoItem>
            <StayIcon>
              <FaShareSquare />
            </StayIcon>
            <Roomintro>공유하기</Roomintro>
            <StayIcon>
              <FaRegHeart />
            </StayIcon>
            <span>저장</span>
          </RoomInfoItem>
        </RoomIntroduce>
      </RoomInfoBox>
      <ImgContainer placeImages={placeImages} />
      <Main>
        <Aside>
          <Section>
            <SpaceCenter>
              <div>
                <HostName>
                  {hostName}님이 호스팅하는&nbsp;{stayType}
                </HostName>
                <p>
                  최대인원 {maxAdult + maxKid + maxPet} 명· 침실 {bedRoom}개·
                  침대 {bed}개 · 욕실 {bathRoom}개
                </p>
              </div>
              <StayhostContainer>
                <StayHost
                  alt="hostProfile"
                  src="/images/Staydetail/userprofile.jpg"
                />
              </StayhostContainer>
            </SpaceCenter>
          </Section>
          <Section>
            <SmallSection>
              <HostIcon>
                <FaDoorClosed />
              </HostIcon>
              <LineInterval>
                <SecondLetter>셀프체크인</SecondLetter>
                <ThirdLetter>키패드를 이용해 체크인하세요.</ThirdLetter>
              </LineInterval>
            </SmallSection>
            <SmallSection>
              <HostIcon>
                <FaMedal />
              </HostIcon>
              <LineInterval>
                <SecondLetter> {hostName}님은 슈퍼호스트입니다.</SecondLetter>
                <ThirdLetter>
                  슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                  편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                </ThirdLetter>
              </LineInterval>
            </SmallSection>
            <SmallSection>
              <HostIcon>
                <FaLocationArrow />
              </HostIcon>
              <LineInterval>
                <SecondLetter>훌륭한 숙소 위치</SecondLetter>
                <ThirdLetter>
                  최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
                </ThirdLetter>
              </LineInterval>
            </SmallSection>
          </Section>

          <Section>
            <RoomDescripton>{description}</RoomDescripton>
          </Section>
          <Facilities services={services} amenities={amenities} />
          <RoomRule />
        </Aside>
        <Reservation />
      </Main>
      <Map latitude={latitude} longitude={longitude} />
    </Container>
  );
};

export default Staydetail;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Main = styled.div`
  display: flex;
`;

const Aside = styled.div`
  width: 60%;
`;
const RoomName = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
`;

const RoomInfoBox = styled.div`
  margin-bottom: 20px;
`;

const RoomIntroduce = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoomInfoItem = styled.p`
  display: inline;
  padding-right: 10px;
`;

const Roomintro = styled.span`
  margin-right: 10px;
`;

const RoomInfo = styled.span`
  margin-right: 20px;
`;

const StayIcon = styled.span`
  margin-right: 5px;
`;

const Section = styled.div`
  border: none;
  border-bottom: solid 1px #bfcace;
  margin-top: 10px;
`;

const SpaceCenter = styled.div`
  display: flex;
  ${({ theme }) => theme.flexBox('', 'center', 'space-between')};
  margin-top: 48px;
  padding-bottom: 24px;
  width: 700px;
`;
const HostName = styled.div`
  font-size: 22px;
  padding-bottom: 10px;
`;

const StayhostContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;

const StayHost = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallSection = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'flex-start')}
  margin-bottom: 10px;
`;
const LineInterval = styled.div`
  line-height: 25px;
  padding-top: 10px;
`;
const SecondLetter = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const ThirdLetter = styled.div`
  font-size: 14px;
`;

const HostIcon = styled.div`
  font-size: 28px;
  margin-right: 15px;
`;

const RoomDescripton = styled.div`
  line-height: 25px;
  padding: 30px 0px 30px 0px;
`;
