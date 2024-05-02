import React from "react";

export default function Filters({ content }) {
  return (
    <>
      <div className="btn-filter">
        <button className="btn-drop">{content}<i class="fa-solid fa-chevron-down"></i></button>
        <ul className="dropdown">
          <li><button>{content}</button></li>
          <li><button>{content}</button></li>
          <li><button>{content}</button></li>
        </ul>
      </div>
      {/* <label className="btn-filter">
        {content}<i class="fa-solid fa-chevron-down"></i>
      <select  value=""> 
      </select>
      </label> */}
    </>
  )
}

export function Tags({ nametag }) {
  return (
    <div className="tag">
      <div className="name-tag">
        {nametag}
      </div>
      <buttun className="close">
        <i class="fa-solid fa-xmark"></i>
      </buttun>
    </div>
  )
}