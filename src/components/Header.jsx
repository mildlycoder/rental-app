import React, {userState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full px-4 py-2'>
        <div className='flex items-center gap-10'>
            <Link to='/' className='flex items-center gap-3 text-2xl text-violet-800'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(139 92 246)" className="w-10 h-10">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Estatery
            </Link>

            <div className='items-center gap-5 hidden md:flex'>
                <button className='px-4 py-2 rounded-md bg-purple-200 text-violet-700'>Rent</button>
                <button className='px-4 py-2 rounded-md hover:bg-purple-200 hover:text-violet-700 transition-all'>Buy</button>
                <button className='px-4 py-2 rounded-md hover:bg-purple-200 hover:text-violet-700 transition-all'>Sell</button>
                <button className='px-4 py-2 rounded-md flex gap-1'>
                    Manage Property
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className='px-4 py-2 rounded-md flex gap-1'>
                    Resources
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>

        <dir className='flex gap-5'>
            <button className='border-2 rounded-md border-purple-200 px-4 py-2 text-violet-700 hover:bg-purple-200 transition-all'>Login</button>
            <button className='px-4 py-2 rounded-md bg-purple-200 text-violet-700'>Sign up</button>
        </dir>
    </header>
  )
}

export default Header