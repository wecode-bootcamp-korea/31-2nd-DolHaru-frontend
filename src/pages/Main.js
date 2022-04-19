import React from 'react';
import Card from './CardComponents/Card';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainLayout>
      <MainBox>
        <MainWrap>
          <MainContent>
            <ContentText>
              위코드에서의 마지막 추억을 돌하룻밤에서 보내세요. <br />
              모두 고생하셨습니다 또 만나요.
            </ContentText>
            <ContentBtn>자세히 알아보기</ContentBtn>
          </MainContent>
          <MainImg
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="main"
          />
          <MainText>호기심을 자극하는 제주로 떠나보세요</MainText>
          <MainBtn>
            <div>유연한 검색</div>
          </MainBtn>
        </MainWrap>
        <CardImgTit>설레는 다음 여행을 위한 아이디어</CardImgTit>
        <FlexBox>
          {CARD_LIST.map(({ id, name, distance, imageUrl }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                distance={distance}
                imageUrl={imageUrl}
              />
            );
          })}
        </FlexBox>
        <ActivityTit>돌하룻밤 체험 둘러보기</ActivityTit>
        <ActivityImgGroups>
          <ActivityImgBoxL>
            <ActivityImgL
              src="https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="Activity"
            />
            <ActivityImgTextL>
              여행중 만나는 <br /> 이색적인 즐길거리
            </ActivityImgTextL>
            <ActivityBtnL>체험</ActivityBtnL>
          </ActivityImgBoxL>
          <ActivityImgBoxR>
            <ActivityImgR
              src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1536&q=80"
              alt="Activity"
            />
            <ActivityImgTextR>
              제주에서 만나는 <br /> 다양한 즐길거리
            </ActivityImgTextR>
            <ActivityBtnR>온라인 체험</ActivityBtnR>
          </ActivityImgBoxR>
        </ActivityImgGroups>
        <HostingBox>
          <HostingImg
            src="https://images.unsplash.com/photo-1529458905433-59518f7f4ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Hosting"
          />
          <HostingText>
            호스팅에 관해 <br />
            궁금하신 점이 <br />
            있나요?
          </HostingText>
          <HostingBtn>슈퍼호스트에게 물어보세요</HostingBtn>
        </HostingBox>
      </MainBox>
    </MainLayout>
  );
};

export default Main;

const CARD_LIST = [
  {
    id: 1,
    name: '서울',
    distance: '2km 거리',
    imageUrl: '/images/Main/1번.png',
  },
  {
    id: 2,
    name: '인천',
    distance: '29km 거리',
    imageUrl: '/images/Main/2번.png',
  },
  {
    id: 3,
    name: '대구',
    distance: '237km 거리',
    imageUrl: '/images/Main/3번.png',
  },
  {
    id: 4,
    name: '대전',
    distance: '140km 거리',
    imageUrl: '/images/Main/4번.png',
  },
];

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 960px;
  margin: 0;
  background-color: black;
  background: linear-gradient(black 100%, #ffffff 50%);
`;

const MainBox = styled.div``;

const MainWrap = styled.div`
  position: relative;
`;

const MainImg = styled.img`
  position: relative;
  width: 1300px;
  margin-top: 100px;
  border-radius: 20px;
`;

const MainText = styled.div`
  position: absolute;
  width: 100%;
  bottom: 200px;
  left: 20%;
  color: ${({ theme }) => theme.mainWhite};
  font-size: 50px;
  font-weight: ${({ theme }) => theme.weightBold};
`;

const MainBtn = styled.div`
  position: absolute;
  width: 161px;
  height: 51px;
  bottom: 100px;
  left: 50%;
  padding: 16px;
  transform: translateX(-50%);
  border-radius: 22px;
  background-color: ${({ theme }) => theme.mainWhite};
  color: purple;
  text-align: center;
  font-weight: 800;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.mainWhite};
    background-color: #333;
    opacity: 0.7;
  }
`;

const CardImgTit = styled.div`
  padding: 70px 35px 50px 0;
  color: black;
  font-size: 40px;
  font-weight: ${({ theme }) => theme.weightBold};
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActivityTit = styled.div`
  padding: 80px 35px 50px 0;
  color: black;
  font-size: 40px;
  font-weight: ${({ theme }) => theme.weightBold};
`;

const ActivityImgGroups = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActivityImgBoxL = styled.div`
  position: relative;
`;

const ActivityImgL = styled.img`
  position: relative;
  width: 640px;
  height: 800px;
  border-radius: 30px;
`;

const ActivityImgTextL = styled.div`
  position: absolute;
  top: 0;
  padding: 60px;
  color: ${({ theme }) => theme.mainWhite};
  font-size: 50px;
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: 1.2;
`;

const ActivityBtnL = styled.div`
  position: absolute;
  width: 80px;
  height: 48px;
  top: 210px;
  left: 60px;
  padding: 14px;
  color: black;
  background-color: ${({ theme }) => theme.mainWhite};
  border-radius: 10px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weightBold};
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.mainWhite};
    background-color: #333;
  }
`;

const ActivityImgBoxR = styled.div`
  position: relative;
`;

const ActivityImgR = styled.img`
  width: 640px;
  height: 800px;
  margin-bottom: 100px;
  border-radius: 30px;
`;

const ActivityImgTextR = styled.div`
  position: absolute;
  padding: 60px;
  top: 0;
  color: ${({ theme }) => theme.mainWhite};
  font-size: 50px;
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: 1.2;
`;

const ActivityBtnR = styled.div`
  position: absolute;
  width: 130px;
  height: 48px;
  top: 210px;
  left: 60px;
  padding: 14px;
  background-color: ${({ theme }) => theme.mainWhite};
  border-radius: 10px;
  color: black;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weightBold};
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.mainWhite};
    background-color: #333;
  }
`;

const HostingBox = styled.div`
  position: relative;
`;

const HostingImg = styled.img`
  width: 100%;
  border-radius: 30px;
`;

const HostingText = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
  color: ${({ theme }) => theme.mainWhite};
  font-size: 90px;
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: 100px;
`;

const HostingBtn = styled.div`
  position: absolute;
  width: 243px;
  height: 48px;
  right: 110px;
  bottom: 110px;
  padding: 14px;
  background-color: ${({ theme }) => theme.mainWhite};
  border-radius: 10px;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weightBold};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

const MainContent = styled.div`
  position: relative;
  ${({ theme }) => theme.flexBox}
  width: 100%;
  height: 340px;
  margin-top: 50px;
  background-color: #ff385c;
  color: ${({ theme }) => theme.mainWhite};
  border-radius: 20px;
`;

const ContentText = styled.div`
  margin-bottom: 20px;
  color: white;
  font-size: 38px;
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: 58px;
  text-align: center;
`;

const ContentBtn = styled.div`
  position: absolute;
  width: 130px;
  bottom: 60px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.mainWhite};
  border-radius: 6px;
  color: ${({ theme }) => theme.mainWhite};
  font-size: 13px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.mainWhite};
    background-color: #505050;
    opacity: 0.8;
  }
`;
