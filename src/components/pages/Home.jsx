import Banner from "../layout/Banner";
import Banner2nd from "../layout/Banner2nd";
import Bestsellers from "../layout/Bestsellers";
import NewArrival from "../layout/NewArrival";
import Sales from "../layout/Sales";
import SpecialOffer from "../layout/SpecialOffer";
import Terms from "../layout/Terms";

const Home = () => {
  return (
    <>
      {/* <h1 className='bg-blue-500 text-white text-center p-10 text-3xl capitalize'>this is home page</h1> */}
      <Banner/>
       <Terms/>
       <Sales/>
       <NewArrival/>
       <Bestsellers/>
       <Banner2nd/>
       <SpecialOffer/>
    </>
  );
};

export default Home;
