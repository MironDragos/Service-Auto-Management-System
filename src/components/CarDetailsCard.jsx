export default function CarDetailsCard({ cars }){
    return(cars.map((car) => (
            <div key={car.car_model} className="p-4 w-full h-full rounded-lg bg-slate-200 border-[1px] border-slate-300">
                <div className="flex justify-between items-center h-full">
                    <div className="flex flex-col justify-between h-full ">
                        <p>{car.car_model}</p>
                        <p>{car.mechanic}</p>
                    </div>
                    <img src={car.image} alt="poza masina" />
                </div>
            </div>
        )))
}
