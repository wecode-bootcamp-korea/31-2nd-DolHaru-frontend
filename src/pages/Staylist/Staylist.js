import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StaylistFilterTab from './StaylistFilter/StaylistFilterTab';
import Placelist from './StaylistPlace/Placelist';
import StayMap from './StaylistMap/StayMap';
import Buttons from './StaylistPagination/Buttons';
import styled from 'styled-components';
import StayModal from './StaylistFilter/StayModal';
import API from './../../config';

const LIMIT = 12;
const qsArr = [];

const Staylist = () => {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [clickedList, setClickedList] = useState([]);
  const [buttonNum, setButtonNum] = useState(1);
  const [offsetNumber, setOffsetNumber] = useState(0);
  const navigate = useNavigate();
  const buttonRef = useRef();

  useEffect(() => {
    fetch(
      `${API.stays}${
        location.search ? location.search + '&' : '?'
      }limit=${LIMIT}&offset=${offsetNumber}`
    )
      .then(res => res.json())
      .then(data => setPlaceList(data.stay_list));
  }, [location.search, offsetNumber]);

  const updateUrl = (category, value) => {
    const queryString = `${category}=${value}`;
    qsArr.push(queryString);
    const newQueryString = qsArr.join('&');
    navigate(
      `/user/staylist?${newQueryString}&limit=${LIMIT}&offset=${offsetNumber}`
    );
  };

  const filterUrl = (category, value) => {
    const deletedUrl = `${category}=${value}`;
    const index = qsArr.indexOf(deletedUrl);
    qsArr.splice(index, 1);
    const newQueryString = qsArr.join('&');
    navigate(`/user/staylist?${newQueryString}`);
  };

  const updateOffset = ({ buttonIndex, number }) => {
    setOffsetNumber(buttonIndex * 12);
    setButtonNum(number);
  };

  const openModal = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StaylistContainer>
      <StaylistMenu>
        <StaylistFilter>
          <div>
            <TypeBtn>요금</TypeBtn>
            <TypeBtn ref={buttonRef} onClick={openModal}>
              숙소 유형
            </TypeBtn>
            {isClicked && (
              <StayModal
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                buttonRef={buttonRef}
                staytype={STAY_TYPE}
                clickedList={clickedList}
                setClickedList={setClickedList}
                updateUrl={updateUrl}
                filterUrl={filterUrl}
              />
            )}
          </div>
          {FILTER_LIST.map(({ filterId, name, category, value }) => (
            <StaylistFilterTab
              key={filterId}
              name={name}
              category={category}
              value={value}
              clickedList={clickedList}
              setClickedList={setClickedList}
              changeUrl={() => {
                if (clickedList.includes(name)) {
                  filterUrl(category, value);
                } else {
                  updateUrl(category, value);
                }
              }}
            />
          ))}
        </StaylistFilter>
      </StaylistMenu>
      <Main>
        <StayPlace>
          <StayInfo>제주도에 위치한 300개 이상의 숙소</StayInfo>
          {placeList.map(
            ({
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
            }) => {
              return (
                <Placelist
                  key={stayId}
                  placelist={{
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
                  }}
                />
              );
            }
          )}
        </StayPlace>
        <Map>
          <StayMap fetchData={placeList} />
        </Map>
      </Main>
      <PageNation>
        <Buttons updateOffset={updateOffset} buttonNum={buttonNum} />
      </PageNation>
    </StaylistContainer>
  );
};

export default Staylist;

const STAY_TYPE = {
  stayTypeId: 1,
  name: '숙소 유형',
  category: 'type',
  contents: [
    {
      contentsId: 1,
      title: '집 전체',
      description: '집 전체를 단독으로 사용합니다',
    },
    {
      contentsId: 2,
      title: '개인실',
      description:
        '침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.',
    },
    {
      contentsId: 3,
      title: '다인실',
      description:
        '사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다',
    },
  ],
};

const FILTER_LIST = [
  {
    filterId: 1,
    name: '수영장',
    category: 'amenity',
    value: 1,
  },
  {
    filterId: 2,
    name: '자쿠지',
    category: 'amenity',
    value: 2,
  },
  {
    filterId: 3,
    name: '바베큐',
    category: 'amenity',
    value: 3,
  },
  {
    filterId: 4,
    name: '무선 인터넷',
    category: 'service',
    value: 1,
  },
  {
    filterId: 5,
    name: '주방',
    category: 'service',
    value: 2,
  },
  {
    filterId: 6,
    name: '주차장',
    category: 'service',
    value: 3,
  },
];

const StaylistContainer = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StaylistMenu = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: ${({ theme }) => theme.mainWhite};
  border-bottom: 1px solid #dbdbdb;
  position: relative;
  margin-top: 80px;
`;

const StaylistFilter = styled.div`
  display: flex;
  align-items: center;
  width: 1500px;
  height: 48px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.mainWhite};
`;

const Main = styled.div`
  display: flex;
`;

const StayPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 58%;
  height: 100vh;
  background-color: ${({ theme }) => theme.mainWhite};
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StayInfo = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 50px;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.mainWhite};
  padding-left: 20px;
  border-bottom: 1px solid #dbdbdb;
`;

const Map = styled.div`
  width: 42%;
  height: 100%;
  right: 0;
  top: 0;
`;

const PageNation = styled.div`
  width: 53%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainWhite};
`;

const TypeBtn = styled.button`
  margin-right: 10px;
  background-color: ${props => props.theme.mainWhite};
  border: 1px solid ${({ isChecked }) => (isChecked ? 'black' : '#dbdbdb')};
  border-radius: 30px;
  padding: 10px 16px;
  cursor: pointer;
`;
