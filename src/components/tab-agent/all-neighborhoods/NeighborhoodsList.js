import React from "react";
import NeighborhoodsListItem from "./neighborhoods-item/NeighborhoodsListItem";
import ListHeader from "./ListHeader";

const NeighborhoodsList = ({ neighborhoods }) => {
  return (
    <section className="list-container">
      <table className="list-table">
        {/*Begin list header*/}
        <thead>
          <ListHeader />
        </thead>
        {/*End list header*/}
        {/*Begin list body*/}
        <tbody>
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodsListItem
              key={neighborhood}
              neighborhood={neighborhood}
            />
          ))}
        </tbody>
        {/*End list body*/}
      </table>
    </section>
  );
};

export default NeighborhoodsList;
