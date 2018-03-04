
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="option modal"
    onRequestClose={props.CloseModal}
  >
    <p> modal content </p>
    {props.selectedOption && <p> {props.selectedOption} </p>}
    <button onClick={props.CloseModal}> Close </button>
  </Modal>
);

export default OptionModal;