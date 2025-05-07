"use client";

import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ScoreDisplay: React.FC = () => {
  const correctAnswers = useSelector((state: RootState) => state.user.correctAnswers);

  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl font-bold">Aciertos: {correctAnswers}</h2>
    </div>
  );
};

export default ScoreDisplay;
