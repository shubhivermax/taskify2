
import React, { useState, useEffect } from 'react';
import "./styles.css"

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(formattedTime);
    };

    updateClock(); // initial call
    const intervalId = setInterval(updateClock, 1000); // update every second

    return () => clearInterval(intervalId); // clean up on unmount
  }, []);

  return (
    <div className="clock">
    {time}
    </div>
  );
};


export default Clock;
