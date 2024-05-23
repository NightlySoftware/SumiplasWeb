'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  name: string;
  hasError?: boolean;
  value: string;
  errorMessage?: string;
  helpText?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
  onClick: (name: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  required = false,
  name,
  hasError = false,
  value,
  errorMessage,
  helpText,
  autoFocus = false,
  disabled = false,
  readOnly = false,
  onChange,
  onBlur,
  onClick,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(name, newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur(name, e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onClick(name);
  };

  return (
    <div className="relative">
      <div className="flex justify-between gap-2">
        {label && (
          <motion.label
            htmlFor={name}
            className={cn('text-sm font-medium', {
              'text-red-500': hasError,
              'text-gray-700': !hasError,
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {label}
          </motion.label>
        )}

        {hasError && (
          <AnimatePresence>
            <motion.div
              className="text-xs text-red-500"
              transition={{ duration: 0.1 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {errorMessage}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <motion.input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        className={cn('flex w-full px-5 py-2.5 rounded-lg border placeholder:text-neutral-400 focus:outline-spblue', {
          'border-red-500': hasError,
          'border-spblack': !hasError,
          'bg-gray-100': disabled || readOnly,
        })}
        initial={{ borderColor: hasError ? 'transparent' : 'transparent' }}
        animate={{ borderColor: hasError ? 'red' : 'black' }}
        transition={{ duration: 0.3 }}
      />

      {helpText && (
        <AnimatePresence>
          <motion.p
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {helpText}
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Input;
