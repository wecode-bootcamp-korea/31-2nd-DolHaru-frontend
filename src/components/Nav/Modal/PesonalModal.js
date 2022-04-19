import React from 'react';
import styled from 'styled-components';

function PesonalModal() {
  return (
    <PesonalModalLayout
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <PesonalModalBox>
        <AdultBox>
          <div>성인</div>
          <div>만 13세 이상</div>
          <button></button>
          <button></button>
        </AdultBox>
      </PesonalModalBox>
    </PesonalModalLayout>
  );
}

export default PesonalModal;

const PesonalModalLayout = styled.div``;

const PesonalModalBox = styled.div`
  width: 394px;
  height: 375px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const AdultBox = styled.div``;
