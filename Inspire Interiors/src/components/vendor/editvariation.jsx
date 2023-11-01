import React,{useEffect, useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";

const EditVariation = ({Data}) => {

    const [updatedVariationData, setUpdatedVariationData] = useState({});

    useEffect(() => {
        setUpdatedVariationData({
          material: Data.material,
          color: Data.color,
          quantity: Data.quantity,
        });
      }, [Data]);

    const handleVariationEdit = (event, field) => {
        const { value } = event.target;
        setUpdatedVariationData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    const handleUpdate = async (e) => {
        e.preventDefault();

        const apiBaseURL = "http://localhost:8080";

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        if (updatedVariationData.material === undefined || updatedVariationData.material === null) {
            updatedVariationData.material = Data.material;
        }
        if (updatedVariationData.color === undefined || updatedVariationData.color === null) {
            updatedVariationData.color = Data.color;
        }
        if (updatedVariationData.quantity === undefined || updatedVariationData.quantity === null) {
            updatedVariationData.quantity = Data.quantity;
        }

        const updatedData = {
            variation_id: Data.variation_id,
            material: updatedVariationData.material,
            color: updatedVariationData.color,
            quantity: updatedVariationData.quantity,
        };

        axiosInstance.put(`/updatevariations/${Data.variation_id}`, updatedData)
            .then((response) => {
                console.log("Update Succesfully", response.data);
                setShow(false);
                window.location.reload();
            })
            .catch(error => {
                // Handle error response if needed
                console.error('Error updating variation:', error);
            });
        };

    // console.log(updatedData);

    return (
        <>
         <div>
            <button type="button" onClick={handleShow} className="add-btn h-50">Edit</button>

            <Modal 
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
            <Modal.Title>Edit Variation Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleUpdate}>
                <div className="d-flex flex-column mx-4 gap-3">
                <div className="mb-1">
                    <label>Material</label>
                    <input
                        type="text"
                        autoFocus
                        className="form-control Cabin-text"
                        value={updatedVariationData.material || ''}
                        onChange={(e) => handleVariationEdit(e, 'material')}
                        style={{ backgroundColor: "#F2FAFF" }}
                    ></input>
                </div>
                <div className="mb-1">
                    <label>Color</label>
                    <input
                        type="text"
                        className="form-control Cabin-text"
                        value={updatedVariationData.color || ''}
                        onChange={(e) => handleVariationEdit(e, 'color')}
                        style={{ backgroundColor: "#F2FAFF" }}
                    ></input>
                </div>
                <div className="mb-1">
                    <label>Quantity</label>
                    <input
                    type="number"
                    name="quantity"
                    className="form-control Cabin-text"
                    value={updatedVariationData.quantity || ''}
                    onChange={(e) => handleVariationEdit(e, 'quantity')}
                    style={{ backgroundColor: "#F2FAFF" }}
                    ></input>
                </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                <button
                    type="button"
                    className="withdraw-btn m-4"
                    onClick={handleClose}
                >
                    <Icon.PlusLg color="white" size={20} />
                    Discard Changes
                </button>
                <button type="submit" className="accept-btn m-4">
                    <Icon.PlusLg color="white" size={20} />
                    Save Changes
                </button>
                </div>
            </form>
            </Modal.Body>
            </Modal>
            </div>
        
        </>
    )
};

export default EditVariation;