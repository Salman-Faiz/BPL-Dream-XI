import logo from '../assets/logo.png'
import coin from '../assets/coinIcon.png'

const Header = () => {
  return (
    <div className='flex md:justify-between  '>
      <img src={logo} alt='' />
      <div className='flex gap-2 text-xl font-semibold justify-end items-center'>
        <p>Home</p>
        <p>Fixture</p>

        <p>Terms</p>
        <p>Schedules</p>
        <button className='flex gap-2 justify-center items-center border rounded-lg px-3 py-1'><span className='font-semibold'>0</span>
          Coin <img className='w-8 rounded-full' src={coin} alt='' />
        </button>
      </div>
    </div>
  )
}

export default Header
