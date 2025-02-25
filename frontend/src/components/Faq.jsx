import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState('question1');
  const toggleQuestion = (questionId) => {
    if (openQuestion === questionId) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(questionId);
    }
  };
  const faqItems = [
    {
      id: 'question1',
      question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
      answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
    },
    {
      id: 'question2',
      question: 'What is the minimum system configuration required?',
      answer: 'This information would be filled with the actual system requirements.'
    },
  ];

  const categories = [
    { id: 'eligibility', name: 'Eligibility', active: true },
    { id: 'how-to-use', name: 'How To Use?' },
    { id: 'terms', name: 'Terms & Conditions' }
  ];
  return (
    <div className=" mx-auto max-w-6xl px-4 py-8 hidden sm:block" id="faqs">
      <h1 className="text-center text-3xl font-bold mb-10">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`mb-3 p-4 rounded-md border ${
                category.active 
                  ? 'border-blue-500 bg-white shadow-md' 
                  : 'border-gray-300 bg-white'
              } text-center cursor-pointer transition-all`}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="md:w-2/3">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4 border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleQuestion(item.id)}
              >
                <span className="text-base font-medium text-blue-500">{item.question}</span>
                {openQuestion === item.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openQuestion === item.id && (
                <div className="pb-4 pr-4">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;