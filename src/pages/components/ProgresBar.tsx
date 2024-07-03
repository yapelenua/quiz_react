// ProgressBar.tsx
import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBarWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProgressText = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: lightGray;
  border-radius: 8px;
  overflow: hidden;
  height: 20px;
`;

const Progress = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  background-color:purple;
  height: 100%;
  transition: width 0.3s ease;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <ProgressBarWrapper>
      <ProgressText>{`${currentStep}/${totalSteps}`}</ProgressText>
      <ProgressBarContainer>
        <Progress width={progress} />
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
