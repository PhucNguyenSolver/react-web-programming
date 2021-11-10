import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import TestCard from './TestCard';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {items} from './data'

/*
  Data model:
  { imgUrl, title, author, description, source, lastModified }
*/

function Items({currentItems}) {
  // TODO: add wrapper container to limit view width 
  
  return (
    <div class="container">
      {/* <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3"> */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          gutter="2rem"
        >
          <Masonry>
            {currentItems.map((item) => 
              <TestCard key={item.title} item={item}/>
            )}
          </Masonry>
        </ResponsiveMasonry>
      {/* </div>  */}
    </div> 
  );
}

export default function TestPagination({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // TODO: Fetch items from another resources.
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  
  // return <Items currentItems={currentItems} />;

  return (
    <div>
      <Items currentItems={currentItems} />
      <br/>
      <div class="d-flex justify-content-center">
        <ReactPaginate
          nextLabel="Tiếp >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="< Trước"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}