import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import AddNewAddressPopup from './addNewAddressPopup';

function AddNewAddressButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowPopup(true)} className='address-popup-btn blue-colour-para bg-white border-0 ' >
        <Plus color={'#035C94'} size={22} /> Add New Address
      </Button>
      {showPopup && <AddNewAddressPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default AddNewAddressButton;
