'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

interface TextAreaProps {
  label?: string;
  placeholder: string;
  required?: boolean;
  name: string;
  hasError?: boolean;
  value: string;
  errorMessage?: string;
  helpText?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
  onClick: (name: string) => void;
}

export default function TextArea({
  label,
  placeholder,
  required = false,
  name,
  hasError = false,
  value,
  errorMessage,
  helpText,
  autoFocus = false,
  disabled = false,
  readOnly = false,
  size = 'md',
  onChange,
  onBlur,
  onClick,
}: TextAreaProps) {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    onChange(name, newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur(name, e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
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
        <AnimatePresence>
          {hasError && (
            <motion.div
              className="text-xs text-red-500"
              transition={{ duration: 0.1 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.textarea
        id={name}
        placeholder={placeholder}
        name={name}
        required={required}
        value={textValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        className={cn('w-full px-5 py-2.5 rounded-lg border placeholder:text-neutral-400 focus:outline-spblue', {
          'h-[46px] resize-none': size === 'sm',
          'h-48 resize-none': size === 'lg',
          'border-red-500': hasError,
          'border-spblack': !hasError,
          'bg-gray-100': disabled || readOnly,
        })}
        initial={{ borderColor: hasError ? 'transparent' : 'transparent' }}
        animate={{ borderColor: hasError ? 'red' : 'black' }}
        transition={{ duration: 0.3 }}
      ></motion.textarea>
      <AnimatePresence>
        {helpText && (
          <motion.p
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {helpText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
