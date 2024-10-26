import './Banner.css'
import bannerImg from '../../assets/banner-main.png'
import { useContext } from 'react'
import { CricketersContext } from '../../Context/Cricketers'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Banner = () => {
  const { setFreeCredit } = useContext(CricketersContext)

  const handleFreeCredit = () => {
    const addMoney = 5000000
    setFreeCredit(prevMoney => {
      const updatedCredit = prevMoney + addMoney
      toast.success('Credit added successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      return updatedCredit
    })
  }

  return (
    <div className='hero-bg bg-cover bg-black rounded-lg my-8'>
      <div className='flex flex-col justify-center items-center space-y-10 text-white py-24 font-semibold'>
        <img src={bannerImg} alt='' />
        <h1 className='text-4xl'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className='text-xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
        <button
          className='border px-3 py-2 rounded-md bg-yellow-300 text-black font-bold'
          onClick={handleFreeCredit}
        >
          Claim Free Credit
        </button>
      </div>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} 
      />
    </div>
  )
}

export default Banner
