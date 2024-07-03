import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoaderPage: React.FC = () => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Increase percentage every 100ms to reach 100% in 5 seconds
      });
    }, 100);

    const timer = setTimeout(() => {
      navigate('/email');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
      <LoaderWrapper>
        <Circle>
          <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <path
              className="circle-bg"
              d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">{percentage}%</text>
          </svg>
        </Circle>
        <h1>Loading...</h1>
      </LoaderWrapper>
  );
};

export default LoaderPage;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(35, 22, 54);
  color: rgb(200, 199, 201);
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;

  svg {
    width: 100%;
    height: 100%;
  }

  .circle-bg {
    fill: none;
    stroke: #e6e6e6;
    stroke-width: 2.8;
  }

  .circle {
    fill: none;
    stroke: #6a0dad;
    stroke-width: 2.8;
    stroke-linecap: round;
    transition: stroke-dasharray 0.1s linear;
  }

  .percentage {
    fill: #6a0dad;
    font-size: 0.5em;
    text-anchor: middle;
    dominant-baseline: middle;
  }
`;
