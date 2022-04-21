import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StaylistFilterTab from './StaylistFilter/StaylistFilterTab';
import Placelist from './StaylistPlace/Placelist';
import StayMap from './StaylistMap/StayMap';
import Buttons from './StaylistPagination/Buttons';
import styled from 'styled-components';
import StayModal from './StaylistFilter/StayModal';

const LIMIT = 12;

const Staylist = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [clickedList, setClickedList] = useState([]);
  const [buttonNum, setButtonNum] = useState(1);
  const [myUrl, setMyUrl] = useState('http://dolharu.com');

  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef = useRef();

  useEffect(() => {
    fetch(
      `/data/PlaceList.json${location.search || `?limit=${LIMIT}}&offset=0`}`
    )
      .then(res => res.json())
      .then(data => setPlaceList(data));
  }, [location.search]);

  const updateUrl = (category, value) => {
    const newUrl = `${category}=${value}`;
    myUrl.split('')[myUrl.length - 1] === '?'
      ? setMyUrl(myUrl + newUrl)
      : setMyUrl(myUrl + '&' + newUrl);
  };

  const filterUrl = (category, value) => {
    const deletedUrl = `${category}=${value}`;
    const filteredUrl = myUrl
      .split('&')
      .filter(item => item !== deletedUrl)
      .map((item, idx) => {
        return idx === 0 ? item : '&' + item;
      })
      .join('');
    setMyUrl(filteredUrl);
  };

  const updateOffset = ({ buttonIndex, number }) => {
    const offset = buttonIndex * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    setButtonNum(number);
    navigate(queryString);
  };

  const openModal = () => {
    setIsClicked(!isClicked); // 저장되어 있는 값의 반대값
  };

  return (
    <StaylistContainer>
      <StaylistMenu>
        <StaylistFilter>
          <div>
            {/* <PriceModal pricetype={PRICE_TYPE} /> */}
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
                clickedList.includes(name)
                  ? filterUrl(category, value)
                  : updateUrl(category, value);
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

// const PRICE_TYPE = {
//   stayTypeId: 1,
//   name: '요금',
//   category: 'cost',
//   contents: ['max', 'min'],
// };

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
  value: [1, 2, 3],
};

const FILTER_LIST = [
  {
    filterId: 1,
    name: '수영장',
    category: 'amenities',
    value: 1,
  },
  {
    filterId: 2,
    name: '자쿠지',
    category: 'amenities',
    value: 2,
  },
  {
    filterId: 3,
    name: '바베큐',
    category: 'amenities',
    value: 3,
  },
  {
    filterId: 4,
    name: '무선 인터넷',
    category: 'services',
    value: 1,
  },
  {
    filterId: 5,
    name: '주방',
    category: 'services',
    value: 2,
  },
  {
    filterId: 6,
    name: '주차장',
    category: 'services',
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
  width: 53%;
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
  width: 47%;
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
