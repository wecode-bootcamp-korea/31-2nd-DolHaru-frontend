import React from 'react';
import styled from 'styled-components';
import { FaDoorClosed, FaRegClock } from 'react-icons/fa';

const RoomRule = () => {
  return (
    <Section>
      <ConfirmList>알아두어야 할 사항</ConfirmList>
      <ul>
        <li>숙소 이용규칙</li>
        <ConfirmRule>
          <FaRegClock />
          &ensp; 체크인: 오후 3:00 이후
        </ConfirmRule>
        <ConfirmRule>
          <FaRegClock />
          &ensp; 체크아웃 시간: 오전 11:00
        </ConfirmRule>
        <ConfirmRule>
          <FaDoorClosed /> &ensp;키패드로 셀프 체크인
        </ConfirmRule>
      </ul>
    </Section>
  );
};

export default RoomRule;

const Section = styled.div`
  border: none;
  border-bottom: solid 1px #bfcace;
  margin-top: 10px;
`;

const ConfirmList = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
`;

const ConfirmRule = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
