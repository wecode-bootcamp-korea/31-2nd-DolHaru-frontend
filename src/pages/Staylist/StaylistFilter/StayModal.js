import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StayModal = ({ staytype, isClicked, setIsClicked, buttonRef }) => {
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
            <input type="checkbox" />
            {title}
            <div>{description}</div>
          </ModalInfo>
        </Modal>
      ))}
      <SaveBtn>저장</SaveBtn>
    </ModalWrapper>
  );
};

export default StayModal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 110px;
  width: 330px;
  height: 280px;
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
    font-size: 13px;
  }
`;

const ModalInfo = styled.div`
  width: 260px;
`;

const SaveBtn = styled.button`
  position: absolute;
  right: 20px;
  width: 50px;
  height: 30px;
  color: white;
  background-color: black;
`;
