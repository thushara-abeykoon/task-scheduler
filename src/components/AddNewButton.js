export const AddNewButton = ({handleIsActive}) => {


    return (
        <div>
            <button onClick={()=>{
                handleIsActive(true)
            }} className='w-72 bsolute mx-auto mt-10 rounded-xl h-10 bg-stone-700 hover:bg-stone-800 text-white'>new task</button>
        </div>
    )
}
