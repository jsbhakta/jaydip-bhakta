import React from "react";
import PropTypes from 'prop-types';

import '../../styles/item-box.css';

const ItemBox = props => {
    const { alt, icon, name, onClick } = props;
    return (
      <button className="col-sm-5 about-items shadow p-3" onClick={() => {onClick(name)}}>
        <img
        src={icon}
        alt={alt}
        />
        <h3>{name}</h3>

      </button>
    );
};

ItemBox.displayName = "ItemBox";

ItemBox.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func
};

ItemBox.defaultProps = {
  alt: "",
  description: "",
  icon: "",
  name: "",
  onClick() {}
};

export default ItemBox;
