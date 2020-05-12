import React from "react";
import PropTypes from 'prop-types';

import '../../styles/item-box.css';

const ItemBox = props => {
    const { alt, icon, name } = props;
    return (
      <div className="col-sm-5 about-items shadow p-3">
        <img
        src={icon}
        alt={alt}
        />
        <h3>{name}</h3>
      </div>
    );
};

ItemBox.displayName = "ItemBox";

ItemBox.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.object,
  alt: PropTypes.string,
  name: PropTypes.string
};

ItemBox.defaultProps = {
  description: "",
  icon: "",
  alt: "",
  name: ""
};

export default ItemBox;
