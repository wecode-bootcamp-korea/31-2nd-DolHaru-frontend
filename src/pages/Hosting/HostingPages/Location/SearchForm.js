import React, { useState } from 'react';
import { useToggle } from './../../../../hooks/useToggle';
import HostingMap from './HostingMap';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const SearchForm = ({ newStayInfo }) => {
  const [isOpen, setIsOpen] = useToggle(true);
  const [address, setAddress] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setAddress(searchKeyword);
    if (!searchKeyword) {
      alert('등록할 주소를 입력해주세요!');
      return;
    } else if (searchKeyword === address) {
      alert('이전과 동일한 주소를 검색하셨습니다. 다른 주소를 검색해주세요!');
      return;
    }
    setIsOpen();
  };

  const handleChange = e => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  return (
    <>
      {isOpen && (
        <SearchAddressForm onSubmit={handleSubmit}>
          <SearchBar
            label="주소를 입력하세요"
            variant="outlined"
            color="secondary"
            onChange={handleChange}
          />
          <SubmitBtn type="submit" color="secondary">
            검색
          </SubmitBtn>
        </SearchAddressForm>
      )}
      <HostingMap
        address={address}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        newStayInfo={newStayInfo}
      />
    </>
  );
};
export default SearchForm;

const SearchAddressForm = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  top: 200px;
  left: 170px;
  width: 400px;
  z-index: 5;
`;

const SearchBar = styled(TextField)`
  width: 100%;
  background-color: white;
  outline: none;

  &:focus {
    border: 1px solid black;
    border-radius: 30px;
  }
`;

const SubmitBtn = styled(Button)`
  position: absolute;
  right: 10px;

  &:hover {
    background-color: #ae3ca9;
    color: white;
  }
`;
