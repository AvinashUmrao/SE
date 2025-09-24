import React, { useState } from 'react';

// Hardcoded data for the website
const hardcodedData = {
  news: [
    {
      id: 1,
      title: "New AI-powered learning tools released",
      summary: "Our new suite of AI tools is designed to help students master complex subjects faster than ever before.",
      date: "Oct 26, 2023",
      image: "https://placehold.co/400x200/4F46E5/FFFFFF?text=AI+Tools"
    },
    {
      id: 2,
      title: "Webinar on career opportunities in Data Science",
      summary: "Join our expert panel to explore the fastest-growing field in tech. Register now to secure your spot!",
      date: "Oct 25, 2023",
      image: "https://placehold.co/400x200/F97316/FFFFFF?text=Data+Science"
    },
    {
      id: 3,
      title: "Scholarship program for STEM students announced",
      summary: "We are proud to announce a new scholarship fund to support the next generation of innovators.",
      date: "Oct 24, 2023",
      image: "https://placehold.co/400x200/10B981/FFFFFF?text=Scholarship"
    },
  ],
 blogs: [
  {
    id: 1,
    title: "5 Tips for Effective Time Management",
    author: "Jane Doe",
    summary: "Learn how to structure your study schedule to maximize productivity and reduce stress.",
    link: "https://www.coursera.org/articles/time-management-strategies",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Cracking the GATE Exam",
    author: "John Smith",
    summary: "From study materials to exam day strategies, this guide covers everything you need to know.",
    link: "https://www.geeksforgeeks.org/gate-cs-preparation-strategy/",
  },
  {
    id: 3,
    title: "Mastering MCQs: A Game-Changer for Exams",
    author: "Alice Johnson",
    summary: "Discover proven techniques to tackle multiple-choice questions with confidence.",
    link: "https://poorvucenter.yale.edu/Multiple-Choice-Test-Taking-Strategies",
  },
],

  gate: {
    studyMaterial: [
      { id: 1, title: "Linear Algebra Fundamentals", url: "#", type: "PDF" },
      { id: 2, title: "Calculus Crash Course", url: "#", type: "Video" },
      { id: 3, title: "Digital Logic Design Handbook", url: "#", type: "PDF" },
    ],
    previousPapers: [
      { id: 1, year: 2023, title: "GATE 2023 Paper", url: "#" },
      { id: 2, year: 2022, title: "GATE 2022 Paper", url: "#" },
      { id: 3, year: 2021, title: "GATE 2021 Paper", url: "#" },
    ],
    announcements: [
      "Registration for GATE 2024 is now open.",
      "Correction window for application forms is live.",
      "Exam dates have been finalized.",
    ],
    syllabus: [
      {
        section: "Engineering Mathematics",
        topics: [
          "Linear Algebra",
          "Calculus",
          "Differential equations",
          "Probability and Statistics"
        ],
      },
      {
        section: "General Aptitude",
        topics: [
          "Verbal Ability",
          "Numerical Ability",
          "Reasoning",
          "Comprehension"
        ],
      },
      {
        section: "Core Subject (e.g., Computer Science)",
        topics: [
          "Algorithms",
          "Programming & Data Structures",
          "Computer Networks",
          "Operating Systems"
        ],
      },
    ],
    quiz: {
      title: "GATE General Aptitude Quiz",
      questions: [
        {
          id: 1,
          question: "A number is increased by 20% and then decreased by 20%. The net change is:",
          options: ["0%", "4% decrease", "4% increase", "10% decrease"],
          answer: 1, // index of the correct option
          topic: "Percentage Change"
        },
        {
          id: 2,
          question: "If a person walks at 4 km/hr, he is late by 10 minutes. If he walks at 5 km/hr, he arrives 5 minutes early. The distance to be walked is:",
          options: ["3 km", "4 km", "5 km", "6 km"],
          answer: 2,
          topic: "Time and Distance"
        },
        {
          id: 3,
          question: "In a certain code, 'RIVER' is written as '31251', and 'OCEAN' is written as '46758'. How is 'CROW' written in that code?",
          options: ["7316", "7361", "7631", "3716"],
          answer: 0,
          topic: "Coding and Decoding"
        },
        {
          id: 4,
          question: "Find the odd one out: 12, 16, 20, 24, 28, 32",
          options: ["12", "20", "28", "32"],
          answer: 3,
          topic: "Number Series"
        },
      ],
    },
  },
  
   cat: {
    syllabus: [{ section: "Verbal Ability & Reading Comprehension (VARC)", topics: ["Reading Comprehension", "Para Jumbles"] }, { section: "Data Interpretation & Logical Reasoning (DILR)", topics: ["Bar Graphs", "Caselets"] }, { section: "Quantitative Aptitude (QA)", topics: ["Arithmetic", "Algebra", "Geometry"] }],
    studyMaterial: [{ id: 1, title: "VARC: RC Passages Strategy Guide", url: "#", type: "PDF" }, { id: 2, title: "How to Solve DILR Sets - Video Series", url: "#", type: "Video" }],
    previousPapers: [{ id: 1, title: "CAT 2024 Question Paper", url: "#", year: "2024" }, { id: 2, title: "CAT 2023 Question Paper", url: "#", year: "2023" }],
    announcements: ["CAT 2025 Registration deadline extended to Sep 30, 2025.", "Admit Cards for CAT 2025 will be available from Oct 25, 2025."],
  },
  quizzes: {
    gate: {
      title: "GATE CS Mini Quiz",
      questions: [
        { id: 1, question: "Time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: 1, topic: "Algorithms" },
        { id: 2, question: "Which of these is not an OS?", options: ["Windows", "Linux", "Oracle", "macOS"], answer: 2, topic: "Operating System" },
        { id: 3, question: "What is the full form of SQL?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Log", "System Query Log"], answer: 0, topic: "Databases" },
      ]
    },
    // ✨ ADDED CAT QUIZ DATA
    cat: {
      title: "CAT Mini Quiz",
      questions: [
        { id: 1, question: "A man buys an item for Rs. 27.50 and sells it for Rs. 28.60. Find his gain percent.", options: ["2%", "3%", "4%", "5%"], answer: 2, topic: "Quantitative Aptitude" },
        { id: 2, question: "Find the odd one out from the options.", options: ["Circle", "Square", "Triangle", "Cube"], answer: 3, topic: "Logical Reasoning" },
        { id: 3, question: "The phrase 'All that glitters is not gold' is an example of a:", options: ["Metaphor", "Simile", "Proverb", "Paradox"], answer: 2, topic: "Verbal Ability" },
      ]
    }
  },
  
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('homepage');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [quizResultDetails, setQuizResultDetails] = useState(null);
  const [gateActiveTab, setGateActiveTab] = useState('syllabus');

  const getQuizAnalysis = (correctAnswers, wrongAnswers) => {
    const suggestions = {};
    wrongAnswers.forEach(q => {
      const topic = hardcodedData.gate.quiz.questions.find(item => item.id === q.id)?.topic;
      if (topic) {
        suggestions[topic] = (suggestions[topic] || 0) + 1;
      }
    });
    return Object.keys(suggestions).map(topic => ({
      topic,
      count: suggestions[topic],
      suggestion: `Review your understanding of ${topic}. Focus on core concepts and practice similar problems.`,
    }));
  };

  const handleQuizSubmit = () => {
    const totalQuestions = hardcodedData.gate.quiz.questions.length;
    let correctCount = 0;
    const wrongAnswers = [];

    hardcodedData.gate.quiz.questions.forEach(q => {
      const selectedIndex = quizAnswers[q.id];
      if (selectedIndex !== undefined && selectedIndex === q.answer) {
        correctCount++;
      } else {
        wrongAnswers.push(q);
      }
    });

    const scorePercentage = (correctCount / totalQuestions) * 100;
    const resultDetails = {
      correctCount,
      totalQuestions,
      wrongAnswers,
      suggestions: getQuizAnalysis(null, wrongAnswers),
    };

    setQuizScore(scorePercentage);
    setQuizResultDetails(resultDetails);
    setShowQuizResult(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResult(false);
    setQuizScore(null);
    setQuizResultDetails(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    resetQuiz();
    setGateActiveTab('syllabus');
  };

  const ExamPreparation = () => (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">Exam Preparation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {['JEE', 'GATE', 'CAT', 'NEET', 'UPSC'].map(exam => (
          <button
            key={exam}
            onClick={() => handlePageChange('gate')}
            className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
                        ${exam === 'GATE' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}
          >
            <div className="font-bold text-lg">{exam}</div>
          </button>
        ))}
        <button
          onClick={() => handlePageChange('gate')}
          className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white text-gray-800 border border-gray-200"
        >
          <div className="font-bold text-lg">Other</div>
        </button>
      </div>
    </div>
  );

  const QuizPage = () => {
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

  const GateExamPage = () => (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">GATE Exam</h2>
      <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setGateActiveTab('syllabus')}
            className={`px-4 py-2 font-semibold rounded-full transition-all duration-300
                        ${gateActiveTab === 'syllabus' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Syllabus
          </button>
          <button
            onClick={() => setGateActiveTab('material')}
            className={`px-4 py-2 font-semibold rounded-full transition-all duration-300
                        ${gateActiveTab === 'material' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Study Material
          </button>
          <button
            onClick={() => setGateActiveTab('papers')}
            className={`px-4 py-2 font-semibold rounded-full transition-all duration-300
                        ${gateActiveTab === 'papers' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Previous Papers
          </button>
          <button
            onClick={() => setGateActiveTab('announcements')}
            className={`px-4 py-2 font-semibold rounded-full transition-all duration-300
                        ${gateActiveTab === 'announcements' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Updates
          </button>
          <button
            onClick={() => handlePageChange('gate_quiz')}
            className="px-4 py-2 font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
          >
            Take Quiz
          </button>
        </div>
        <div>
          {gateActiveTab === 'syllabus' && (
            <div className="space-y-4">
              {hardcodedData.gate.syllabus.map((section, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{section.section}</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {gateActiveTab === 'material' && (
            <div className="grid md:grid-cols-2 gap-4">
              {hardcodedData.gate.studyMaterial.map(item => (
                <a key={item.id} href={item.url} className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm">
                  <div className={`p-2 rounded-full ${item.type === 'PDF' ? 'bg-red-500' : 'bg-blue-500'}`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.type === 'PDF' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      )}
                    </svg>
                  </div>
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
          {gateActiveTab === 'papers' && (
            <div className="grid md:grid-cols-2 gap-4">
              {hardcodedData.gate.previousPapers.map(paper => (
                <a key={paper.id} href={paper.url} className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm">
                  <div className="p-2 rounded-full bg-indigo-500">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.835 5.515 9.49 5.253 8 5.253c-3.132 0-5.714 2.544-5.714 5.688 0 3.143 2.582 5.687 5.714 5.687 1.49 0 2.835-.262 4-.753m0-13a6.76 6.76 0 014-1.253c3.132 0 5.714 2.544 5.714 5.688 0 3.143-2.582 5.687-5.714 5.687a6.76 6.76 0 01-4-1.253" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold text-gray-800">{paper.title}</p>
                    <p className="text-sm text-gray-500">{paper.year}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
          {gateActiveTab === 'announcements' && (
            <div className="space-y-4">
              {hardcodedData.gate.announcements.map((announcement, index) => (
                <div key={index} className="p-4 rounded-xl bg-blue-50 text-blue-800 border-l-4 border-blue-500 shadow-sm">
                  <p className="font-semibold">{announcement}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Homepage = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20 px-4 rounded-xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Learn Smarter, Not Harder
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Your personalized platform for academic excellence and exam success.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handlePageChange('gate')}
              className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Learning
            </button>
            <button
              onClick={() => handlePageChange('coming_soon')}
              className="bg-transparent text-white font-bold px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105"
            >
              Get a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="p-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">Our Main Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            onClick={() => handlePageChange('exam_prep')}
            className="group cursor-pointer bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 15h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Exam Preparation</h3>
            <p className="text-gray-600 text-sm">Target your specific exams with curated study materials, practice papers, and mock tests.</p>
          </div>
          <div
            onClick={() => handlePageChange('coming_soon')}
            className="group cursor-pointer bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.03 12.03 0 003 9c0 5.591 3.824 10.29 9 11.696 5.176-1.406 9-6.105 9-11.696a12.03 12.03 0 00-.382-2.816z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">Plague Check</h3>
            <p className="text-gray-600 text-sm">Ensure your work is original with our powerful plagiarism detection tool.</p>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="p-6 bg-gray-50 rounded-xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">Latest Educational News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hardcodedData.news.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Chatbot Placeholder */}
      <div className="p-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">Smart Chatbot</h2>
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-gray-200">
          <div className="h-64 flex flex-col justify-end overflow-hidden mb-4">
            <div className="text-center text-gray-400 italic">Chatbot UI Placeholder</div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-grow p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button className="bg-indigo-600 text-white p-4 rounded-full hover:bg-indigo-700 transition-all shadow-md">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="p-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">Read Our Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hardcodedData.blogs.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
              <p className="text-gray-400 text-xs">By {post.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ComingSoonPage = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8 rounded-xl shadow-xl bg-white max-w-md mx-auto">
        <svg className="w-24 h-24 mx-auto text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Coming Soon</h1>
        <p className="text-gray-600 text-lg">
          We're working hard to bring this feature to you. Please check back later!
        </p>
        <button
          onClick={() => handlePageChange('homepage')}
          className="mt-6 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition-all"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'homepage':
        return <Homepage />;
      case 'exam_prep':
        return <ExamPreparation />;
      case 'gate':
        return <GateExamPage />;
      case 'gate_quiz':
        return <QuizPage />;
      case 'coming_soon':
        return <ComingSoonPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased">
      <style>{`
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      <script src="https://cdn.tailwindcss.com"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md rounded-b-xl py-4 px-6 md:px-12 mb-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button onClick={() => handlePageChange('homepage')} className="text-2xl font-bold text-indigo-600">
            SmartEd
          </button>
          <div className="hidden md:flex items-center gap-6 text-gray-600 font-semibold">
            <button onClick={() => handlePageChange('homepage')} className="hover:text-indigo-600 transition-colors">Home</button>
            <button onClick={() => handlePageChange('exam_prep')} className="hover:text-indigo-600 transition-colors">Exam Prep</button>
            <button onClick={() => handlePageChange('coming_soon')} className="hover:text-indigo-600 transition-colors">Plague Check</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow">Login</button>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

{/* Footer */}
<footer className="bg-gray-900 text-gray-300 py-8 mt-12 rounded-t-xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
    {/* Branding / Copyright */}
    <p className="text-sm">&copy; 2023 SmartEd. All rights reserved.</p>

    {/* Quick Links */}
    <div className="flex gap-4 flex-wrap justify-center md:justify-end">
      <a href="/about" className="hover:text-white transition-colors">About</a>
      <a href="/contact" className="hover:text-white transition-colors">Contact</a>
      <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
    </div>

    {/* Social Icons */}
    <div className="flex gap-3 justify-center md:justify-end mt-4 md:mt-0">
      <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.555 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.919 4.919 0 004.588 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.788-.023-1.176-.069a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.213-.004-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
        </svg>
      </a>
      <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.762 2.24 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75S5.534 5.25 6.5 5.25 8.25 6.034 8.25 7s-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.08-.021-2.469-1.504-2.469-1.504 0-1.734 1.176-1.734 2.394v4.575h-3v-9h2.884v1.233h.041c.402-.762 1.384-1.565 2.847-1.565 3.045 0 3.607 2.005 3.607 4.61v4.722z" />
        </svg>
      </a>
      <a href="https://github.com" className="hover:text-white transition-colors" aria-label="GitHub">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.205 11.365.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.478 11.478 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.479 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.898-.014 3.293 0 .32.218.694.825.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z" />
        </svg>
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default App;
