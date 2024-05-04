import React from 'react'
import Detail from './Detail';
import PriceXOperation from './PriceXOperation';
import LastAction from './LastAction';
import Requests from './Request';
import Action from './Action';
import ShareFav from './ShareFav';

export default function EntrepreneurshipTtem({ItemsData, handleChangeDelete}) {
  return (
    <tr className='list-item'>
        <Detail name = {ItemsData.title} code={ItemsData.ref_code} locality={ItemsData.location}/>

        <PriceXOperation properties={ItemsData.offers}/>

        <Requests />

        <LastAction />

        <ShareFav />

        <Action itemId = {ItemsData.id} action ={"entrepreneurship"} handleChangeDelete = {handleChangeDelete}/>
    </tr>
  )
}
