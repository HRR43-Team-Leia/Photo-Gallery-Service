import React from 'react';
import PropTypes from 'prop-types';

function Close({ isOpen, exitModal }) {
  return (
    <div>
      <button type="button" className="exit" onClick={() => { exitModal(); }}>
        &times;
      </button>
    </div>
  );
}

export default Close;
