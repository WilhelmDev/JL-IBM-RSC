import React from "react";

const LastAction = ({ lastAction }) => {
  return (
    <td className="last-action">
      <span>{lastAction}</span>
    </td>
  );
};

export default LastAction;
