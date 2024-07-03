import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { MainWrapper } from '../styles/MainWrapper';
import { Wrapper } from '../styles/Wrapper';
import { StyledButton } from '../styles/Button';
import checkmark from '../images/checkmark.svg';
import download from '../images/download.svg';

const ThankYouPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDownload = () => {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    const csvData = [
      ['order', 'title', 'type', 'answer'],
      ['1', 'Language', 'single select', answers.language],
      ['2', 'Gender', 'single select', answers.gender],
      ['3', 'Age', 'single select', answers.age],
      ['4', 'Dislikes', 'multi select', answers.dislikes.join(', ')],
      ['5', 'Likes', 'multi select', answers.likes.join(', ')],
      ['6', 'Email', 'single select', answers.email]
    ].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'quiz_answers.csv');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <h1>{t('thank')}</h1>
        <img src={checkmark} alt="Checkmark" style={{ width: '100px', height: '100px' }} />
        <p onClick={handleDownload} style={{ cursor: 'pointer' }}>
          <img src={download} alt="Download" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          {t('download')}
        </p>
        <StyledButton onClick={() => navigate('/quiz/1')}>{t('retake')}</StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default ThankYouPage;
