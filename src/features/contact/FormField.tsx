"use client";

import React from 'react';


interface FormFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: () => void;
  error?: string;
  label: string;
  rows?: number;
}

// Reusable form field component with integrated error handling
export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  label,
  rows,
}) => {
  // Determine field type based on rows prop presence
  const isTextarea = rows !== undefined;

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          name={name}
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          suppressHydrationWarning
          className={`peer block w-full px-3 py-2 bg-gray-50 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          suppressHydrationWarning
          className={`peer block w-full px-3 py-2 bg-gray-50 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder={label}
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-2 -top-2.5 bg-white px-1 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
