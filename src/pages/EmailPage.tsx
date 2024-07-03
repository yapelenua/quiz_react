import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { StyledButton } from '../styles/Button';
import { SubWrapper } from '../styles/SubWrapper';
import styled from 'styled-components';

const EmailPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNext = () => {
    if (!validateEmail(email)) {
      setError(t('Please enter a valid email address.'));
      return;
    }
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers.email = email;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    navigate('/thank');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <h1>{t('email')}</h1>
        <SubWrapper>
          <StyledInput
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder={t('Enter your email')}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </SubWrapper>
        <StyledButton onClick={handleNext}>{t('next')}</StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default EmailPage;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875em;
  margin-top: -10px;
  margin-bottom: 10px;
`;
