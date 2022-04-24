export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI =
  'http://dolharufe.s3-website.ap-northeast-2.amazonaws.com/kakao/token';
export const KAKAO = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
