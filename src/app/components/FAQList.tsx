'use client';
import { useState } from 'react';
import Dropdown from './Dropdown';

interface FAQListProps {
  questionList: {
    question: string;
    answer: string;
  }[];
}

const FAQList: React.FC<FAQListProps> = ({ questionList }) => {
  const [openDropdown, setOpenDropdown] = useState<string | number | null>(null);

  const handleOpen = (id: string | number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="flex flex-col max-w-[1400px] self-center gap-8">
      <p className="font-bold">Preguntas frecuentes (FAQ)</p>
      <div className="flex gap-4">
        <div className="flex m:hidden flex-col gap-4 lg:gap-8">
          {questionList.map((question, index) => (
            <Dropdown
              key={index}
              isOpen={openDropdown === index}
              onOpen={() => handleOpen(index)}
              boldTitle={question.question}
              description={question.answer}
              textOnly
            />
          ))}
        </div>
        <div className="hidden m:flex gap-4 lg:gap-8">
          <div className="flex flex-col gap-4 lg:gap-8">
            {questionList.map((question, index) =>
              index % 2 === 1 ? (
                <Dropdown
                  key={index}
                  isOpen={openDropdown === index}
                  onOpen={() => handleOpen(index)}
                  boldTitle={question.question}
                  description={question.answer}
                  textOnly
                />
              ) : null
            )}
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            {questionList.map((question, index) =>
              index % 2 === 0 ? (
                <Dropdown
                  key={index}
                  isOpen={openDropdown === index}
                  onOpen={() => handleOpen(index)}
                  boldTitle={question.question}
                  description={question.answer}
                  textOnly
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQList;
