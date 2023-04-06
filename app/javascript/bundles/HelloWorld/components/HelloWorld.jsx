import PropTypes from 'prop-types';
import React from 'react';

const HelloWorld = ({name}) => {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
