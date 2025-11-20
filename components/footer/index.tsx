import React from 'react'
import FeaturesSection from './featuresSection'
import FooterSection from './footerSection'
import SubscribeForm from './subscribeForm'

export default function Footer() {
  return (
        <section className='w-full'>

    <SubscribeForm/>
    <FeaturesSection/>

    <footer>
<FooterSection/>
    </footer>

        </section>
  )
}
