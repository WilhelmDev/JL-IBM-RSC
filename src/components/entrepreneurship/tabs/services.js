'use client'
import Select from 'react-select'
import { getAllServices, getAminities, getProps, getServices } from '@/core/infrastructure/services/tab-agent.service'
import { useEffect, useState } from 'react'


export default function ServicesTab({updateStepFour}) {
  const [services, setServices] = useState([])
  const [additionals, setAdditionals] = useState([])
  const [servicesChecked, setServicesChecked] = useState([])
  const [additionalsChecked, setAdditionalsChecked] = useState([])

  useEffect(() => {
    if (services.length === 0) {
      const fetchServices = async () => {
        try {
          const { services } = await getAllServices()
          setServices(services)
        } catch (error) {
          setServices([{label: 'No encontrado', value: 0 }])
        }
      }
      fetchServices()
    }
    if (additionals.length === 0) {
      const fetchServices = async () => {
        try {
          const { additionals } = await getAllServices()
          setAdditionals(additionals)
        } catch (error) {
          setAdditionals([{label: 'No encontrado', value: 0 }])
        }
      }
      fetchServices()
    }
  }, [])

  useEffect(() => {
    updateStepFour({
      servicesChecked,
      additionalsChecked
    })
  }, [servicesChecked, additionalsChecked])

  const updateServices = (id) => {
    const existInArray = servicesChecked.some((el) => el === Number(id))
    if (existInArray) {
      const filtredData = servicesChecked.filter((el) => el !== Number(id))
      setServicesChecked(filtredData)
    } else {
      setServicesChecked([...servicesChecked, Number(id)])
    }
  }

  const updateAdditionals = (id) => {
    const existInArray = additionalsChecked.some((el) => el === Number(id))
    if (existInArray) {
      const filtredData = additionalsChecked.filter((el) => el !== Number(id))
      setAdditionalsChecked(filtredData)
    } else {
      setAdditionalsChecked([...additionalsChecked, Number(id)])
    }
  }

  return (
    <form className="form-style1" id='entrepreneurship-tab-four'>
      <div className="row mb-3">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb10">Servicios</label>
        </div>
        <div className="col-12">
          <div className='row'>
            {
              services && services.map((el) => (
                <div className="col-2 mb-2" key={el.value}>
                  <div className='check-item' key={el.value} >
                    <input type="checkbox" name={`ckeck-service-${el.name}`} id={`ckeck-service-${el.value}`} 
                    value={el.value}
                    onChange={(e) => updateServices(e.target.value)}
                    checked={servicesChecked.some((id) => id === el.value)}
                    />
                    <span>{el.label}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* end row */}
      <div className="row mb-3">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb10">Adicionales</label>
        </div>
        <div className="col-12">
          <div className="row">
          {
            additionals && additionals.map((add) => (
              <div className="col-2" key={add.id}>
                <label className='title-add mb-1'>{add.title}</label>
                {
                  add.services && add.services.map((service) => (
                    <div className='check-item mb-2' key={service.id}>
                      <input type="checkbox" name={`ckeck-service-${service.name}`} id={`ckeck-service-${service.value}`}
                      value={service.value}
                      onChange={(e) => updateAdditionals(e.target.value)}
                      checked={additionalsChecked.some((id) => id === service.value)}
                      />
                      <span>{service.label}</span>
                  </div>
                  ))
                }
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </form>
  )
}
