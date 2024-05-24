import React from "react";
import Image from "next/image";

const Actions = () => {
  return (
    <td className="actions">
      <div className="actions-container">
        <button>
          <Image
            src="/images/tab-agent/all-neighborhoods/delete.svg"
            width={18}
            height={18}
            className="image"
          />
        </button>
        <button>
          <Image
            src="/images/tab-agent/all-neighborhoods/edit.svg"
            width={18}
            height={18}
            className="image"
          />
        </button>
        <button>
          <Image
            src="/images/tab-agent/all-neighborhoods/share.svg"
            width={18}
            height={18}
            className="image"
          />
        </button>
      </div>
    </td>
  );
};

export default Actions;
