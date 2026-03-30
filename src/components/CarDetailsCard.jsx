export default function CarDetailsCard({prop}){

    /*
     const ListIngredients=list.map(function ingredient(prop){
        return(
            <li key={Math.random()} className='ListEntry'>• {prop}</li>
        )
    })
    */


    return(prop.map((prop)=>(
            <div key={prop.car} className="p-4 w-full h-full rounded-lg bg-slate-300">
                <div className="flex justify-between items-center h-full">
                    <div className="flex flex-col justify-between h-full ">
                        <p>{prop.car}</p>
                        <p>{prop.issue}</p>
                    </div>
                    <img src={prop.image} alt="poza logan" />
                </div>
            </div>
        )))
}
