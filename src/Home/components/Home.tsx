
import { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import FIlterBtn from './FIlter'

const Home: React.FC = () => {

    const [modal, setModal] = useState<boolean>(false)

    return (
        <div className='w-full'>
            <div className="grid grid-cols-[20%_auto]">
                <div className=''>

                </div>
                <div>
                    <Navbar />
                    <FIlterBtn />
                    <div className="container w-[90%] mx-auto mt-20">
                        <div className="grid grid-cols-4 gap-5">
                            <Card img='https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Mobile-1300x1150' title='Spicy  seafood noodles' price={2.29} available={3} />
                            <Card img='https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Mobile-1300x1150' title='Spicy seasoned seafood noodles' price={2.29} available={3} />
                            <Card img='https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Mobile-1300x1150' title='Spicy seasoned noodles' price={2.29} available={3} />
                            <Card img='https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Mobile-1300x1150' title='Spicy seasoned seafood ' price={2.29} available={3} />
                        </div>
                        <button onClick={() => setModal(!modal)} className="bg-[#EA7C69] text-white rounded-lg p-2 hover:bg-white hover:text-[#EA7C69] font-bold transition duration-300">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home