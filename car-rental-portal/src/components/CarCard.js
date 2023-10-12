import React from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ElectricCarOutlinedIcon from '@mui/icons-material/ElectricCarOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const CarCard = ({car}) => {
    const {
        car_name,
        year_of_buying,
        num_rented_before,
        fuel_type,
        mileage,
        car_type,
        rent,
        image
    } = car

  return (
    <div className="m-4 p-2 rounded-xl shadow-xl bg-blue-50">
        <div className="w-full p-1">
            <img 
                src={image} 
                alt={car_name}
                className="w-full rounded-md h-80"
            />
        </div>
        <div className="mt-3">
            <div className="px-2 flex justify-between items-center">
                <div className='text-2xl font-semibold'>{car_name}</div>
                <div className="m-0 px-2 py-0 h-[25px] border-2 border-dashed border-blue-500 rounded-md font-light text-sm flex justify-center items-center">
                    {year_of_buying}
                </div>
            </div>
            <div className="px-5 my-5 grid grid-cols-2 justify-between items-center">
                <div className='flex gap-2 my-2'>
                    <PeopleAltOutlinedIcon className="text-blue-500"/>
                    <div>{num_rented_before} People</div>
                </div>
                <div className='flex gap-2 my-2'>
                    <LocalGasStationOutlinedIcon className="text-blue-500"/>
                    <div>{fuel_type}</div>
                </div>
                <div className='flex gap-2 my-2'>
                    <SpeedOutlinedIcon className="text-blue-500"/>
                    <div>{mileage}</div>
                </div>
                <div className='flex gap-2 my-2'>
                    <ElectricCarOutlinedIcon className="text-blue-500"/>
                    <div>{car_type}</div>
                </div>
            </div>
            <hr />
            <div className='flex my-2 px-5 justify-between'>
                <div className=''>
                    <span className="font-medium text-2xl">{rent}</span>
                    /month
                </div>
                <div className="flex gap-2 items-center">
                    <FavoriteBorderOutlinedIcon className='text-blue-500'/>
                    <button className="bg-blue-500 text-white font-normal rounded-lg py-1 px-2">Rent Now</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CarCard;
