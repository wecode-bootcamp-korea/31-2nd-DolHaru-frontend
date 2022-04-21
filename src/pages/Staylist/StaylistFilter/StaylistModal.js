import React from 'react';
import styled from 'styled-components';

const StaylistModal = ({ contents }) => {
  return (
    <Modal>
      {contents.map((content, index) => (
        <div key={index}>
          <input type="checkbox" />
          {content}
        </div>
      ))}
    </Modal>
  );
};

export default StaylistModal;

const Modal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: red;
  border-radius: 100px;
`;
