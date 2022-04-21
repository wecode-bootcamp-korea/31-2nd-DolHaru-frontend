import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { KAKAO } from '../KakaoLogin/KakaoAuth';

const LoginSignup = ({ setLoginModal }) => {
  return (
    <>
      <Main
        onClick={() => {
          setLoginModal(false);
        }}
      />
      <LoginSignupLayout>
        <CloseIcon>
          <GrClose
            onClick={() => {
              setLoginModal(false);
            }}
          />
        </CloseIcon>
        <TopBox>
          <HeaderText>로그인 또는 회원 가입</HeaderText>
        </TopBox>
        <LoginSignupMain>
          <Form>
            <MainText>DOLHARU에 오신 것을 환영합니다.</MainText>
            <InputText>
              <LoginInput type="text" placeholder="아이디를 입력해주세요." />
              <PassInput type="text" placeholder="비밀번호를 입력해주세요." />
            </InputText>
            <InfoText>개인정보 처리방침</InfoText>
            <ContinueBtn className="continue">계속</ContinueBtn>
            <GoogleBtn>
              <GoogleImg src="/images/Nav/구글.png" alt="" />
              <Google>구글로 로그인하기</Google>
            </GoogleBtn>
            <KakaoBtn>
              <KakaoImg src="/images/Nav/카카오.png" alt="" />
              <Kakao>
                <KakaoAtag href={KAKAO}>카카오톡으로 로그인하기</KakaoAtag>
              </Kakao>
            </KakaoBtn>
          </Form>
        </LoginSignupMain>
      </LoginSignupLayout>
    </>
  );
};

export default LoginSignup;

const Main = styled.div`
  background-color: #000000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

const LoginSignupLayout = styled.div`
  position: absolute;
  width: 550px;
  margin: 0 auto;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const TopBox = styled.div`
  height: 64px;
  border-bottom: 1px solid #dcdcdc;
  padding: 0 20px;
`;

const HeaderText = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 64px;
`;
const LoginSignupMain = styled.div`
  padding: 5px;
`;

const MainText = styled.h3`
  font-size: 20px;
  padding: 24px;
  font-weight: 600;
`;

const InputText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 20px;
`;

const InfoText = styled.div`
  font-size: 12px;
  padding: 20px;
  text-decoration: underline;
`;

const LoginInput = styled.input`
  height: 50px;
  border-radius: 8px 8px 0 0;
  border: 1px solid #8c8c8c;
  border-bottom: none;
  padding-left: 10px;
  cursor: pointer;
`;

const PassInput = styled.input`
  height: 50px;
  border-radius: 0 0 8px 8px;
  border: 1px solid #8c8c8c;
  padding-left: 10px;
  cursor: pointer;
`;

const Form = styled.form`
  height: 450px;
`;

const ContinueBtn = styled.button`
  background-color: rgb(227, 28, 95);
  color: #fff;
  border-radius: 10px;
  height: 50px;
  padding: 5px;
  outline: 0;
  border: 0;
  width: 93%;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  margin-top: 15px;
  margin: 15px 0 20px 20px;
  cursor: pointer;
`;

const GoogleBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const GoogleImg = styled.img`
  width: 24px;
  position: absolute;
  left: 25px;
  top: 13px;
`;

const Google = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 50px;
  padding: 5px;
  margin-bottom: 15px;
  outline: 0;
  border: 1px solid #8c8c8c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const KakaoBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  text-decoration: none;
`;

const KakaoImg = styled.img`
  width: 24px;
  position: absolute;
  left: 25px;
  top: 13px;
`;

const Kakao = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 50px;
  padding: 5px;
  outline: 0;
  border: 1px solid #8c8c8c;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const KakaoAtag = styled.a`
  text-decoration: none;
`;
