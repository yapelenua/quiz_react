import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import QuizPage1 from './pages/QuizPage1';
import QuizPage2 from './pages/QuizPage2';
import QuizPage3 from './pages/QuizPage3';
import QuizPage4 from './pages/QuizPage4';
import QuizPage5 from './pages/QuizPage5';
import LoaderPage from './pages/LoaderPage';
import EmailPage from './pages/EmailPage';
import ThankYouPage from './pages/ThankYouPage';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/quiz/1" element={<QuizPage1 />} />
          <Route path="/quiz/2" element={<QuizPage2 />} />
          <Route path="/quiz/3" element={<QuizPage3 />} />
          <Route path="/quiz/4" element={<QuizPage4 />} />
          <Route path="/quiz/5" element={<QuizPage5 />} />
          <Route path="/loader" element={<LoaderPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/thank" element={<ThankYouPage />} />
          <Route path="/" element={<QuizPage1 />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
