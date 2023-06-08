import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularINstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            
        </div>
    );
};

export default Home;