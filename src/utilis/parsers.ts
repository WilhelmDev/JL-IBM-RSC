import { Period, PropertyForm } from "@/core/domain/form"
import { LocalityForm } from "@/core/domain/forms/localities"
import { NeighborhoodForm } from "@/core/domain/forms/neighborhood"
import { NeighborhoodParsedForm, ParsedLocalityForm, ParsedPropertyForm, PeriodsPayload, PeriodsResponse } from "@/core/domain/parsed"
import { Amenities } from "@/core/domain/responses"
import { Meta } from "@/core/domain/responses/localities"

export const parseLocation = function (data: any) {
  let parsed: ParsedLocalityForm
  const { stepOne, stepTwo, stepThree } = data as LocalityForm
  parsed = {
    title: stepOne.title,
    partido_id: stepOne.partido.value,
    lat: stepOne.position[0],
    long: stepOne.position[1],
    video_url: stepThree.videos.link,
    reference_points: stepTwo.references.map((reference) => {
      return {
        name: reference.name,
        type: reference.type,
        description: reference.description,
        map_address: `${reference.ubication[0]}, ${reference.ubication[1]}`,
        link: reference.link,
        logo: reference.logo
          ?
          {
            front_page: true,
            image: reference.logo
          }
          : ''
      }
    }),
    media: {
      images: stepThree.photos.uploadedImages.map((photo, i) => {
        return {
          front_page: (stepThree.videos.portada.value && (Number(stepThree.videos.portada.value) === i)),
          image: photo
        }
      })
    },
    front_page: stepThree.videos.front.label
  }

  return parsed
}

export const parseNeighborhood = function (data: any) {
  let parsed: NeighborhoodParsedForm
  const { stepOne, stepTwo, stepThree, stepFour } = data as NeighborhoodForm
  parsed = {
    title: stepOne.title,
    ref_code: stepOne.refCode,
    type: stepOne.type.value,
    description: stepOne.description,
    expensas_amount: Number(stepOne.expenses),
    expensas_date: stepOne.expensesDate,
    state: stepOne.state.value,
    phone: stepOne.phone,
    zonificacion: stepOne.zonification,
    internal_notes: stepOne.notes,
    location: {
      country: stepTwo.country.value,
      province: stepTwo.province.value,
      partido_id: stepTwo.partido.value,
      locality_id: stepTwo.locality.value,
      type: stepTwo.barrio.value,
      street_or_uf: stepTwo.street,
      map_selection: `${stepTwo.position[0]}, ${stepTwo.position[1]}`,
      latitude: stepTwo.position[0],
      longitude: stepTwo.position[1]
    },
    details: {
      neighborhood_surface: +stepThree.surface,
      lots_amount: +stepThree.lotes,
      lots_built_year: +stepThree.lotesConst,
      available_lots: +stepThree.available,
      capital_distance: +stepThree.capDistance,
      lots_max_size: +stepThree.maxSize,
      lots_min_size: +stepThree.minSize,
      props: stepThree.propsChecked,
      amenidades: stepThree.amenitiesChecked,
      services: stepThree.servicesChecked
    },
    media: {
      front_page: stepFour.videoData.front.value,
      video_link: stepFour.videoData.link,
      images: stepFour.photos.map((photo, i) => {
        return {
          front_page: (stepFour.videoData.portada.value && (Number(stepFour.videoData.portada.value) === i)),
          image: photo
        }
      }),
      documents: [
        {
          name: 'Plano aéreo',
          document: stepFour.airDoc.length > 0 ? stepFour.airDoc[0] : ''
        },
        {
          name: 'Logo del barrio',
          document: stepFour.logoDoc.length > 0 ? stepFour.logoDoc[0] : ''
        },
        {
          name: 'Reglamento',
          document: stepFour.rulesDoc.length > 0 ? stepFour.rulesDoc[0] : ''
        }
      ]
    }
  }
  return parsed
}

export const parseEntrepreneurship = function (data: any) {
  let parsed
  let { stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix } = data

  stepOne = {
    title: stepOne.title,
    neighborhood_id: stepOne.neighborhood.value.toString(),
    ref_code: stepOne.refCode,
    description: stepOne.description,
    expensas_amount: stepOne.expenses,
    expensas_date: stepOne.expensesDate,
    state: stepOne.state.value,
    internal_notes: stepOne.internalNotes,
    owner_phone_number: stepOne.phoneOwner
  }
  stepTwo = {
    location: {
      partido_id: stepTwo.partido.value.toString(),
      locality_id: stepTwo.locality.value.toString(),
      street_or_uf: stepTwo.street,
      latitude: stepTwo.position[0].toString(),
      longitude: stepTwo.position[1].toString()
    }
  }
  stepThree = {
    details: {
      land_sourface: stepThree.totalSurface,
      covered_sourface: stepThree.surfaceCovered,
      semiCoveredSurface: stepThree.semiCoveredSurface,
      units_amount: stepThree.units,
      taken_units_amount: stepThree.unitsTaken,
      zonification: stepThree.zonification,
      covered_garage: stepThree.covertGarage,
      semicovered_garage: stepThree.semiCobertGarage,
      uncovered_garage: stepThree.uncobertGarage,
      capital_distance: stepThree.capitalDistance,
      financing: stepThree.financing,
      echo_construction: stepThree.ecoConstruction,
      inmediate_posession: stepThree.posetionInmediate,
      amenidades: stepThree.amenitiesChecked
    }
  }
  stepFour = {
    services: [
      ...stepFour.servicesChecked,
      ...stepFour.additionalsChecked
    ]
  }
  stepFive = {
    offers: {
      titles: {
        display_title_1: stepFive.types.type1,
        display_title_2: stepFive.types.type2,
        display_title_3: stepFive.types.type3,
        display_title_4: stepFive.types.type4,
        display_title_5: stepFive.types.type5,
      },
      elements: stepFive.elements.map((element) => {
        const parsed = {
          type: element.name,
          description: element.description,
          price_amount_1: element.price1,
          price_amount_2: element.price2,
          price_amount_3: element.price3,
          price_amount_4: element.price4,
          price_amount_5: element.price5,
          units_amount: element.units,
          rooms_amount: element.rooms,
          bathrooms_amount: element.baths,
          total_sourface: element.totalSurface,
          covered_sourface: element.coveredSurface,
          semicovered_sourface: element.semicoveredSurface
        }
        return parsed
      })
    }
  }
  stepSix = {
    media: {
      front_page: stepSix.videoData.front || 'Galeria',
      video_url: stepSix.videoData.link,
      gallery: stepSix.photos.length === 0 ? [] : stepSix.photos.map((photo, index) => {
        const portada = stepSix.videoData.portada === undefined ? 0 : stepSix.videoData.portada.value
        if (stepSix.photos.length > 0) {
          const isValid = stepSix.photos.length >= portada + 1
          const parsedPhoto = {
            front_page: isValid ? portada === index : index === 0,
            image: photo
          }
          return parsedPhoto
        }
      }),
      properties: [
        {
          name: stepFive.offers.elements[0].type,
          images: stepSix.uploadedImages.map((image) => {
            const parsed = {
              front_page: true,
              image
            }
            return parsed
          })
        },
        {
          name: stepFive.offers.elements[1].type,
          images: stepSix.uploadedImages2.map((image) => {
            const parsed = {
              front_page: true,
              image
            }
            return parsed
          })
        },
        {
          name: stepFive.offers.elements[2].type,
          images: stepSix.uploadedImages3.map((image) => {
            const parsed = {
              front_page: true,
              image
            }
            return parsed
          })
        },
        {
          name: stepFive.offers.elements[3].type,
          images: stepSix.uploadedImages4.map((image) => {
            const parsed = {
              front_page: true,
              image
            }
            return parsed
          })
        },
      ],
      documents: {
        pdf_catalog: stepSix.videoData.catalog.length > 0 ? stepSix.videoData.catalog[0] : '',
        entreprenureship_map: stepSix.videoData.map.length > 0 ? stepSix.videoData.map[0] : '',
      }
    }
  }

  parsed = {
    ...stepOne,
    ...stepTwo,
    ...stepThree,
    ...stepFour,
    ...stepFive,
    ...stepSix
  }

  return parsed
}

export const parseProperty = function (data: any) {
  let parsed: ParsedPropertyForm
  const { stepOne, stepTwo, stepThree, stepFour, stepFive } = data as PropertyForm
  parsed = {
    // Begin Step One
    description: stepOne.description,
    title: stepOne.tittle,
    status: stepOne.state.label,
    classifications: stepOne.operation.map((el) => {
      return +el.value
    }),
    type: stepOne.type.label,
    ref_code: stepOne.refCode,
    price: {
      retail: {
        usd: Number(stepOne.sellPrice.usd),
        arg: Number(stepOne.sellPrice.arg)
      },
      anual_rent: {
        usd: Number(stepOne.rentPrice.usd),
        arg: Number(stepOne.sellPrice.arg)
      }
    },
    expensas: {
      amount_usd: Number(stepOne.expenses.usd),
      amount_arg: Number(stepOne.expenses.arg),
      referenceDate: stepOne.expensesDate
    },
    owner: stepOne.owner,
    phone: stepOne.phone,
    internal_notes: stepOne.internalNotes,
    // End Step One

    // Begin Step Two
    location: {
      partido_id: Number(stepTwo.partido.value),
      locality_id: Number(stepTwo.locality.value),
      neighborhood_id: Number(stepTwo.barrio.value),
      street_or_uf: stepTwo.street,
      latitude: stepTwo.position.lat,
      longitude: stepTwo.position.lng
    },
    // End Step Two

    // Begin Step Three
    surface_area: {
      land_source: +stepThree.surface,
      covered_surface: +stepThree.coveredSurface,
      semicovered_surface: +stepThree.semiCoveredSurface,
      age: +stepThree.antique,
      front: +stepThree.front,
      depth: +stepThree.back,
      zonification: stepThree.zonification,
      garage_covered: stepThree.coberts,
      garage_semicovered: stepThree.semiCobert,
      garage_uncovered: stepThree.uncobert,
      property_status: stepThree.state,
      orientation: stepThree.orientation,
      disposition: stepThree.disposition,
      rooms: +stepThree.ambient,
      floors: +stepThree.plants,
      bedroom: +stepThree.rooms,
      bathrooms: +stepThree.baths,
      en_suite_bathrooms: +stepThree.bathSuit,
      toilet: +stepThree.tollet,
      basement: +stepThree.sotano,
      spaces: stepThree.spaces.map(el => el.value)
    },
    // End Step Three

    // Begin Step Four
    services: [...stepFour.additionalsChecked, ...stepFour.servicesChecked],
    // End Step Four

    // Begin Step Five
    media: {
      video_url: stepFive.videoData.link,
      front_page: stepFive.videoData.front.label,
      gallery: stepFive.photos.map((photo, i) => {
        return {
          front_page: (stepFive.videoData.portada.value && (Number(stepFive.videoData.portada.value) === i)),
          image: photo
        }
      }),
      documents: [
        {
          name: stepFive.plantas.planta1,
          document: stepFive.docPlant1.length > 0 ? stepFive.docPlant1[0] : ''
        },
        {
          name: stepFive.plantas.planta2,
          document: stepFive.docPlant2.length > 0 ? stepFive.docPlant2[0] : ''
        },
        {
          name: stepFive.plantas.planta3,
          document: stepFive.docPlant3.length > 0 ? stepFive.docPlant3[0] : ''
        }
      ]
    },
    // End Step Five
    periods: parsePeriods(stepOne.periods)
  }
  return parsed
}

export const parseAmenities = function (data: Amenities) {
  const parsed = data.data.map((el) => {
    let parseData = {
      label: el.name,
      value: el.id
    }
    return parseData
  })
  return parsed
}

export const parseServices = function (data) {
  const parsed = data.map((el) => {
    let parseData = {
      label: el.name,
      value: el.id
    }
    return parseData
  })
  return parsed
}

export const parseLocalities = function (data) {
  const parsed = data.map((el) => {
    let parseData = {
      label: el.title,
      value: el.id
    }
    return parseData
  })
  return parsed
}

export const parseAditionals = function (data) {
  const parsed = data.map((el) => {
    const services = el.services.map((service) => {
      const parsedService = {
        label: service.name,
        value: service.id
      }
      return parsedService
    })
    const parsedAditional = {
      title: el.name,
      services
    }
    return parsedAditional
  })
  return parsed
}

export const parsePeriods = function (periods: Period[]) {
  const parsed: PeriodsPayload = {
    data: periods.map((period) => {
      return {
        title: period.name,
        price_usd: +period.priceUsd,
        price_arg: +period.priceArs,
      }
    })
  }
  return parsed
}

export const parsePeriodsForm = function (data: PeriodsResponse) {
  const parsed = data.data.map((period) => period.id)
  return parsed
}

export const parsePagination = function (meta: Meta, target: string) {
  const { current_page, from, to, total, links, last_page } = meta
  const TotalPages = links.length
  const range = `${from} - ${to} de ${total} ${target}`
  let pages
  if (TotalPages < 4) {
    pages = {
      allPages: [
        {
          label: '<',
          active: false,
          arrow: true
        },
        {
          label: Number(links[1].label) || 1,
          active: true,
          arrow: false
        },
        {
          label: '>',
          active: false,
          arrow: true
        },
      ]
    }
  } else {
    pages = {
      allPages: links.map((page, i) => {
        if (i === 0) {
          return {
            label: '<',
            active: false,
            arrow: true
          }
        }
        if (i === TotalPages - 1) {
          return {
            label: '>',
            active: false,
            arrow: true
          }
        }
        return {
          label: Number(page.label),
          active: page.active,
          arrow: false
        }
      }),
    }
  }
  return { ...pages, range, lastPage: last_page }
}