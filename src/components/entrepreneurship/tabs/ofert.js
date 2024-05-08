'use client'
import React, { useEffect, useState } from 'react'

export default function OffertsTab({updatePayments, updateStepFive}) {

  const baseProps = {
    name: '',
    description: '',
    price1: '',
    price2: '',
    price3: '',
    price4: '',
    price5: '',
    units: '',
    rooms: '',
    baths: '',
    totalSurface:'',
    coveredSurface: '',
    semicoveredSurface: ''
  }

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [type3, setType3] = useState('')
  const [type4, setType4] = useState('')
  const [type5, setType5] = useState('')
  const [item1, setItem1] = useState(baseProps)
  const [item2, setItem2] = useState(baseProps)
  const [item3, setItem3] = useState(baseProps)
  const [item4, setItem4] = useState(baseProps)

  useEffect(() => {
    updatePayments({
      type1,
      type2,
      type3,
      type4,
      type5
    })
  }, [type1, type2, type3, type4, type5])
  
  useEffect(() => {
    updateStepFive({
      elements: [
        item1,
        item2,
        item3,
        item4
      ]
    })
  }, [item1, item2, item3, item4])

  return (
    <div className='row' id='entrepreneurship-tab-five'>
      <div className='table-responsive'>
        <table className="table custom-table" id='table-offerts'>
          <tbody>
            <tr>
              <td>
              </td>
              <td>
                <input type="text" placeholder='Departamento' value={item1.name} onChange={(e) => setItem1({...item1, name: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Duplex' value={item2.name} onChange={(e) => setItem2({...item2, name: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monoambiente' value={item3.name} onChange={(e) => setItem3({...item3, name: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Tipo de propiedad' value={item4.name} onChange={(e) => setItem4({...item4, name: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
              </td>
              <td>
                <textarea className='large-input' type="text" placeholder='Breve descripción' value={item1.description} onChange={(e) => setItem1({...item1, description: e.target.value})} />
              </td>
              <td>
                <textarea className='large-input' type="text" placeholder='Breve descripción' value={item2.description} onChange={(e) => setItem2({...item2, description: e.target.value})} />
              </td>
              <td>
                <textarea className='large-input' type="text" placeholder='Breve descripción' value={item3.description} onChange={(e) => setItem3({...item3, description: e.target.value})} />
              </td>
              <td>
                <textarea className='large-input' type="text" placeholder='Breve descripción' value={item4.description} onChange={(e) => setItem4({...item4, description: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Un solo pago' value={type1} onChange={(e) => setType1(e.target.value)} />
              </td>
              <td>
                <input type="text" placeholder='10000' value={item1.price1} onChange={(e) => setItem1({...item1, price1: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='20000' value={item2.price1} onChange={(e) => setItem2({...item2, price1: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='30000' value={item3.price1} onChange={(e) => setItem3({...item3, price1: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item4.price1} onChange={(e) => setItem4({...item4, price1: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Dos pagos' value={type2}  onChange={(e) => setType2(e.target.value)} />
              </td>
              <td>
                <input type="text" placeholder='5000' value={item1.price2} onChange={(e) => setItem1({...item1, price2: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='10000' value={item2.price2} onChange={(e) => setItem2({...item2, price2: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item3.price2} onChange={(e) => setItem3({...item3, price2: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item4.price2} onChange={(e) => setItem4({...item4, price2: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Tipo 3 Editable' value={type3}  onChange={(e) => setType3(e.target.value)} />
              </td>
              <td>
                <input type="text" placeholder='Monto Editable' value={item1.price3} onChange={(e) => setItem1({...item1, price3: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='10000' value={item2.price3} onChange={(e) => setItem2({...item2, price3: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item3.price3} onChange={(e) => setItem3({...item3, price3: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item4.price3} onChange={(e) => setItem4({...item4, price3: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Tipo 4 Editable' value={type4}  onChange={(e) => setType4(e.target.value)}/>
              </td>
              <td>
                <input type="text" placeholder='Monto Editable' value={item1.price4} onChange={(e) => setItem1({...item1, price4: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='10000' value={item2.price4} onChange={(e) => setItem2({...item2, price4: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item3.price4} onChange={(e) => setItem3({...item3, price4: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item4.price4} onChange={(e) => setItem4({...item4, price4: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Tipo 5 Editable' value={type5}  onChange={(e) => setType5(e.target.value)}/>
              </td>
              <td>
                <input type="text" placeholder='Monto Editable' value={item1.price5} onChange={(e) => setItem1({...item1, price5: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='10000' value={item2.price5} onChange={(e) => setItem2({...item2, price5: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item3.price5} onChange={(e) => setItem3({...item3, price5: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Monto' value={item4.price5} onChange={(e) => setItem4({...item4, price5: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Cantidad de Unidades' disabled/>
              </td>
              <td>
                <input type="text" placeholder='N° de unidades disponibles' value={item1.units} onChange={(e) => setItem1({...item1, units: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='N° de unidades editable' value={item2.units} onChange={(e) => setItem2({...item2, units: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item3.units} onChange={(e) => setItem3({...item3, units: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item4.units} onChange={(e) => setItem4({...item4, units: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Habitaciones' disabled/>
              </td>
              <td>
                <input type="text" placeholder='0' value={item1.rooms} onChange={(e) => setItem1({...item1, rooms: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item2.rooms} onChange={(e) => setItem2({...item2, rooms: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item3.rooms} onChange={(e) => setItem3({...item3, rooms: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item4.rooms} onChange={(e) => setItem4({...item4, rooms: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Baños' disabled/>
              </td>
              <td>
                <input type="text" placeholder='0' value={item1.baths} onChange={(e) => setItem1({...item1, baths: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item2.baths} onChange={(e) => setItem2({...item2, baths: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item3.baths} onChange={(e) => setItem3({...item3, baths: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='0' value={item4.baths} onChange={(e) => setItem4({...item4, baths: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Superficie Total' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item1.totalSurface} onChange={(e) => setItem1({...item1, totalSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item2.totalSurface} onChange={(e) => setItem2({...item2, totalSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item3.totalSurface} onChange={(e) => setItem3({...item3, totalSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item4.totalSurface} onChange={(e) => setItem4({...item4, totalSurface: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Superficie Cubierta' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item1.coveredSurface} onChange={(e) => setItem1({...item1, coveredSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item2.coveredSurface} onChange={(e) => setItem2({...item2, coveredSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item3.coveredSurface} onChange={(e) => setItem3({...item3, coveredSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item4.coveredSurface} onChange={(e) => setItem4({...item4, coveredSurface: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
            <tr>
              <td>
                <input type="text" placeholder='Superficie Semi-Cubierta' disabled/>
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item1.semicoveredSurface} onChange={(e) => setItem1({...item1, semicoveredSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item2.semicoveredSurface} onChange={(e) => setItem2({...item2, semicoveredSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item3.semicoveredSurface} onChange={(e) => setItem3({...item3, semicoveredSurface: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='Mts2' value={item4.semicoveredSurface} onChange={(e) => setItem4({...item4, semicoveredSurface: e.target.value})} />
              </td>
            </tr>
            {/* End Row */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
