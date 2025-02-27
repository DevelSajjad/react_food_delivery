import CategoryData from "../helper/CategoryData"

function Categories({onClickCategory})
{
    
    return (
        <>
            <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
                {
                    CategoryData.map((item, index) => {
                        return (
                            <div className="w-[150px] h-[150px] bg-white flex flex-col items-center justify-center gap-2 rounded-md cursor-pointer hover:bg-green-200 transition duration-300 font-bold" onClick={()=> onClickCategory(item.name)}>
                                {item.icon}
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories;