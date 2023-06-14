import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiousSecure";
import SectionTitle from "../../../../Componenets/SectionTitle/SectionTitle";






const Expect = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: datas = [] } = useQuery(['expect'], async () => {
        const res = await axiosSecure.get('/expect')
        return res.data;
    })

    return (
        <div style={{}}  className="mb-40 bg ">
            <SectionTitle heading={"What to Expect"}></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:w-2/3 mx-auto gap-4 text-center">
                {
                    datas.map(d => <>

                        <div className="shadow-2xl p-4  lg:px-8" >
                            <h1 className=" font-bold uppercase mb-3 text-orange-400">{d.name}</h1>
                            <div className="divider" ></div>
                            <p className="pb-4">{d.description}</p>

                        </div>

                    </>)
                }
            </div>

        </div>
    );
};

export default Expect;