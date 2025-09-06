import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  resize = true,
  className = '',
  ...props
}, ref) => {
  const hasError = !!error;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        className={`
          w-full px-4 py-3 rounded-xl border transition-all duration-200
          ${hasError
            ? 'border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
          }
          bg-white dark:bg-slate-700 text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          focus:ring-2 focus:ring-offset-0
          disabled:opacity-50 disabled:cursor-not-allowed
          ${resize ? 'resize-y' : 'resize-none'}
          ${className}
        `}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;