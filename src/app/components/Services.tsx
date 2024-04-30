import { SiHtmx } from "react-icons/si";

const Services = () => {
  return (
    <div className="bg-black text-white pb-20" >
        <div className="text-center sm:py-20  pb-10">
            <h1 className="text-4xl font-bold">My <span className="text-[#F7F779]">Services</span></h1>
        </div>
        <div className="sm:flex justify-between px-10">
            <div className="border-2 hover:rotate-3 sm:mb-0 mb-10 hover:shadow-2xl hover:shadow-[#F7F779] rounded-2xl w-80 py-4 px-4">
                <div className="text-4xl text-[#F7F779]"><SiHtmx /></div>
                <h1 className="text-2xl py-3 font-bold">Web Design</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci minima iddeleniti,voluptatum inventore eosquiut placeat provident iusto quae, corporis beatae non.</p>
                <button className="hover:bg-[#F7F779] hover:shadow-lg   hover:shadow-[#eded9b] text-black font-semibold my-4 px-4 py-2 rounded-lg bg-[#FFFF7D]">Learn More</button>

            </div>
            <div className="border-2 hover:rotate-3 sm:mb-0 mb-10 hover:shadow-2xl hover:shadow-[#F7F779]  rounded-2xl w-80 py-4 px-4">
                <div className="text-4xl text-[#F7F779]"><SiHtmx /></div>
                <h1 className="text-2xl py-3 font-bold">Web Design</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci minima iddeleniti,voluptatum inventore eosquiut placeat provident iusto quae, corporis beatae non.</p>
                <button className="hover:bg-[#F7F779] hover:shadow-lg   hover:shadow-[#eded9b] text-black font-semibold my-4 px-4 py-2 rounded-lg bg-[#FFFF7D]">Learn More</button>
            </div>
            <div className="border-2 hover:rotate-3 sm:mb-0 mb-10 hover:shadow-2xl hover:shadow-[#F7F779]  rounded-2xl w-80 py-4 px-4">
                <div className="text-4xl text-[#F7F779]"><SiHtmx /></div>
                <h1 className="text-2xl py-3 font-bold">Web Design</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci minima iddeleniti,voluptatum inventore eosquiut placeat provident iusto quae, corporis beatae non.</p>
                <button className="hover:bg-[#F7F779] hover:shadow-lg   hover:shadow-[#eded9b] text-black font-semibold my-4 px-4 py-2 rounded-lg bg-[#FFFF7D]">Learn More</button>
            </div>
        </div>

    </div>
  )
}

export default Services
