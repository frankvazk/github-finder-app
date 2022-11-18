import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <div
      className={`mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      <div className="alert alert-error text-white">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="mr-3 h-6 w-6 stroke-current"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>

            <path
              stroke="#B91C1C"
              strokeWidth="2"
              d="M8 8l8 8M16 8l-8 8"
            ></path>
          </svg>
          <strong>{alert?.msg}</strong>
        </div>
      </div>
    </div>
  );
};

export default Alert;
