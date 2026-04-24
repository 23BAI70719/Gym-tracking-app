import React from "react";
export default function FormInput({ label, id, type = "text", error, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-300">{label}</label>}
      <input id={id} type={type} className={`input-field ${error ? "border-red-500 focus:ring-red-500" : ""}`} {...props} />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
