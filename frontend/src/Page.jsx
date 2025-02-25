import React from 'react'
import Bar from './components/Bar'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Refer from './components/Refer'
import Table from './components/Table'
import Faq from './components/Faq'
import ContactBanner from './components/Contact'
import Footer from './components/Footer'
import ChatButton from './components/Chatbox'

const Page = () => {
  return (
    <div>
      <Bar/>
      <Navbar/>
      <Banner/>
      <Refer/>
      <Table/>
      <Faq/>
      <ContactBanner/>
      <Footer/>
      <ChatButton/>
    </div>
  )
}

export default Page