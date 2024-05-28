// import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  type: PropTypes.oneOf(["primary", "position", "submit", "back"]),
};

// onClick: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.oneOf([null]), // Allow null as well
//   ]),

export default Button;
