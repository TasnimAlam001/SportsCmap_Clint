import useNewClass from "../../../Hooks/useNewClass";


const MyClasses = () => {
    const [newClass] = useNewClass();
    return (
        <div>
            <p>{newClass.length}</p>
            
        </div>
    );
};

export default MyClasses;