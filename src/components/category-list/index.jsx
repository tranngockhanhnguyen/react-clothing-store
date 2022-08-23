import React from "react";
import PropTypes from "prop-types";
import CatetgoryItem from "../category-item";
import "./styles.scss";

CategoryList.propTypes = {
  categories: PropTypes.array,
};

function CategoryList({ categories = [] }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CatetgoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
