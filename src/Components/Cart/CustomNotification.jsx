import React from "react";

const Notification = ({ message }) => {
  if (!message) return null;  // Don't render if no message exists

  return (
    <div className="fixed top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

export default Notification;
