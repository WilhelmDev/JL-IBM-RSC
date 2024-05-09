import React from "react";
import Details from "./Details";
import PriceXOperation from "./PriceXOperation";
import Requests from "./Requests";
import LastAction from "./LastAction";
import FavShared from "./FavShared";
import Actions from "./Actions";
import { Neighborhood } from "@/core/domain/responses/neighborhood";

interface propsItem {
  neighborhood: Neighborhood
}

const NeighborhoodsListItem = ({ neighborhood }: propsItem) => {
  return (
    <tr className="list-item">
      {/*Begin property and details section*/}
      <Details
        name={neighborhood.title}
        type={neighborhood.type}
        locality={neighborhood.locality_title}
      />
      {/*End property and details section*/}

      {/*Begin price x operation section*/}
      <PriceXOperation
        properties={neighborhood.meta.dependencies.real_states_amount}
        enterprises={neighborhood.meta.dependencies.entreprenureships_amount}
      />
      {/*End price x operation section*/}

      {/*Begin requests section*/}
      <Requests
        visits={neighborhood.meta.requests.views}
        swap={neighborhood.meta.requests.rating}
        valuation={neighborhood.meta.requests.exchange}
        lastRequest={'12/01/2024'}
      />
      {/*End requests section*/}

      {/*Begin last action section*/}
      <LastAction lastAction={neighborhood.meta.latest_actions.pop()} />
      {/*End last action section*/}

      {/*Begin favorite and shared section*/}
      <FavShared
        favorites={neighborhood.meta.shared_favorites.favorites}
        shared={neighborhood.meta.shared_favorites.shared}
      />
      {/*End favorite and shared section*/}

      {/*Begin actions (delete, edit, shared) section*/}
      <Actions />
      {/*End actions (delete, edit, shared) section*/}
    </tr>
  );
};

export default NeighborhoodsListItem;
