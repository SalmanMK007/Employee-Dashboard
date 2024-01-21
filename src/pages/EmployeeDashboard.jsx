import React from 'react'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'
import Cards from '../components/Cards'


import Announcement from '../components/Announcement';
import ReportingSourceCode from '../components/ReportingSourceCode';

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <HeaderBanner />
      <Cards />
      <Announcement />
      <ReportingSourceCode />
    </>
  )
}

export default EmployeeDashboard