import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { QuizWrapper } from '../styles/QuizWrapper';
import { StyledButton } from '../styles/Button';
import { SubWrapper } from '../styles/SubWrapper';
import { StyledCheckboxWrapper, StyledCheckbox } from '../styles/StyledCheckbox';
import ProgressBar from './components/ProgresBar';
import { BackIcon } from '../styles/BackIcon';
import arrowBack from '../images/arrow_back.svg';


const QuizPage4: React.FC = () => {
  const { t } = useTranslation();
  const [dislikes, setDislikes] = useState<string[]>([]);
  const navigate = useNavigate();

  const dislikeOptions = [
    { value: 'lack_of_logic', label: t('lack_of_logic') },
    { value: 'slow_speed', label: t('slow_speed') },
    { value: 'lack_of_humor', label: t('lack_of_humor') },
    { value: 'generic_ending', label: t('generic_ending') },
  ];

  const handleCheckboxChange = (option: string) => {
    setDislikes(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers.dislikes = dislikes;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    navigate('/quiz/5');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <BackIcon src={arrowBack} alt="Back" onClick={() => navigate(-1)} />
        <ProgressBar currentStep={4} totalSteps={5} />
        <h1>{t('dislikes')}</h1>
        <SubWrapper>
          {dislikeOptions.map(option => (
            <QuizWrapper
              key={option.value}
              active={dislikes.includes(option.value)}
              onClick={() => handleCheckboxChange(option.value)}
            >
              <span>{option.label}</span>
              <StyledCheckboxWrapper>
                <StyledCheckbox
                  type="checkbox"
                  checked={dislikes.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
              </StyledCheckboxWrapper>
            </QuizWrapper>
          ))}
        </SubWrapper>
        <StyledButton onClick={handleNext} disabled={dislikes.length === 0}>
          {t('next')}
        </StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default QuizPage4;
