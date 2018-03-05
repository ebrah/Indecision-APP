
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="option modal"
    onRequestClose={props.CloseModal}
    closeTimeoutMS={200}
    className="Modal"
  >
    <p className="Modal__title"> modal content </p>
    {props.selectedOption && <p className="Modal__body"> {props.selectedOption} </p>}
    <button className="button" onClick={props.CloseModal}> Close </button>
  </Modal>
);

export default OptionModal;