import React, { useState, useEffect } from 'react';

const PresenceSensorComponent = () => {
  const [isPersonPresent, setIsPersonPresent] = useState(false);

  useEffect(() => {
    // Assume there's an API or SDK for Aqara (this is hypothetical)
    // You would need to replace these functions with actual Aqara API calls.

    // Function to fetch presence status
    const fetchPresenceStatus = async () => {
      try {
        // Example: Call Aqara API to get presence status
        const fetchPresenceStatus = async () => {
          try {
            // Example: Call Home Assistant API to get presence status
            const response = await fetch('http://IP_ADDRESS:8123/api/');
            const data = await response.json();
            const presenceStatus = data.state === 'on'; // Adjust this based on your device attributes
            setIsPersonPresent(presenceStatus);
          } catch (error) {
            console.error('Error fetching presence status:', error);
          }
        };
        
        const presenceStatus = await AqaraApi.getPresenceStatus();
        setIsPersonPresent(presenceStatus);
      } catch (error) {
        console.error('Error fetching presence status:', error);
      }
    };

    // Initial fetch
    fetchPresenceStatus();

    // Set up periodic presence checks (every 5 seconds in this example)
    const presenceCheckInterval = setInterval(() => {
      fetchPresenceStatus();
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(presenceCheckInterval);
  }, []); // Run effect only on mount and unmount

  return (
    <div className='app-container'>
      <h1>Presence Sensor</h1>
      <h1>CAll SomeoneFor Help</h1>
      <p>Person is {isPersonPresent ? 'present' : 'not present'}.</p>
    </div>
  );
};

export default PresenceSensorComponent;
