import { FaLeaf } from "react-icons/fa";
import { food_items } from "../helper/Food";

function Dish()
{
    return (
        <>  
            {
                food_items.map((item, index) => (
                    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 hover:border-2 border-green-400">
                        <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
                            <img src={item.food_image} className="object-cover" alt="" srcset="" />
                        </div>
                        <div>
                            <p className="font-bold text-lg" > {item.food_name} </p>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-bold text-green-500">
                                {'Tk '+ item.price}
                            </div>
                            <div className="uppercase flex justify-center items-center gap-2 text-green-500">
                                <FaLeaf/> <span>{item.food_type}</span>
                            </div>
                        </div>
                        <button className="w-full p-2 bg-green-400 rounded-lg font-bold hover:bg-green-200" >Add to Dish</button>
                    </div>
                ))
            }

           
        </>
    )
}

export default Dish;