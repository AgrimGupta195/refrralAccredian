import React from 'react'
import Bar from './components/Bar'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Table from './components/Table'
import ReferralSection from './components/Refer'
import Footer from './components/Footer'
import Faq from './components/Faq'
import ContactBanner from './components/Contact'
import ChatButton from './components/Chatbox'
const App = () => {
  return (
    <div>
      <Bar/>
      <Navbar/>
      <Banner/>
      <ReferralSection/>
      <Table/>
      <Faq/>
      <ContactBanner/>
      <Footer/>
      <ChatButton/>
    </div>
  )
}

export default App