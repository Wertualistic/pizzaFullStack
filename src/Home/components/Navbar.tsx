
const Navbar: React.FC = () => {
    return (
        <div className="flex justify-between items-center bg-transparent text-white">
            <div>
                <h3 className="text-xl">Jaegar Resto</h3>
                <p>Tuesday, 2 Feb 2021</p>
            </div>
            <div>
                <input type="search" className="p-3 rounded-lg bg-[#393C49] text-white" placeholder="Search for food, coffe, etc.." />
            </div>
        </div>
    )
}

export default Navbar