import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

CatetgoryItem.propTypes = {
  category: PropTypes.object,
};

function CatetgoryItem({ category = {} }) {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CatetgoryItem;
