import './Banner.css'
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className="hero-bg bg-cover bg-black rounded-lg my-8">
            <div className='flex flex-col justify-center items-center space-y-10 text-white py-24 font-semibold'>
                <img src={bannerImg} alt="" />
                <h1 className='text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <button className='border px-3 py-2 rounded-md bg-yellow-300 text-black font-bold'>Claim Free Credit</button>
            </div>
            
        </div>
    );
};

export default Banner;