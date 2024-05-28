

const Aboutme = () => {
  return (
    <>
    <div id="Aboutme" className="bg-black sm:pb-0 pb-10 text-white sm:h-96 px-10 sm:flex justify-between" >
      <div className="sm:block hidden">
        <img src="img7.png" alt=""  className="h-72 shadow-2xl shadow-[#F7F779] border-2 m-20 border-[#F7F779]  mx-auto  object-cover rounded-full w-72"/>
      </div>
        <div className="sm:w-[600px] ">
          <h1 className="text-3xl font-bold">About <span className="text-[#F7F779]">Me</span></h1>
          <h3 className="text-xl font-bold py-4">Full Stack Developer!</h3>
          <p className="text-justify">I am a skilled web designer.My passion lies in creating captivating website designs and implementing them through frontend development.I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites.Throughout my career,i have developed a deep understanding of user experience and user interface principles.By putting my self in the shoes of the end-user,I strive to create intuitive and seamless browsing experiences. I believe that  well designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, i thorouhly research and analyze the target audence and the client's specific requirements. the enables me to tailor my designs to meet there expectations and delivers a unique presence that align with their brand identity...</p>
        </div>
        <div className="sm:hidden block">
        <img src="img7.png" alt=""  className="h-72 shadow-2xl shadow-[#F7F779] border-2 sm:m-20 m-10 border-[#F7F779]  mx-auto  object-cover rounded-full w-72"/>
      </div>
        
    </div>
    </>
  )
}

export default Aboutme