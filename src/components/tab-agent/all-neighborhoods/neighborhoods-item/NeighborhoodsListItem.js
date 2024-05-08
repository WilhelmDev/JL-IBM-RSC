import React from "react";
import Details from "./Details";
import PriceXOperation from "./PriceXOperation";
import Requests from "./Requests";
import LastAction from "./LastAction";
import FavShared from "./FavShared";
import Actions from "./Actions";

const NeighborhoodsListItem = ({ neighborhood }) => {
  return (
    <tr className="list-item">
      {/*Begin property and details section*/}
      <Details
        name={neighborhood.name}
        type={neighborhood.type}
        locality={neighborhood.locality}
      />
      {/*End property and details section*/}

      {/*Begin price x operation section*/}
      <PriceXOperation
        properties={neighborhood.properties}
        enterprises={neighborhood.enterprises}
      />
      {/*End price x operation section*/}

      {/*Begin requests section*/}
      <Requests
        visits={neighborhood.visits}
        swap={neighborhood.swap}
        valuation={neighborhood.valuation}
        lastRequest={neighborhood.lastRequest}
      />
      {/*End requests section*/}

      {/*Begin last action section*/}
      <LastAction lastAction={neighborhood.lastAction} />
      {/*End last action section*/}

      {/*Begin favorite and shared section*/}
      <FavShared
        favorites={neighborhood.favorites}
        shared={neighborhood.shared}
      />
      {/*End favorite and shared section*/}

      {/*Begin actions (delete, edit, shared) section*/}
      <Actions />
      {/*End actions (delete, edit, shared) section*/}
    </tr>
  );
};

export default NeighborhoodsListItem;
