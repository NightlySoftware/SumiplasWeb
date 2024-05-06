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
    <div className="flex flex-col gap-8">
      <p className="font-bold">Preguntas frecuentes (FAQ)</p>
      <div className="flex flex-col gap-8 p-4">
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
    </div>
  );
};

export default FAQList;
