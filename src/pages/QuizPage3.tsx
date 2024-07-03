import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '../styles/Button';
import { QuizWrapper } from '../styles/QuizWrapper';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { SubWrapper } from '../styles/SubWrapper';
import ProgressBar from './components/ProgresBar';
import { BackIcon } from '../styles/BackIcon';
import arrowBack from '../images/arrow_back.svg';


const QuizPage3: React.FC = () => {
  const { t } = useTranslation();
  const [age, setAge] = useState<string>('');
  const navigate = useNavigate();

  const ageOptions = [
    { value: '18-29', label: t('18-29') },
    { value: '30-39', label: t('30-39') },
    { value: '40-49', label: t('40-49') },
    { value: '50+', label: t('50+') },
  ];

  const handleNext = () => {
    if (age === '') return;
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers.age = age;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    navigate('/quiz/4');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <BackIcon src={arrowBack} alt="Back" onClick={() => navigate(-1)} />
        <ProgressBar currentStep={3} totalSteps={5} />
        <h1>{t('age')}</h1>
        <SubWrapper>
          {ageOptions.map(option => (
            <QuizWrapper
              key={option.value}
              onClick={() => setAge(option.value)}
              active={age === option.value}
            >
              {option.label}
            </QuizWrapper>
          ))}
        </SubWrapper>
        <StyledButton onClick={handleNext} disabled={age.length === 0}>
          {t('next')}
        </StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default QuizPage3;
