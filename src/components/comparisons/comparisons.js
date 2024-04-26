import Image from 'next/image'
import React from 'react'
import CardPorperty from './atoms/card-property'

export default function Comparisons(props) {

  return (
    <>
      <div className='property column'>
        <CardPorperty property={props.property}/>
        <div className='table-column'>
            <div>{props.typeProperty ? props.typeProperty : "-"}</div>
            <div>{props.typeNeighborhood ? props.typeNeighborhood : "-"}</div>
            <div>{props.price ? props.price : "-"}</div>
            <div>{props.sales ? props.sales : "-"}</div>
            <div>{props.rent ? props.rent : "-"}</div>
            <div>{props.temporalyRent ? props.temporalyRent : "-"}</div>
            <div>{props.expense ? props.expense : "-"}</div>
            <div>{props.totalArea ? props.totalArea : "-"}</div>
            <div>{props.coveredArea ? props.coveredArea : "-"}</div>
            <div>{props.semiCoveredArea ? props.semiCoveredArea : "-"}</div>
            <div>{props.uncoveredArea ? props.uncoveredArea : "-"}</div>
            <div>{props.parking ? "Si" : "No"}</div>
            <div>{props.covered ? props.covered : "-"}</div>
            <div>{props.semiCovered ? props.semiCovered : "-"}</div>
            <div>{props.uncovered ? props.uncovered : "-"}</div>
            <div>{props.floors ? props.floors : "-"}</div>
            <div>{props.environments ? props.environments : "-"}</div>
            <div>{props.bathrooms ? props.bathrooms : "-"}</div>
            <div>{props.antiquity ? props.antiquity : "-"}</div>
            <div>{props.suitBathrooms ? props.suitBathrooms : "-"}</div>
            <div>{props.toilet ? props.toilet : "-"}</div>
            <div>{props.internet ? props.internet : "-"}</div>
            <div>{props.laundry ? "Si" : "No"}</div>
            <div>{props.quincho ? props.quincho : "-"}</div>
            <div>{props.grill ? "Si" : "No"}</div>
            <div>{props.home ? "Si" : "No"}</div>
            <div>{props.pool ? "Si" : "No"}</div>
            <div>{props.wiring ? "Si" : "No"}</div>
            <div>{props.internalLocation ? "Si" : "No"}</div>
            <div>{props.perimeterLocation ? "Si" : "No"}</div>
            <div>{props.pavement ? "Si" : "No"}</div>
            <div>{props.gas ? "Si" : "No"}</div>
            <div>{props.dvh ? "Si" : "No"}</div>
            <div>{props.lagoonView ? "Si" : "No"}</div>
            <div>{props.golfView ? "Si" : "No"}</div>
        </div>
      </div>
    </>
  )
}
