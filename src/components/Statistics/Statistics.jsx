import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ options, total, positivePercentage }) {
  return (
    <div>
      {Object.entries(options).map((option) => (
        <p className={s.option} key={option[0]}>
          {option[0]}: {option[1]}
        </p>
      ))}
      <p className={s.total}>Total: {total()}</p>
      <p className={s.percentage}>
        Positive feedback: {positivePercentage() + "%"}
      </p>
    </div>
  );
}
Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
