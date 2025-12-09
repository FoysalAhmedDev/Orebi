import Banner from "../layout/Banner";
import Sales from "../layout/Sales";
import Terms from "../layout/Terms";

const Home = () => {
  return (
    <>
      {/* <h1 className='bg-blue-500 text-white text-center p-10 text-3xl capitalize'>this is home page</h1> */}
      <Banner/>
       <Terms/>
       <Sales/>
    </>
  );
};

export default Home;
