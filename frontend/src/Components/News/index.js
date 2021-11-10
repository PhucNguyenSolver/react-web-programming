import TestHeader from './TestHeader'
import TestPagination from './TestPagination'
import Header from '../Utils/Header'
import Footer from '../Utils/Footer'

export default function News () {  
  return (<>
    <h1>This is a header</h1>
    <Header />
    <TestHeader />
    <TestPagination itemsPerPage={9}/> 
    <Footer />
  </>)
}