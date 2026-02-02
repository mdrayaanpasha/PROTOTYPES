import orangeCouch from "./assets/images/friends/COUCH.png"
import door from "./assets/images/friends/door.png"
import pivot from "./assets/images/friends/pivot.png"
import joe from "./assets/images/friends/joe.png"
import { ArrowRight } from "lucide-react"
// import sad from "./assets/images/friends/sad.png"
// import happy from "./assets/images/friends/happy.png"
// import fear from "./assets/images/friends/fear.png"
// import shock from "./assets/images/friends/shock.png"
import happy from "./assets/images/friends/happy.jpg"
import sad from "./assets/images/friends/sad.png"
import anger from "./assets/images/friends/anger.png"
import fear from "./assets/images/friends/fear.png"
import shock from "./assets/images/friends/shock.jpg"

function Card({ mood, imgSrc }) {
  return(
    <>
     <div className=" flex ml-10">
            
                <style>
        {
          `
          .squircle{

            corner-shape:squircle;
            border-radius: 3vw;
          }
            `
        }
      </style>
            <div className="relative card h-[60vh] w-[25vw] ">
                <img className="h-full w-full object-cover squircle mask-b-from-5% shadow-2xl shadow-amber-50" src={imgSrc} alt={mood} />

                <div className="absolute bottom-7 left-7">
                    <h2 className="text-2xl mt-4 font-bold">{mood}</h2>
                </div>
            </div>


        </div>
        </>
  )
}
 
export default function Friends() {
  return (
    
    <div className="font-serif bg-black text-white ">
  
    <div className="h-[100vh] w-full mask-b-from-85%">
      <img
        className="h-full w-full object-cover"
        src="https://www.instyle.com/thmb/XKdyTg711C_0vhZw8UH39rBMkGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080924-Friends-Quotes-Lead-6d726d7142d34be29f92e0b03f13075a.jpg"
        alt=""
     />
      <div className="backdrop-blur-[4px] bg-black/50 inset-0 absolute"></div>
      <div className="absolute flex items-center justify-center flex-col inset-0 text-white">
       
        <div className="mt-10 text-center px-4">
            <h1 className="text-7xl font-extrabold">
                How you <span className="text-[#DE602E] italic">feelin'</span> today?
            </h1>
            <p className="text-md mt-4 font-bold">Get Friends episode list based on your moood</p>
            
            <button className="mt-6 bg-[#DE602E] px-6 py-3 rounded-full font-semibold hover:bg-[#bf4a20] transition-colors ">
                Try Now
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
        </div>


      </div>


    {/* stickers */}
      <div className="sticker-1 top-15 left-15 absolute h-20" >
        <img src={orangeCouch} className="h-20" alt="" />
      </div>


      <div className="sticker-2 bottom-15 right-15 absolute">
        <img src={door} className="h-30" alt="" />
      </div>

        <div className="sticker-3 bottom-40 left-20 absolute h-20">
        <img src={pivot} className="h-30" alt="" />
        </div>

        <div className="sticker-4 top-40 right-20 absolute h-20">
        <img src={joe} className="h-30" alt="" />
        </div>


    </div>

    <div className="h-[100vh] m-10 ">
      <h1 className=" text-3xl">What's your mood today?</h1>
      <div className="flex items-center justify-evenly overflow-auto mt-10">
          
          <Card mood="Happy" imgSrc={happy} />
          <Card mood="Sad" imgSrc={sad} />
          <Card mood="Angry" imgSrc={anger} />
          <Card mood="Fearful" imgSrc={fear} />
          <Card mood="Shocked" imgSrc={shock} />
        
      </div>
    </div>




    </div>
  );
}
