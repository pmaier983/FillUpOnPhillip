import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const MessageContext = React.createContext();

const MessageContextProvider = ({ children }) => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(true);
  };

  return (
    <>
      {visible && <div>ALEEEERRRRTTTTT</div>}
      <MessageContext.Provider value={{ toggleTimedAlert: toggleVisibility }}>
        {children}
      </MessageContext.Provider>
    </>
  );
};

MessageContextProvider.propTypes = {
  children: PropTypes.node,
};

export default MessageContextProvider;
