import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StayModal = ({
  staytype,
  isClicked,
  setIsClicked,
  buttonRef,
  updateUrl,
  filterUrl,
}) => {
  const { contents } = staytype;
  const modalRef = useRef();
  const modalCloseHandler = ({ target }) => {
    if (
      isClicked &&
      !modalRef.current.contains(target) &&
      !buttonRef.current.contains(target)
    )
      setIsClicked(false);
  };

  useEffect(() => {
    window.addEventListener('click', modalCloseHandler);
    return () => {
      window.removeEventListener('click', modalCloseHandler);
    };
  });

  return (
    <ModalWrapper ref={modalRef}>
      {contents.map(({ title, description }, index) => (
        <Modal key={index}>
          <ModalInfo>
            <InputCheckbox type="checkbox" id="field" />
            <Label for="field">{title}</Label>
            <Description>{description}</Description>
          </ModalInfo>
        </Modal>
      ))}
      <SaveBtn onClick={() => setIsClicked()}>저장</SaveBtn>
    </ModalWrapper>
  );
};

export default StayModal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 110px;
  width: 330px;
  padding: 20px;
  background-color: white;
  border: 0.5px solid #dbdbdb;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px !important;
  z-index: 9999;

  input {
    margin-left: 3px;
  }
`;

const Modal = styled.div`
  padding: 12px 0;

  div {
    margin-left: 17px;
    padding-top: 3px;
  }
`;

const ModalInfo = styled.div`
  position: relative;
`;

const SaveBtn = styled.button`
  height: 30px;
  color: white;
  background-color: black;
  margin-left: 240px;
  padding: 5px 10px;
  border-radius: 4px;
`;

const InputCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

const Label = styled.label`
  font-size: 19px;
  margin-left: 3px;
`;

const Description = styled.div`
  margin: 5px 0;
  padding-left: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.darkGrey};
`;
