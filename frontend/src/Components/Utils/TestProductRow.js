import TestCard from './TestCard'

export default function TestProductRow() {
  // <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
  
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
          { [1,2,3,4,5,6,7,8].map((item) => (
            <div class="col px-4 py-2 p-sm-3 p-md-4">
              <TestCard item={null}/> 
            </div> 
          ))}
      </div> 
    </div> 
  );
}
