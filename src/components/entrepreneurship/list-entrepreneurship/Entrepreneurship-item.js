import React from 'react'
import Detail from './Detail';
import PriceXOperation from './PriceXOperation';
import LastAction from './LastAction';
import Requests from './Request';
import Action from './Action';
import ShareFav from './ShareFav';

export default function EntrepreneurshipTtem() {
  return (
    <tr className='list-item'>
        <Detail />

        <PriceXOperation />

        <Requests />

        <LastAction />

        <ShareFav />

        <Action />
    </tr>
  )
}
