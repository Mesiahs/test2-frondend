import React, { useState } from 'react'
import { Choice } from '../../interfaces/FormInterface';

interface Props {
  choices: Choice[],
  onAnswer: (option: number) => void;
  isDisabled: boolean;
}

const TestOptions: React.FC<Props> = ({onAnswer, choices, isDisabled }) => {
  const options = [
    { id: 1, text: "Opción A", color: "bg-red-500" },
    { id: 2, text: "Opción B", color: "bg-blue-500" },
    { id: 3, text: "Opción C", color: "bg-yellow-500" },
    { id: 4, text: "Opción D", color: "bg-green-500" },
  ];
  return (
    // <div className="grid grid-cols-2 gap-4 w-full h-screen p-4">
    <div className="grid grid-cols-2 gap-4 w-full h-96 p-4"> 
      {/* {options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => onAnswer(option.id)}
          className={`flex items-center justify-center text-white text-2xl font-bold p-8 rounded-lg cursor-pointer transition duration-300 hover:opacity-80  
            ${isDisabled ? 'bg-gray-300 cursor-not-allowed' : option.color }`}
          disabled={isDisabled}
        >
          {choices[index] ? choices[index].choice_text : option.text }
        </button>
      ))} */}
      {choices.map((choice, index) => (
        <button
          key={choice.id}
          onClick={() => onAnswer(choice.id)}
          className={`flex items-center justify-center text-white text-2xl font-bold p-8 rounded-lg cursor-pointer transition duration-300 hover:opacity-80  
            ${isDisabled ? 'bg-gray-300 cursor-not-allowed' : options[index].color }`}
          disabled={isDisabled}
        >
          {/* {choices[index] ? choices[index].choice_text : option.text } */}
          {choice.choice_text}
        </button>
      ))}
    </div>
  )
}

export default TestOptions