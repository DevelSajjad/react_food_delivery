import { FaPizzaSlice } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { MdBreakfastDining, MdDinnerDining, MdOutlineLaunch } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";

const CategoryData = [
    {
        id: 1,
        name: 'All',
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-500 font-bold"/>
    },
    {
        id: 2,
        name: 'Breakfast',
        icon: <MdBreakfastDining className="w-[60px] h-[60px] text-green-500 font-bold"/>
    },
    {
        id: 3,
        name: 'Lunch',
        icon: <MdOutlineLaunch className="w-[60px] h-[60px] text-green-500 font-bold"/>
    },
    {
        id: 4,
        name: 'Dinner',
        icon: <MdDinnerDining className="w-[60px] h-[60px] text-green-500 font-bold"/>
    },
    {
        id: 5,
        name: 'Pizza',
        icon: <FaPizzaSlice className="w-[60px] h-[60px] text-green-500 font-bold"/>
    },
    {
        id: 6,
        name: 'Burger',
        icon: <FaBurger className="w-[60px] h-[60px] text-green-500 font-bold"/>
    },
];

export default CategoryData;