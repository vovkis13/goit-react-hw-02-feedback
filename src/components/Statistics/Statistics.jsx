import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ options, total, positivePercentage }) {
  return (
    <div>
      {Object.entries(options).map((option) => (
        <p className={s.value} key={option[0]}>
          {option[0]}:{option[1]}
        </p>
      ))}
      <p>Total:{total()}</p>
      <p>Positive feedback:{positivePercentage()}</p>
    </div>
  );
}
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.func,
  positive: PropTypes.func,
};
