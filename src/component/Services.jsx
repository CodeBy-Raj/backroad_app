import React from 'react'
import Heading from './Heading'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <section className="section services" id="services">
   <Heading btitle="our" gtitle=" services"/>

    <div className="section-center services-center">
      <ServicesCard title="saving money" details=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores, officia." icon="fas fa-wallet fa-fw"/>

     <ServicesCard title="endless hiking" icon="fas fa-socks fa-fw" details="jfkjashfkashkf f fjashjfsfsjfjslf"/>
     <ServicesCard title="amazing comfort" icon="fas fa-socks fa-fw" details="ldjfjlshfjjshfskfhsjkf jfhjksfhksf"/>

    </div>
  </section>
  )
}

export default Services
