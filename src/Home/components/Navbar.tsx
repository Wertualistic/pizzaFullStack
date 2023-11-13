import { useState } from "react";

const Navbar: React.FC = () => {

    const month = ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sen", 'Oct', "Nov", "Dec"]
    const days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', "Friday", 'Saturday']
    const [date, setDate] = useState('')

    setTimeout(() => {
        const dates = new Date();
        setDate(`${days[dates.getDay()]}, ${dates.getDate()} ${month[dates.getMonth()]} , ${dates.getFullYear()}`)
    }, 1000);

    setInterval(() => {
        const dates = new Date();
        setDate(`${days[dates.getDay()]}, ${dates.getDate()} ${month[dates.getMonth()]} , ${dates.getFullYear()}`)
    }, (1000 * 60) * 60)


    return (
        <div className="flex justify-between items-center py-3 px-10 text-white">
            <div>
                <h3 className="text-xl bg-[#30333e] z-10">Jaegar Resto</h3>
                <p className={`${date && "translate-y-[0%] transition duration-1000 z-0"} translate-y-[-100%] h-6 text-white`}>{date}</p>
            </div>
            <div>
                <input type="search" className="py-3 px-5 rounded-2xl bg-[#393C49] w-[370px] text-white" placeholder="Search for food, coffe, etc.." />
            </div>
        </div>
    )
}

export default Navbar