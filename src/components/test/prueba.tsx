// // src/components/test/TestBoard.tsx
// "use client";

// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { incrementCorrectAnswers } from '@/features/user/userSlice';
// import TestOptions from './TestOptions';
// import { Question } from '@/interfaces/FormInterface';

// interface Props {
//   question: Question;
//   onNextQuestion: () => void;
// }

// const TestBoard: React.FC<Props> = ({ question, onNextQuestion }) => {
//   const [res, setRes] = useState<number>();
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
//   const dispatch = useDispatch();

//   const getAnswer = (option: number) => {
//     setRes(option);
//     validateAnswer(option);
//   };

//   const validateAnswer = (option: number) => {
//     const correctChoice = question.choices.find(choice => choice.is_correct);
//     if (correctChoice?.id === option) {
//       setIsCorrect(true);
//       dispatch(incrementCorrectAnswers());
//     } else {
//       setIsCorrect(false);
//     }
//   };

//   useEffect(() => {
//     // Puedes agregar lógica adicional aquí si es necesario
//   }, []);

//   return (
//     <div className="w-11/12 max-w-6xl bg-white shadow-lg rounded-lg h-11/12">
//       <div className="mb-4">
//         <h3 className="text-2xl font-semibold text-gray-800 text-center p-6 bg-slate-200 shadow-lg rounded-lg">
//           {question.question_text}
//         </h3>
//       </div>

//       <div className="flex justify-between items-center gap-4 h-full">
//         <TestOptions onAnswer={getAnswer} choices={question.choices} isDisabled={isCorrect !== null} />

//         <button
//           className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-lg shadow-md transition duration-300 ${
//             res
//               ? "bg-orange-600 text-white hover:bg-orange-700"
//               : "bg-gray-400 text-gray-200 cursor-not-allowed"
//           }`}
//           disabled={!res}
//           onClick={onNextQuestion}
//         >
//           Siguiente pregunta <span className="text-lg">{">"}</span>
//         </button>
//       </div>

//       {isCorrect !== null && (
//         <p className="mt-4 text-lg text-center text-gray-700">
//           {isCorrect ? "Es correcto" : "Es incorrecto"}
//         </p>
//       )}
//     </div>
//   );
// };

// export default TestBoard;
