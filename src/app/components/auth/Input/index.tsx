'use client';

import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  prefix?: string;
  value?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, id, type = 'text', placeholder, error, prefix, value, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className={`mt-1 ${prefix ? 'flex rounded-md shadow-sm' : ''}`}>
          {prefix && <span className={`focus:border-[#B181D5] focus:outline-none focus:ring-[#B181D5] inline-flex items-center rounded-l-md border pl-3 text-gray-500 sm:text-sm
                ${error ? 'border-red-500' : value ? 'border-[#B181D5]' : 'border-gray-300'}
                border-r-0 shadow-sm
            `}>{prefix}</span>}
          <input
            id={id}
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`block w-full border px-3 py-2 focus:border-[#B181D5] focus:outline-none focus:ring-[#B181D5]
              ${error ? 'border-red-500' : value ? 'border-[#B181D5]' : 'border-gray-300'} 
              ${prefix ? 'border-l-0' : 'rounded-md'}
                shadow-sm
            `}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = 'FormInput'; // Diperlukan untuk forwardRef dengan TypeScript

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  value?: string;
  linkText?: string;
  onLinkClick?: any; // Event handler untuk klik link
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, id, placeholder, error, onLinkClick, linkText, value, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative mt-1">
          <input
            id={id}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            className={`block w-full rounded-md border px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-purple-500 
              ${error ? 'border-red-500' : value ? 'border-[#B181D5]' : 'border-gray-300'}
              shadow-sm
            `}
            {...props}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223C4.883 6.57 6.49 5.25 8.4 4.504c1.909-.746 3.999-.745 5.906 0 1.91.746 3.516 2.067 4.422 3.719M12 14.25a2.25 2.25 0 002.25-2.25A2.25 2.25 0 0012 9.75a2.25 2.25 0 00-2.25 2.25A2.25 2.25 0 0012 14.25zM9.657 15.657l-2.122 2.122m9.829-4.95a9.162 9.162 0 011.988-2.122"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5c4.481 0 8.192 3.505 9.429 8.253A9.425 9.425 0 0112 19.5c-4.481 0-8.192-3.505-9.429-8.253A9.425 9.425 0 0112 4.5zM12 9.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"
                />
              </svg>
            )}
          </button>
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
        {linkText && (
          <div className="text-right">
            <button
              type="button"
              onClick={() => onLinkClick()}
              className="text-[12px] font-[400] text-[#596780] hover:text-purple-800 focus:outline-none"
            >
              {linkText}
            </button>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';


export { PasswordInput, TextInput }

