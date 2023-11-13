
import { useAppDispatch, useAppSelector } from "../store/store";
import { addNew, deletePizza } from "../store/Slice";




const Card = (info: Info) => {

    const dipatch = useAppDispatch();


    const selector = useAppSelector(state => state.pizza.pizzas);

    console.log(selector);

    return (
        <div className="relative my-5">
            <div className="border bg-[#1F1D2B] rounded-lg grid grid-rows-[auto_1fr] text-white items-center p-5 justify-center">
                <img className="rounded-full mx-auto md:w-[150px] md:h-[150px] md:translate-y-[-100px]" src={info.img} alt="" />
                <div className="w-full grid grid-rows-[1fr_auto]">
                    <div className="grid text-center mb-5 gap-3">
                        <h5 className="text-lg">{info.title}</h5>
                        <p>${info.price}</p>
                        <p>{info.price} Bowls available</p>
                    </div>
                    <button onClick={() => dipatch(addNew({ info }))} className="bg-[#EA7C69] text-white rounded-lg p-2 hover:bg-white hover:text-[#EA7C69] w-full font-bold transition duration-300">Add</button>
                </div>
                {/* <button onClick={() => dipatch(deletePizza({info}))} className="bg-[#698eea] my-5 text-white rounded-lg p-2 hover:bg-white hover:text-[#EA7C69] font-bold transition duration-300">Remove</button> */}
            </div>
        </div>
    )
}

export default Card