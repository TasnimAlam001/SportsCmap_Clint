import SectionTitle from "../../../Componenets/SectionTitle/SectionTitle";
import useClass from "../../../Hooks/useClass";
import ClassCard from "./ClassCard";
import './PopularClasses.css'

const PopularClasses = () => {
    const classes = useClass()
    const popularClasses = classes[1];

    return (

        <div>
            <SectionTitle heading={"Our Popular Classes"}></SectionTitle>

            <div className="cls bg-fixed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-32">
                {
                    popularClasses.map(cls => <ClassCard

                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }

            </div>
        </div>
    );
};

export default PopularClasses;