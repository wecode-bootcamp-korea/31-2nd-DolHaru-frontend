export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI = 'http://localhost:3000/users/kakao/token';
export const KAKAO = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
