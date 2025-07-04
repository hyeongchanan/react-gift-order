
import KaKaoLogoImg from '@/assets/KaKao로고.svg'
import useInput from '@/hook/useInput';
import { validateEmail, validatePassword } from '@/utils/validateInput';
import { useNavigate } from 'react-router-dom';
import { EmptyDiv16h, EmptyDiv48h, ErrorMessage, InputSection, KakaoLogo, LoginButton, LoginMain, LoginSection, MyDiv } from './Login.styled';



const Login = () => {

    const navigate = useNavigate();
    const id = useInput(validateEmail);
    const pw = useInput(validatePassword);

    const canSubmit = id.isValid && pw.isValid;
    const handleLoginClick = () => {
      if (window.history.length > 1) {
        navigate(-1); // 이전 페이지로 이동
      } else {
        navigate('/'); // 이전 페이지가 없으면 홈으로
      }
    };

  return (
    <MyDiv>
      <LoginMain>
        <KakaoLogo
          alt="카카오 공식 로고"
          src={KaKaoLogoImg}
        />

        <LoginSection>
          <div>
            <InputSection
              placeholder="이메일"
              value={id.value}
              onChange={id.onChange}
              onBlur={id.onBlur} 
              hasError={!!id.error}
              />
              {id.error && <ErrorMessage>{id.error}</ErrorMessage>}
          </div>
          <EmptyDiv16h />
          <div>
            <InputSection
              type="password"
              placeholder="비밀번호"
              value={pw.value}
              onChange={pw.onChange}
              onBlur={pw.onBlur}
              hasError={!!pw.error}
            />
            {pw.error && <ErrorMessage>{pw.error}</ErrorMessage>}
          </div>
          <EmptyDiv48h />
          <LoginButton 
            disabled={!canSubmit} 
            onClick={handleLoginClick}
            notVaild={!canSubmit}
          >로그인</LoginButton>
        </LoginSection>
      </LoginMain>
    </MyDiv>
  );
};

export default Login;
