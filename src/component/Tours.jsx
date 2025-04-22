import React from 'react'
import Heading from './Heading'
import ToursCard from './ToursCard'
import { tourscard } from '../data'

function Tours() {
  return (
    <section className="section" id="tours">
    <Heading btitle="featured" gtitle=" tours"/>

    <div className="section-center featured-center">
      
      {
        tourscard.map((item)=>(
          <ToursCard {...item}/>
        ))
      }

    </div>
  </section>
  )
}

export default Tours
