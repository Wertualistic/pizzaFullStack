import { useState } from "react";


const FIlterBtn = () => {
  
  const btns = ['Hot Dishes','Cold Dishes','Soup','Grill','Appetizer','Dessert'];
  
  const [active,setActive] = useState('')

  return (
    <div className="flex w-full justify-between items-center gap-5 px-10 text-white font-bold border-b gray my-5">
        {btns.map(p => <button onClick={()=> setActive(p)} className={`${active == p && 'active border-b-4  border-[#EA7C69] text-[#EA7C69] transition duration-500'}`}>{p}</button> )}
    </div>
  )
}

export default FIlterBtn