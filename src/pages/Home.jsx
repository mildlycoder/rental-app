import React, { useState } from 'react'
import data from "../../Data"
import PropertyCard from '../components/PropertyCard';
const Home = () => {
    const [propertyList, setPropertyList] = useState(data)
    const [locationFilter, setLocationFilter] = useState('');
    const [propertyTypeFilter, setPropertyTypeFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const filteredProperties = propertyList.filter(property => {
        const locationMatch = locationFilter.toLowerCase() === '' || property.location.toLowerCase().includes(locationFilter);
        const propertyTypeMatch = propertyTypeFilter.toLowerCase() === '' || property.propertyType.toLowerCase().includes(propertyTypeFilter);
        const priceMatch = priceFilter === '' || property.rent <= parseInt(priceFilter);
        const dateMatch = dateFilter === '' || (property.startDate <= new Date(dateFilter) && property.endDate >= new Date(dateFilter));

        return locationMatch && propertyTypeMatch && priceMatch && dateMatch;
    });

    const resetFilters = () => {
        setDateFilter('')
        setPriceFilter('')
        setLocationFilter('')
        setPropertyTypeFilter('')
    }

    return (
        <main className='text-black p-16'>
            <section>
                <div className='flex flex-col md:flex-row mb-8'>
                    <input
                        type='text'
                        className='px-4 py-4 md:border-l-2 text-xl w-full rounded-md'
                        placeholder='Location'
                        value={locationFilter}
                        onChange={e => setLocationFilter(e.target.value)}
                    />
                    <input
                        type='text'
                        className='px-4 py-4 md:border-l-2 text-xl w-full rounded-md'
                        placeholder='Property type'
                        value={propertyTypeFilter}
                        onChange={e => setPropertyTypeFilter(e.target.value)}
                    />
                    <input
                        type='number'
                        className='px-4 py-4 md:border-l-2 text-xl w-full rounded-md'
                        placeholder='Max Price'
                        value={priceFilter}
                        onChange={e => setPriceFilter(e.target.value)}
                    />
                    <input
                        type='date'
                        className='px-4 py-4 md:border-l-2 text-xl w-full rounded-md'
                        placeholder='Date'
                        value={dateFilter}
                        onChange={e => setDateFilter(e.target.value)}
                    />
                    <button onClick={resetFilters} className='bg-white border-r-2 md:ml-2 rounded-md p-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </section>

            <section className='grid md:grid-cols-3 gap-16'>
            {
                filteredProperties.map(property => (
                    <PropertyCard property={property}/>
                ))
            }
            </section>
        </main>
    )
}

export default Home