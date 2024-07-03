import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { QuizWrapper } from '../styles/QuizWrapper';
import { StyledButton } from '../styles/Button';
import { SubWrapper } from '../styles/SubWrapper';
import styled from 'styled-components';
import ProgressBar from './components/ProgresBar';
import { BackIcon } from '../styles/BackIcon';
import arrowBack from '../images/arrow_back.svg';


const QuizIcon = styled.p`
  font-size: 40px;
  line-height: 0;
`;

const QuizPage2: React.FC = () => {
  const { t } = useTranslation();
  const [gender, setGender] = useState<string>('');
  const navigate = useNavigate();

  const genderOptions = [
    { value: 'male', icon: '👨', label: t('male') },
    { value: 'female', icon: '👩', label: t('female') },
    { value: 'dontTell', icon: '😏', label: t('other') },
  ];

  const handleNext = () => {
    if (gender === '') return;
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers.gender = gender;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    navigate('/quiz/3');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <BackIcon src={arrowBack} alt="Back" onClick={() => navigate(-1)} />
        <ProgressBar currentStep={2} totalSteps={5} />
        <h1>{t('gender')}</h1>
        <SubWrapper direction='row'>
          {genderOptions.map(option => (
            <QuizWrapper
              key={option.value}
              position={'center'}
              direction={'column'}
              width={'10%'}
              height={'70px'}
              active={gender === option.value}
              onClick={() => setGender(option.value)}
            >
              <QuizIcon>{option.icon}</QuizIcon>
              {option.label}
            </QuizWrapper>
          ))}
        </SubWrapper>
        <StyledButton onClick={handleNext} disabled={gender.length === 0}>
          {t('next')}
        </StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default QuizPage2;
