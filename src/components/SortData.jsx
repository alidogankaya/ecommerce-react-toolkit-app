import React from 'react'

const SortData = ({setShort}) => {
    return (
        <div className="flex justify-end items-center px-1 my-3 md:h-1/6">

            <select  onChange={e=>setShort(e.target.value)}   className=' bg-gray-400 rounded-full p-2 text-white' name="" id="">

                <option disabled value="">Seçiniz</option>
                <option  value="artan">Artan</option>
                <option value="azalan">Azalan</option>

            </select>

        </div>
    )
}

export default SortData