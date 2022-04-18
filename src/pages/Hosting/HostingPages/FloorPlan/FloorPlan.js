import React, { useState } from 'react';
import styled from 'styled-components';
import FloorPlanOption from './../FloorPlan/FloorPlanOption';

const FloorPlan = ({ newStayInfo }) => {
  const [floorPlan, setFloorPlan] = useState({
    totalGuest: 0,
    bed: 0,
    bedroom: 0,
    bathroom: 0,
  });

  const minusOne = e => {
    const { name } = e.target;
    setFloorPlan(prevValue => ({ ...prevValue, [name]: floorPlan[name] - 1 }));
  };

  const plusOne = e => {
    const { name } = e.target;
    setFloorPlan(prevValue => ({ ...prevValue, [name]: floorPlan[name] + 1 }));
  };

  newStayInfo.totalGuest = floorPlan.totalGuest;
  newStayInfo.bed = floorPlan.bed;
  newStayInfo.bedroom = floorPlan.bedroom;
  newStayInfo.bathroom = floorPlan.bathroom;

  return (
    <PageContainer>
      <Container>
        {FLOORPLAN.map(({ id, text, name }) => {
          return (
            <FloorPlanOption
              key={id}
              text={text}
              name={name}
              floorPlan={floorPlan}
              minusOne={minusOne}
              plusOne={plusOne}
            />
          );
        })}
      </Container>
    </PageContainer>
  );
};

export default FloorPlan;

const FLOORPLAN = [
  { id: 1, text: '게스트', name: 'totalGuest' },
  { id: 2, text: '침대', name: 'bed' },
  { id: 3, text: '침실', name: 'bedroom' },
  { id: 4, text: '욕실', name: 'bathroom' },
];

const PageContainer = styled.div`
  height: 100vh;
  margin: 0;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 150px;
  transform: translateY(50%);
`;
