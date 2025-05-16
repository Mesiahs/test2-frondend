"use client";

import React, { useEffect, useState } from 'react'
import TestOptions from './TestOptions'
import { Form, Question } from '@/interfaces/FormInterface';
import { useDispatch } from 'react-redux';
import { incrementCorrectAnswers } from '@/redux/features/userSlice';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

interface Props {
  question: Question;
  onNextQuestion: () => void
}

const TestBoard: React.FC<Props> = ({ question, onNextQuestion }) => {
  const [res, setRes] = useState<number>();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const { width, height } = useWindowSize()
  const dispatch = useDispatch()

  const getAnswer = (option: number) => {
    setRes(option)
    validationAnswer(option)
  }

  const validationAnswer = (option: number) => {
    const correctChoice = question.choices.find(choice => choice.is_correct);
    console.log(question.choices)
    
    if (!correctChoice) {
      console.error("No se encontró una respuesta correcta");
      setIsCorrect(false);
      return;
    }

    console.log("Opción seleccionada:", option, "Correcta:", correctChoice.id);
    
    if (correctChoice.id === option) {
      setIsCorrect(true);
      dispatch(incrementCorrectAnswers());

      console.log("Respuesta correcta - incrementando contador");
    } else {
      setIsCorrect(false);
      console.log("Respuesta incorrecta");
    }
  };


  const confeti = () => {
    return setTimeout(() => {
      return 
      <Confetti
        width={width}
        height={height}
      />
    }, 300);
  }

  useEffect(() => {
  }, [])


  return (
    <div className="w-11/12 max-w-6xl bg-white shadow-lg rounded-lg h-11/12 ">

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800 text-center p-6 bg-slate-200 shadow-lg rounded-lg">
          {question.question_text}
        </h3>
      </div>

      <div className="flex justify-between items-center gap-4 h-full"  >

        <TestOptions onAnswer={getAnswer} choices={question.choices} isDisabled={isCorrect !== null} />

        <button
          onClick={onNextQuestion}
          className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-lg shadow-md transition duration-300 ${res
            ? "bg-orange-600 text-white hover:bg-orange-700"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          disabled={!res}
        >
          Siguiente pregunta <span className="text-lg">{">"}</span>
        </button>
      </div>

    </div>
  )
}

export default TestBoard