'use client'
import Image from 'next/image'
import Select from "react-select";
import React, { useEffect, useState } from 'react'
import MapReferences from '../tab-agent/MapReferences'
import { idGenerator } from '@/utilis/markers'
import { Localizacion } from '@/utilis/positions'
import { Types, customLabels } from '@/data/selects';

export default function ReferencePoint({updateStepTwo}) {
  const [show, setShow] = useState(false)
  const [references, setReferences] = useState([])
  const [reference, setReference] = useState({})
  const [name, setName] = useState('')
  const [type, setType] = useState({label: '', value: ''})
  const [description, setDescription] = useState('')
  const [logo, setLogo] = useState('')
  const [link, setLink] = useState('')
  const [ubication, setUbication] = useState('Marcador')
  const [markers, setMarkers] = useState([{
    id: idGenerator(),
    position: Localizacion.buenosAires
  }])
  const [lastMark, setLastMark] = useState({})

  const initialRef = {
    id: idGenerator(),
    name: 'Nombre del punto',
    type: 'Tipo de referencia',
    description: 'descripcion del punto',
    logo: 'Logo?',
    ubication: 'Marcador'
  }
  const initialMark = {
    id: idGenerator(),
    position: Localizacion.buenosAires
  }

  const handleShow = () => {
    setShow(!show)
  }

  const updatePos = (data) => {
    setLastMark(data)
  }

  const resetForm = () => {
    setName('')
    setDescription('')
    setLink('')
    setType({label: '', value: ''})
    setUbication('')
    setLogo('')
  }

  const addReference = () => {
    if (reference.name) {
      setReferences([...references, {
        id: idGenerator(),
        name,
        description,
        ubication: lastMark,
        logo,
        type: type.label,
        link
      }])
      setMarkers([...markers, initialMark])
      resetForm()
    }
    setShow(true)
    setReference(initialRef)
  }

  const deleteRef= (refId, markId) => {
    // reference
    let refs = references
    refs = refs.filter((ref) => ref.id !== refId)
    setReferences(refs)
    // Mark
    let marks = markers
    marks = markers.filter((mark) => mark.id !== markId)
    setMarkers(marks)
  }

  useEffect(() => {
    if (!lastMark.id) {
      const last = markers.slice(-1)[0]
      setLastMark(last)
    }
    if (!(lastMark.id === markers.slice(-1)[0].id)) {
      const last = markers.slice(-1)[0]
      setLastMark(last)
    }
  }, [markers, lastMark])

  useEffect(() => {
    updateStepTwo({
      references
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [references])
  
  const handleUpload = (files) => {
    let newImages = '';

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages = e.target.result
        setLogo(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        {
          show && <MapReferences markers={markers} last={lastMark} updatePos={updatePos} />
        }
      </div>
      <div className="col-12 mt-3">
        <div className='table-responsive'>
          <table className="table custom-table">
            <thead>
              <tr>
                <th scope="col" >Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Logo</th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td onClick={() => addReference()}>
                Agregar nuevo Punto
                <i className="fa fa-plus-circle" aria-hidden="true" style={{marginLeft: '5px'}}></i>
              </td>
            </tr>
              {
                reference.name && (
                  <tr>
                    <td>
                      <input 
                      type="text" value={name} onChange={(e) => setName(e.target.value)} 
                      placeholder='Nombre del punto'/>
                    </td>
                    <td style={{minWidth: '15rem'}}>
                      <Select options={Types}
                      formatGroupLabel={customLabels} placeholder={'Seleccion'}
                      defaultValue={type} value={type.value === '' ? '' : type}
                      onChange={(e) => setType(e)}
                      className="custom-react_select over"
                      classNamePrefix="select"
                      />
                    </td>
                    <td>
                      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                      placeholder='descripcion del punto'/>
                    </td>
                    <td>
                      <label htmlFor="logo-upload" className='custom-file-upload'> { logo ? 'Cambiar Logo' : 'Cargar Logo'}</label>
                      <input type="file" id='logo-upload'
                      multiple={false}
                      onChange={(e) => handleUpload(e.target.files)}
                      placeholder='Logo?'/>
                    </td>
                    <td onClick={() => handleShow()}>
                      {ubication}
                    </td>
                    <td>
                      <input type="text" value={link} onChange={(e) => setLink(e.target.value)}
                      placeholder='Link?'/>
                    </td>
                    <td>
                      {/* <span className='icons-container'>
                        <Image src={'/images/custom/pencil.svg'} alt='pencil' height={30} width={30} className='icon'/>
                        <Image src={'/images/custom/trash.svg'} alt='pencil' height={30} width={30} className='icon'/>
                      </span> */}
                    </td>
                  </tr>
                )
              }
              {
                references && references.map((ref) => (
                  <tr key={ref.id}>
                    <td >{ref.name}</td>
                    <td>{ref.type}</td>
                    <td>{ref.description}</td>
                    <td>{ref.logo && <Image src={ref.logo} height={40} width={40} alt='logo' />}</td>
                    <td>{ref.ubication.position}</td>
                    <td>{ref.link}</td>
                    <td>
                    <span className='icons-container'>
                      <Image src={'/images/custom/pencil.svg'} alt='pencil' height={30} width={30} className='icon'/>
                      <Image src={'/images/custom/trash.svg'} alt='pencil' height={30} width={30} className='icon' 
                      onClick={() => deleteRef(ref.id, ref.ubication.id)} />
                    </span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
