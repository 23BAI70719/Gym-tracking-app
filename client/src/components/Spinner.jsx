import React from "react";
const Spinner = ({ fullScreen = false }) => {
  if (fullScreen) return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500" />
    </div>
  );
  return <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500" />;
};
export default Spinner;
