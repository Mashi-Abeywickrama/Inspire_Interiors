import { Alert } from '@mui/material';
import useAlert from './useAlert';
import './../styles/alertpopus.css';


const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
        <>
        <div className='alert-custom-box '>
      <Alert
        severity={type}
        sx={{
          position: 'absolute',
          zIndex: 9999,
        }}
      >
        {text}
      </Alert>
      </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;