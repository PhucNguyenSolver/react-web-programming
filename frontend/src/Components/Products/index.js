import Header from '../Utils/Header'
import Footer from '../Utils/Footer'

export default function Products () {  
  return (<>
    <h1>This is a header</h1>
    <Header />
    <TestHeader />
    <TestPagination itemsPerPage={9}/> 
    <Footer />
  </>)
}
