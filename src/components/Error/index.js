import React from 'react';

function Error({ message }) {
  return (
    <div className="text-center text-red-500">
      <p>{message}</p>
    </div>
  );
}

export default Error;