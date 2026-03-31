export default function CarDetailsCard({prop}){

    return(prop.slice(0, 4).map((prop) => (
            <div key={prop.car} className="p-4 w-full h-full rounded-lg bg-slate-300">
                <div className="flex justify-between items-center h-full">
                    <div className="flex flex-col justify-between h-full ">
                        <p>{prop.car}</p>
                        <p>{prop.mechanic}</p>
                    </div>
                    <img src={prop.image} alt="poza masina" />
                </div>
            </div>
        )))
}
