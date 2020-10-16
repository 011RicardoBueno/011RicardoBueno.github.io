import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero-section'
import Portfolio from '../components/portfolio'
import ContactUs from '../components/contactUs'

import '../styles/style.scss'

export default function Home() {
  return (
  <Layout>
    <Hero/>
    <Portfolio/>
    <ContactUs />
  </Layout>
  )
}
