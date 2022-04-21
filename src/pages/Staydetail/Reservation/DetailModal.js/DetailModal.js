import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'react-multi-date-picker';

const DetailModal = () => {
  return (
    <DateModalLayout
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <DateModalBox>
        <DateModalWrap>
          <Calendar
            numberOfMonths={2}
            weekDays={WEEKDAYS}
            months={MONTH}
            range
          />
        </DateModalWrap>
      </DateModalBox>
    </DateModalLayout>
  );
};
export default DetailModal;

const DateModalLayout = styled.div`
  position: relative;
`;

const DateModalBox = styled.div`
  width: 700px;
  height: 500px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: -400px;
  border-radius: 20px;
  z-index: 9;
  box-shadow: 5px 5px 5px #dddddd;
`;

const DateModalWrap = styled.div`
  .rmdp-week-day {
    color: black;
  }
  .rmdp-shadow {
    box-shadow: none;
  }
  .rmdp-day {
    height: 45px;
    width: 45px;
  }

  .rmdp-range {
    background-color: #ccc;
  }
  .rmdp-day.rmdp-today {
    span {
      background-color: black;
    }
  }
`;

const MONTH = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
