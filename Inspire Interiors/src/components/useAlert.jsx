import { useContext } from 'react';
import AlertContext from '../constants/AuthContext';


const useAlert = () => useContext(AlertContext);

export default useAlert;