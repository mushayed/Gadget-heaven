import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
import ExploreGadgets from '../ExploreGadgets/ExploreGadgets';

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/dashboard')
  }

  return (
    <div>
      <div className="flex flex-col gap-6 items-center w-[96%] mx-auto pt-14 pb-64 text-slate-100 bg-[#9538E2] relative rounded-b-2xl">
        <h1 className="font-bold text-5xl text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-base font-normal text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button onClick={handleOnClick} class="btn rounded-full text-[#9538E2] font-bold">
          Shop now
        </button>
      </div>
      <div className="w-[80%] h-[19rem] lg:w-[63rem] lg:h-[33rem] md:h-[22rem] border-2 border-slate-100 rounded-2xl absolute lg:top-96 lg:left-[13%] md:top-[25rem] 
      md:left-[11%] top-[36rem] left-[10%]">
        <img className='w-full h-full object-cover rounded-2xl' src={banner} alt="" />
      </div>

      <ExploreGadgets></ExploreGadgets>
    </div>
  );
};

export default Home;
