import { createContext, useMemo, useState } from 'react';

const ALERT_TIME = 3000;
const initialState = {
  text: '',
  type: '',
};

const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const setAlert = (text, type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText('');
      setType('');
    }, ALERT_TIME);
  };

const alertValue = useMemo(() => ({
    text,
    type,
    setAlert,
  }), [text, type]);
  return (
     <AlertContext.Provider value={alertValue}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;