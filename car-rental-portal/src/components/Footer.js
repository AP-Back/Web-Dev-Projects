import React from 'react';
import ReactPaginate from "react-paginate";

function Footer({setPageNumber}) {

  const pageCount = 10;

  const changePage = ({selected})=>{
    setPageNumber(selected+1);
  }

  return (
    <div className="bg-blue-50 rounded-xl shadow-lg m-3 p-3 flex">
        <div className='w-full flex justify-between'>
          <div className='font-light text-base'>6 from 60</div>
          <div>
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"flex gap-5"}
              previousLinkClassName={"bg-blue-50 px-3 rounded-md"}
              nextLinkClassName={"bg-blue-50 px-3 rounded-md"}
              disabledClassName={"bg-blue-50 px-3 rounded-md"}
              activeClassName={"bg-blue-500 px-3 rounded-md text-white"}
            />
          </div>     
        </div>
    </div>
  )
}

export default Footer