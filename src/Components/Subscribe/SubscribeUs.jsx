import './Subscribe.css'

const SubscribeUs = () => {
    return (
        <div className="subscribe-bg bg-cover border text-center space-y-4 flex flex-col justify-center items-center mx-20 rounded-xl py-10  bg-white text-black">
        <h2 className="text-3xl font-semibold">Subscribe to our Newsletter</h2>
        <p className="text-xl">Get the latest updates and news right in your inbox!</p>
        <div className=" flex gap-2 ">
            <input type="text" placeholder="Enter Your Email" className="border py-3 rounded-md px-2 text-lg w-full flex-1 text-black"/>
        <button className="text-lg px-3 py-2 rounded-md font-bold bg-gradient-to-r from-pink-500 via-slate-300 to-yellow-600 ">Subscribe</button></div>
            
        </div>
    );
};

export default SubscribeUs;