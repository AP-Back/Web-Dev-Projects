import React, { useState, useEffect } from 'react';

// Import Data
import carsData from "../data/cars.json";

// Importing Components
import CarCard from './CarCard';

function Cars({pageNumber, searchTerm}) {

    const [ filteredCars, setFilteredCars ] = useState([]);
    const [ paginatededCars, setPaginatedCars ] = useState([]);
    const itemsPerPage = 6;

    function paginateData(data, currentPage, itemsPerPage) {
        const startIndex = (currentPage-1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }
    useEffect(()=>{
        const paginatedData = paginateData(carsData, pageNumber, itemsPerPage);
        setPaginatedCars( paginatedData );
    },[pageNumber, itemsPerPage]);

    useEffect(()=>{
        const filterCars = carsData.filter((car) =>
            car.car_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCars(filterCars);
    },[searchTerm]);

    const carsToDisplay = (searchTerm) ? filteredCars : paginatededCars;

    return (
        <div>
            <div className='bg-blue-50 m-2 grid grid-cols-3 gap-2 rounded-xl'>
                {carsToDisplay.map((car, index)=>{
                    return <CarCard car={car} key={index} />
                })}
            </div>
        </div>
    )
}

export default Cars