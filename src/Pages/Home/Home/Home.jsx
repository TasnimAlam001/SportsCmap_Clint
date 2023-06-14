import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularINstructor/PopularInstructor";
import Expect from "./Expect/Expect";



const Home = () => {
 
    return (
        <div>
            <Helmet>

            <title>Sports Summer Camp</title>
            </Helmet>
            <Banner></Banner>
            <Features></Features>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Expect></Expect>
            
        </div>
    );
};

export default Home;