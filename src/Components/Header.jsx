import logo from '../assets/logo.png'
import coin from '../assets/coinIcon.png'
import { useContext } from 'react'
import { CricketersContext } from '../Context/Cricketers'

const Header = () => {
    const { freeCredit } = useContext(CricketersContext)
    
    return (
        <div className='sticky top-0 container mx-auto w-full flex md:justify-between px-4 pt-3 bg-white/75 backdrop-blur-sm  z-50 '>
            <img src={logo} alt='Logo' className='w-20' />
            
            <div className='flex gap-4 text-lg font-semibold justify-end items-center text-black'>
                <p className='cursor-pointer hover:text-yellow-500'>Home</p>
                <p className='cursor-pointer hover:text-yellow-500'>Fixture</p>
                <p className='cursor-pointer hover:text-yellow-500'>Terms</p>
                <p className='cursor-pointer hover:text-yellow-500'>Schedules</p>
                
                <button className='flex gap-2 items-center border border-yellow-500 rounded-lg px-3 py-1'>
                    <span className='font-semibold'>{freeCredit}</span>
                    Coin <img className='w-6 h-6 rounded-full' src={coin} alt='Coin Icon' />
                </button>
            </div>
        </div>
    )
}

export default Header
