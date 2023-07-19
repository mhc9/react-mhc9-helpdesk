import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const ModalAddItemDesc = ({ isShow, onHide, onConfirm }) => {
    const [description, setDescription] = useState('');

    return (
        <Modal
            show={isShow}
            onHide={onHide}
            size='xl'
        >
            <Modal.Header closeButton>
                <Modal.Title>เพิ่มรายละเอียด</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="border flex justify-center">
                    <textarea
                        rows="10"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                    ></textarea>
                </div>
                <div className="mt-2">
                    <button
                        type="button"
                        className="btn btn-outline-primary float-right"
                        onClick={() => {
                            onConfirm(description);
                            onHide();
                        }}>
                        ตกลง
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalAddItemDesc