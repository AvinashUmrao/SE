
import React, { useState } from 'react';


export const QuizPage = () => {
    if (showQuizResult) {
      const { correctCount, totalQuestions, wrongAnswers, suggestions } = quizResultDetails;
      return (
        <div className="p-6 max-w-2xl mx-auto">
          <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Quiz Result</h3>
          <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-semibold">Score:</span>
              <span className="text-2xl font-bold text-indigo-600">{quizScore.toFixed(0)}%</span>
            </div>
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${quizScore}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="text-xl font-semibold">You got {correctCount} out of {totalQuestions} correct.</span>
            </div>
            <hr className="my-4" />
            {wrongAnswers.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-bold text-red-500 mb-2">Wrong Answers Review</h4>
                <ul className="list-disc list-inside space-y-2">
                  {wrongAnswers.map((q, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="font-semibold">{q.question}</span>
                      <br />
                      <span className="text-sm italic">Correct Answer: {q.options[q.answer]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {suggestions.length > 0 && (
              <div>
                <h4 className="text-xl font-bold text-indigo-600 mb-2">Suggestions for Improvement</h4>
                <ul className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="bg-blue-50 p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-blue-700">{suggestion.topic}</p>
                      <p className="text-sm text-blue-600">{suggestion.suggestion}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePageChange('gate')}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-all shadow"
            >
              Back to GATE
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">{hardcodedData.gate.quiz.title}</h3>
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
          {hardcodedData.gate.quiz.questions.map((q, index) => (
            <div key={q.id} className="mb-6 pb-6 border-b border-gray-100 last:border-b-0">
              <p className="font-bold text-lg mb-4 text-gray-700">{index + 1}. {q.question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((option, opIndex) => (
                  <button
                    key={opIndex}
                    onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: opIndex })}
                    className={`text-left p-4 rounded-xl transition-all duration-200 border-2
                                ${quizAnswers[q.id] === opIndex
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleQuizSubmit}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-full mt-4 hover:bg-indigo-700 transition-all shadow-lg"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    );
  };