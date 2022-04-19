import React, { useEffect } from 'react';
import { BASE_URL } from '../../../../config/config';

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    fetch(`${BASE_URL}users/signup?code=${code}`, {
      method: 'POST',
    })
      .then(res => res.json())
      // .then(data => localStorage.setItem('doll', data.access_token));
      .then(data => console.log(data));
  }, []);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
