
import { IoFastFoodSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
function Nav({onChangeSearch})
{
    return (
        <>
            <div className="w-full h-[100px] flex justify-between">
                <div className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center shadow-lg">
                    <IoFastFoodSharp className="text-green-500 w-[35px] h-[35px]" />
                </div>

                <form className="flex items-center w-[60%] h-[60px] bg-white px-4 gap-4 rounded-md">
                    <CiSearch className="w-[25px] h-[25px] text-green-500 font-bold"/>
                    <input className="w-full h-[50px] outline-none text-[15px]" placeholder="Search your dish...." onChange={(e)=> onChangeSearch(e.target.value)}/>
                </form>

                <div className="w-[60px] h-[60px] bg-white shadow-lg rounded-md flex justify-center items-center relative">
                    <span className="absolute text-green-500 top-0 right-2">0</span>
                    <CiShoppingCart className="text-green-500 w-[40px] h-[40px]"/>
                </div>
            </div>
        </>
    )
}

export default Nav;