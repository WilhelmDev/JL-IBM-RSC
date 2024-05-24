import React from "react";
import NeighborhoodsListItem from "./neighborhoods-item/NeighborhoodsListItem";
import ListHeader from "./ListHeader";
import Loader from "@/components/common/Loader";

const NeighborhoodsList = ({ neighborhoods, loading }) => {
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
          { neighborhoods 
          ?
          neighborhoods.map((neighborhood) => (
            <NeighborhoodsListItem
              key={neighborhood.id}
              neighborhood={neighborhood}
            />
          ))
          : 'No se encontraron datos coincidentes'
          }
          
        </tbody>
        {/*End list body*/}
      </table>
      {
        loading &&
          <div className="d-flex align-items-center justify-content-center">
            <Loader size={100}/>
          </div>
      }
    </section>
  );
};

export default NeighborhoodsList;
