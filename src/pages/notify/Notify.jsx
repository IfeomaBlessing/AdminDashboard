import React, { useState,useEffect } from 'react';
import './notify.css';
import { Data } from './Data';

const Notify = ({setUnreadMessages}) => {
  const [accordion, setAccordion] = useState([]);

  useEffect(() => {
    setUnreadMessages(lengthOfUnread());
  }, [accordion, setUnreadMessages]);


  const toggleAccordion = (id) => {
    setAccordion((prev) => {
      if (prev.includes(id)) {
        // If the accordion is already open, close it
        return prev.filter((accordionId) => accordionId !== id);
      } else {
        // If the accordion is closed, open it
        return [...prev, id];
      }
    });
  };

  const lengthOfUnread = () => {
    return Data.filter((x) => x.unRead && !accordion.includes(x.id)).length;
  
    
  };

  

  return (
    <div className='container'>
      <h2 className="header">Messages</h2>
      <main className='notify-page'>
        {Data.map((x, id) => (
          <div className={`message ${accordion.includes(id) ? 'read' : ''}`} key={x.id}>
            <section onClick={() => toggleAccordion(id)}>
            <div className='message-content' >
              <p>
                <strong>{x.Name}</strong> {x.text}
              </p>
              {x.unRead && <div className={`unread ${accordion.includes(id) ? 'active' : ''}`}></div>}
            </div>
            <small>{x.timestamp}</small>
            </section>

            {x.privateMessage && (
              <div className={`content ${accordion.includes(id) ? 'active' : ''}`}>
                {x.privateMessage}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Notify;
