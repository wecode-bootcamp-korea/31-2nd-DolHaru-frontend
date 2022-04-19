import React from 'react';
import styled from 'styled-components';

const Card = ({ name, distance, imageUrl }) => {
  return (
    <CardBox>
      <CardImg src={imageUrl} alt="card" />
      <CardColor>
        <CardText>{name}</CardText>
        <CardDistance>{distance}</CardDistance>
      </CardColor>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div``;

const CardImg = styled.img`
  border-radius: 20px 20px 0 0;
  width: 305px;
  height: 200px;
  position: relative;
  top: 2px;
`;

const CardColor = styled.div`
  background-color: #ff385c;
  color: #fff;
  width: 305px;
  height: 200px;
  border-radius: 0 0 20px 20px;
`;

const CardText = styled.div`
  font-size: 38px;
  padding: 16px;
  font-weight: 600;
`;

const CardDistance = styled.div`
  font-size: 20px;
  padding: 4px 0 0 18px;
`;
