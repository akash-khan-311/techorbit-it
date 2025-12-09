"use client";
import React from "react";

interface FieldProps {
  label?: string;
  htmlFor?: string;
  children: React.ReactElement<{ id?: string }>;
  error?: { message?: string };
  required?: boolean;
  className?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  children,
  htmlFor,
  error,
  required,
  className,
}) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label htmlFor={id} className={`${className} text-sm font-medium `}>
          {label}
          {required ? (
            <span className="text-red-600"> *</span>
          ) : (
            <span className=""> (Optional)</span>
          )}
        </label>
      )}

      {React.cloneElement(children, {
        id,
      })}

      {!!error && (
        <p className="text-red-600 text-sm" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};

function getChildId(child: React.ReactElement<{ id?: string }>) {
  return child?.props?.id;
}

export default Field;
