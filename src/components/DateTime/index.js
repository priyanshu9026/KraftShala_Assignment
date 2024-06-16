import React, { useState, useEffect } from 'react';

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="text-center py-4">
      <p className="text-lg">{formattedDate}</p>
      <p className="text-lg">{formattedTime}</p>
    </div>
  );
}

export default DateTime;