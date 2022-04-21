import React, { useEffect } from 'react';
import { BASE_URL } from '../../../../config/config';
import { useNavigate, useLocation } from 'react-router-dom';

const KakaoLogin = () => {
  const location = useLocation();
  const code = location.search;
  const navigate = useNavigate();
  const accessCode = new URLSearchParams(code).get('code');

  useEffect(() => {
    fetch(`${BASE_URL}/users/signin?code=${accessCode}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('dollharu', data.token);
          navigate('/');
        } else {
          alert('로그인이 실패하였습니다.');
          navigate('/');
        }
      });
  }, [code, accessCode, navigate]);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
