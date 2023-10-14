import React from 'react'


// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header({searchTerm, setSearchTerm}) {
  return (
    <div className="bg-blue-50 rounded-xl shadow-lg m-3 p-3 flex">
        <div className='bg-white rounded-xl shadow-md'>
          <input 
            type="text" 
            placeholder='Search...' 
            className='p-2 rounded-xl w-96' 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <button 
            className=''
          >
            <SearchOutlinedIcon className='text-gray-800'/>
          </button>
        </div>
    </div>
  )
}

export default Header