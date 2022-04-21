import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import DetailModal from './DetailModal.js/DetailModal';
import PersonalModal from './Personal/PersonalModal';

const Reservation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalCount, setPersonalCount] = useState({
    adult: 1,
    children: 0,
    pet: 0,
  });
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  const sumPersonal =
    personalCount.adult + personalCount.children + personalCount.pet;

  const openGuestModal = () => {
    setIsGuestModalOpen(!isGuestModalOpen);
  };

  const openDateModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ReservationLayOut>
      <ReservationBox>
        <TextBox>
          <TextTil>
            요금을 확인하려면 날짜를 <br />
            입력하세요.
          </TextTil>
          <TextSub>
            <Star />
            4.94 · 후기 256개
          </TextSub>
        </TextBox>
        <CheckInBox>
          <CheckBtn onClick={openDateModal}>
            <Checked>체크인/체크아웃</Checked>
            <CheckDate>날짜 추가 </CheckDate>
            {isModalOpen && <DetailModal />}
          </CheckBtn>
          <GuestSelect onClick={openGuestModal}>
            <PeopleNumber>인원</PeopleNumber>
            <GuestNumber>
              {sumPersonal > 0 ? `게스트 ${sumPersonal}명` : '게스트 추가'}
            </GuestNumber>
            {isGuestModalOpen && (
              <PersonalModal
                setIsGuestModalOpen={setIsGuestModalOpen}
                setPersonalCount={setPersonalCount}
                adultCount={personalCount.adult}
                childrenCount={personalCount.children}
                petCount={personalCount.pet}
              />
            )}
          </GuestSelect>

          <ReservationBtn>예약 가능 여부 보기</ReservationBtn>
        </CheckInBox>
      </ReservationBox>
    </ReservationLayOut>
  );
};

export default Reservation;

const ReservationLayOut = styled.div`
  border: 1px solid #dddddd;
  width: 340px;
  height: 328px;
  margin-left: 100px;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

const TextBox = styled.div`
  font-size: 22px;
  line-height: 20px;
`;

const TextTil = styled.div`
  margin-bottom: 10px;
  line-height: 25px;
`;

const TextSub = styled.div`
  font-size: 14px;
`;

const ReservationBox = styled.div``;

const CheckInBox = styled.div``;

const CheckBtn = styled.div`
  margin-top: 20px;
  width: 300px;
  border: 1px solid #ddd;
  height: 56px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const GuestSelect = styled.div`
  position: relative;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;

const PeopleNumber = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const GuestNumber = styled.div`
  font-size: 13px;
`;

const ReservationBtn = styled.div`
  width: 300px;
  height: 56px;
  border-radius: 10px 10px 10px 10px;
  background-color: #ff385c;
  margin-top: 20px;
  color: ${({ theme }) => theme.mainWhite};
  ${({ theme }) => theme.flexBox('', 'center', 'center')};
  font-size: 16px;
  font-weight: 800;
`;

const Checked = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin: 10px;
`;

const CheckDate = styled.div`
  color: gray;
  font-size: 14px;
  margin-left: 10px;
`;

const Star = styled(FaStar)`
  font-size: 13px;
`;

// const GuestText = styled.div`
//   top: 100px;
// `;
