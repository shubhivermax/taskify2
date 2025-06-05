import React, { useState, useEffect } from 'react';
import './styles.css';

const IntentionBox = () => {
  const [intention, setIntention] = useState<string>('');
  const [storedIntention, setStoredIntention] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<string>(new Date().toLocaleDateString());

  useEffect(() => {
    const saved = localStorage.getItem("dailyIntention");
    const savedDate = localStorage.getItem("intentionDate");
    const today = new Date().toLocaleDateString();

    if (saved && savedDate === today) {
      setStoredIntention(saved);
    }
    const interval = setInterval(() => {
      const now = new Date().toLocaleDateString();
      if (now !== currentDate) {
        
        localStorage.removeItem("dailyIntention");
        localStorage.setItem("intentionDate", now);
        setStoredIntention(null);
        setCurrentDate(now);
      }
    }, 60000); // Check every 60 sec

    return () => clearInterval(interval); 
  }, [currentDate]);

  const handleSetIntention = () => {
    const today = new Date().toLocaleDateString();
    localStorage.setItem("dailyIntention", intention);
    localStorage.setItem("intentionDate", today);
    setStoredIntention(intention);
    setIntention('');
  };

  return (
    <div className="intention-box" style={{ marginTop: "26px" , marginBottom: "15px"}}>
      {storedIntention ? (
        <div className="stored-intention">
          🌱 Today's intention: {storedIntention}
        </div>
      ) : (
        <div className="set-intention">
          <input
            type="text"
            value={intention}
            onChange={(e) => setIntention(e.target.value)}
            placeholder="Set an intention for today..."
            style={{ border: "none",
    borderBottom: "2px solid gray",
    outline: "none",
    padding: "8px 0",
    width: "70%",
    fontSize: "16px" }}
          />
          <button className="setbutton" onClick={handleSetIntention}>
            Set Intention
          </button>
        </div>
      )}
    </div>
  );
};

export default IntentionBox;

/*style={{ marginLeft: "10px", padding: "10px 20px" }}*/