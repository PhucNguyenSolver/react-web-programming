import { useState, useEffect } from 'react'
import TestCard from "./TestCard";
import TestHeader from "./TestHeader";
import TestPagination from './TestPagination';

export default function News () {  

  return (<>
    <TestHeader />
    <TestPagination itemsPerPage={9}/> 
  </>)
}