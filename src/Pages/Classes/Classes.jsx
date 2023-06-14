import { Helmet } from "react-helmet";
import useClass from "../../Hooks/useClass";
import './Classes.css'
import ClassesCard from "./ClassesCard";


const Classes = () => {
    const [classes] = useClass();
    console.log(classes)
    return (
        <div>
            <Helmet>

            <title>Sports Camp | Classes</title>
            </Helmet>


            <div className="cls-bg bg-fixed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-32">
                {

                    classes.map(cls => <ClassesCard

                        key={cls._id}
                        cls={cls}
                    ></ClassesCard>)

                }
            </div>
        </div>
    );
};

export default Classes;