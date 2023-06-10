import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import useInstructor from "../../../Hooks/useInstructor";
import InstructorCard from "./InstructorCard";
import SectionTitle from "../../../Componenets/SectionTitle/SectionTitle";

const PopularInstructor = () => {
    useEffect(() => {
        Aos.init({})
    })

    const [instructor] = useInstructor();
    // const popularInstructor = instructor;



    return (
        <>
        <SectionTitle heading={"popular Instructors"}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-32">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1000">
                    <InstructorCard data={instructor[0]}></InstructorCard>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <InstructorCard data={instructor[1]}></InstructorCard>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="1000">
                    <InstructorCard data={instructor[2]}></InstructorCard>
                </div >
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1000">
                    <InstructorCard data={instructor[3]}></InstructorCard>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <InstructorCard data={instructor[4]}></InstructorCard>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="1000">
                    <InstructorCard data={instructor[5]}></InstructorCard>
                </div>


            </div>
        </>
    );
};

export default PopularInstructor;