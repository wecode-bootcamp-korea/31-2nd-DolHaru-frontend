import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'react-multi-date-picker';

const DateModal = () => {
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

export default DateModal;

const DateModalLayout = styled.div`
  position: relative;
`;

const DateModalBox = styled.div`
  width: 810px;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: -280px;
  border-radius: 20px;
  z-index: 9;
  box-shadow: 3px 3px 3px #eeeeee;
`;

const DateModalWrap = styled.div`
  .rmdp-week-day {
    color: black;
  }

  .rmdp-shadow {
    box-shadow: none;
  }

  .rmdp-day {
    height: 50px;
    width: 50px;
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
