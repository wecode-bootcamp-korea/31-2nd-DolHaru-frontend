import React from 'react';
import styled from 'styled-components';

const Minju = () => {
  return (
    <>
      <ContentWrapper>김 란</ContentWrapper>
      <Textarea>여기는 글을 작성하는곳</Textarea>
      <Input type="password" />
    </>
  );
};

export default Minju;

const ContentWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
`;

const Textarea = styled.textarea`
  width: 200px;
  height: 200px;
  margin-left: 10px;
  color: green;
  font-size: x-large;
`;

const Input = styled.input`
  width: 200px;
`;
