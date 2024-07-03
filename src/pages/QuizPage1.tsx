import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { StyledButton } from '../styles/Button';
import { SubWrapper } from '../styles/SubWrapper';
import { QuizWrapper } from '../styles/QuizWrapper';
import ProgressBar from './components/ProgresBar';


const languageMap: { [key: string]: string } = {
  English: 'en',
  French: 'fr',
  German: 'ge',
  Spain: 'sp'
};

const QuizPage1: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('en');
  const navigate = useNavigate();

  const handleNext = () => {
    i18n.changeLanguage(language);
    localStorage.setItem('quizAnswers', JSON.stringify({ language }));
    navigate('/quiz/2');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <ProgressBar currentStep={1} totalSteps={5} />
        <h1>{t('language')}</h1>
        <SubWrapper>
          {Object.keys(languageMap).map(lang => (
            <QuizWrapper
              key={lang}
              active={language === languageMap[lang]}
              onClick={() => setLanguage(languageMap[lang])}
            >
              {lang}
            </QuizWrapper>
          ))}
        </SubWrapper>
        <StyledButton onClick={handleNext} disabled={language.length === 0}>
          {t('next')}
        </StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default QuizPage1;
