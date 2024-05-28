import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Actions = ({ editUrl='' }) => {

  const router = useRouter()
  const editContent = () => {
    router.push(editUrl)
    // console.log('hello')
  }
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
            onClick={editContent}
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
