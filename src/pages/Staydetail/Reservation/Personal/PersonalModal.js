import React from 'react';
import styled from 'styled-components';
import PersonalType from './PersonalType';

function PersonalModal({
  setIsGuestModalOpen,
  setPersonalCount,
  adultCount,
  childrenCount,
  petCount,
}) {
  return (
    <PersonalModalLayout
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <PersonalModalBox>
        {PERSONAL_LIST.map(list => {
          return (
            <PersonalType
              key={list.id}
              {...list}
              setPersonalCount={setPersonalCount}
              adultCount={adultCount}
              childrenCount={childrenCount}
              petCount={petCount}
            />
          );
        })}
        <PersonalFooter>
          반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.
        </PersonalFooter>
      </PersonalModalBox>
    </PersonalModalLayout>
  );
}

export default PersonalModal;

const PERSONAL_LIST = [
  { id: 1, title: '성인', subtitle: '만 13세 이상' },
  { id: 2, title: '어린이', subtitle: '만 2~12세' },
  { id: 3, title: '반려동물', subtitle: '보조동물을 동반하시나요?' },
];

const PersonalModalLayout = styled.div`
  position: absolute;
  left: -20px;
  width: 340px;
  height: 290px;
  padding: 16px 32px;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const PersonalModalBox = styled.div``;
const PersonalFooter = styled.h3`
  padding: 20px 0;
  font-size: 12px;
  color: #909090;
`;
