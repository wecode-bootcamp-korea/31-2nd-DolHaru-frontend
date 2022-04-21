import React from 'react';
import styled from 'styled-components';

const Buttons = ({ updateOffset, buttonNum }) => {
  return (
    <>
      <PageBtn
        onClick={() => updateOffset({ buttonIndex: 0, number: 1 })}
        background={buttonNum === 1 ? 'black' : 'white'}
        color={buttonNum === 1 ? 'white' : ''}
      >
        1
      </PageBtn>
      <PageBtn
        onClick={() => updateOffset({ buttonIndex: 1, number: 2 })}
        background={buttonNum === 2 ? 'black' : 'white'}
        color={buttonNum === 2 ? 'white' : ''}
      >
        2
      </PageBtn>
      <PageBtn
        onClick={() => updateOffset({ buttonIndex: 2, number: 3 })}
        background={buttonNum === 3 ? 'black' : 'white'}
        color={buttonNum === 3 ? 'white' : ''}
      >
        3
      </PageBtn>
    </>
  );
};

export default Buttons;

const PageBtn = styled.button`
  margin-right: 20px;
  width: 30px;
  height: 30px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border: none;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontRegular};
`;
