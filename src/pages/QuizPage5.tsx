import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { BubbleQuiz } from '../styles/BubbleQuiz';
import { StyledButton } from '../styles/Button';
import { BubbleWrapper } from '../styles/BubbleWrapper';
import ProgressBar from './components/ProgresBar';
import { BackIcon } from '../styles/BackIcon';
import arrowBack from '../images/arrow_back.svg';


const QuizPage5: React.FC = () => {
  const { t } = useTranslation();
  const [likes, setLikes] = useState<string[]>([]);
  const navigate = useNavigate();

  const genreOptions = [
    { icon: '🐺', name: t('werewolf') },
    { icon: '🔫', name: t('action') },
    { icon: '👑', name: t('royal_obsession') },
    { icon: '💖', name: t('romance') },
    { icon: '📘', name: t('young_adult') },
    { icon: '🦹‍♂️', name: t('bad_boy') },
    { icon: '💰', name: t('billionaire') },
  ];

  const handleCheckboxChange = (option: string) => {
    setLikes(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    answers.likes = likes;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    navigate('/loader');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <BackIcon src={arrowBack} alt="Back" onClick={() => navigate(-1)} />
        <ProgressBar currentStep={5} totalSteps={5} />
        <h1>{t('likes')}</h1>
        <BubbleWrapper>
          {genreOptions.map(option => (
            <BubbleQuiz
              key={option.name}
              active={likes.includes(option.name)}
              onClick={() => handleCheckboxChange(option.name)}
            >
              <input
                type="checkbox"
                checked={likes.includes(option.name)}
                onChange={() => handleCheckboxChange(option.name)}
                style={{ display: 'none' }}
              />
              <span style={{ marginBottom: '8px', display: 'block' }}>{option.icon}</span>
              {option.name}
            </BubbleQuiz>
          ))}
        </BubbleWrapper>
        <StyledButton onClick={handleNext} disabled={likes.length === 0}>
          {t('next')}
        </StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default QuizPage5;
