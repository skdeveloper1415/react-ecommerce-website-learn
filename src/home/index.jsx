import { useContext } from "react"
import Bannersection from "../components/Bannersection"
import { Appcontext } from "../context/productcontext"
import FeatureServices from "../components/FeatureServices";

const Home = () => {
  const { myData } = useContext(Appcontext);
  return (
    <div className="">
      <Bannersection name="Home page" page={"This is home page"} />
      <FeatureServices />
    </div>
  )
}

export default Home