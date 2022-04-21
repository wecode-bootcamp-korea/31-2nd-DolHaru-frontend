import React from 'react';
import styled from 'styled-components';
import PersonnelType from './PersonnelType';

function PersonnelModal({
  setIsGuestModalOpen,
  setPersonnelCount,
  adultCount,
  childrenCount,
  petCount,
}) {
  return (
    <>
      <ModalBackground
        onClick={() => {
          setIsGuestModalOpen(false);
          setPersonnelCount({
            adult: 0,
            children: 0,
            pet: 0,
          });
        }}
      />
      <PersonnelModalLayout
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <PersonnelModalBox>
          {PERSONNEL_LIST.map(list => {
            return (
              <PersonnelType
                key={list.id}
                {...list}
                setPersonnelCount={setPersonnelCount}
                adultCount={adultCount}
                childrenCount={childrenCount}
                petCount={petCount}
              />
            );
          })}
          <PersonnelFooter>
            반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.
          </PersonnelFooter>
        </PersonnelModalBox>
      </PersonnelModalLayout>
    </>
  );
}

export default PersonnelModal;

const PERSONNEL_LIST = [
  { id: 1, title: '성인', subtitle: '만 13세 이상' },
  { id: 2, title: '어린이', subtitle: '만 2~12세' },
  { id: 3, title: '반려동물', subtitle: '보조동물을 동반하시나요?' },
];

const PersonnelModalLayout = styled.div`
  position: absolute;
  left: -213px;
  top: 65px;
  width: 400px;
  height: 290px;
  padding: 16px 32px;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  z-index: 9;
`;

const PersonnelModalBox = styled.div``;

const ModalBackground = styled.div``;

const PersonnelFooter = styled.h3`
  padding: 20px 0;
  font-size: 12px;
  color: #909090;
`;
