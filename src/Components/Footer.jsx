import SubscribeUs from "./Subscribe/SubscribeUs";
import footerImg from '../assets/logo-footer.png'

const Footer = () => {
    return (
       <>
       <div className=" bg-base-200 text-base-content relative">
       <div className="absolute -top-28 left-0 right-0">
       <SubscribeUs />
       </div>
       <div className="flex justify-center items-center pt-48">
        <img src={footerImg} alt="" />
       </div>
       
        <footer className="footer   flex justify-around pt-5 pb-20">
       
        <div>
          <h6 className="text-white font-bold text-xl ">About Us</h6>
          <p className="mx-auto">We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</p>
        </div>
        <nav>
          <h6 className="text-white font-bold text-xl">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h6 className="text-white font-bold text-xl">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email address"
                className="input input-bordered join-item bg-white" />
              <button className="btn btn-primary join-item bg-gradient-to-r from-pink-500 via-slate-300 to-yellow-600">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
       </div>
       </>
    );
};

export default Footer;