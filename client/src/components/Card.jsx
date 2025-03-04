import React from "react";

const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = "",
  onClick,
  hoverable = false,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        hoverable ? "hover:shadow-lg transition-shadow cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      {title && (
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="p-4">{children}</div>

      {footer && <div className="p-4 border-t bg-gray-50">{footer}</div>}
    </div>
  );
};

export default Card;
