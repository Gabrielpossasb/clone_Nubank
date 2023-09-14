import Image from "next/image";

import { BiArrowBack } from "react-icons/bi";

import Image1 from "public/midia/three-women-walking.webp"
import Image2 from "public/midia/three-people-wall.webp"
import Image3 from "public/midia/blog-section-variant.webp"

export function Section6 () {
   return (
      <div className="text-white">

         <div className="relative max-h-[80vh] overflow-hidden">

            <div className="">
               <Image src={Image1} alt="" className={`w-full`}/>
            </div>

            <div className="absolute z-10 right-0 top-0 bottom-0 left-0 flex items-center justify-center">

               <div className="w-1/2 flex flex-col gap-8 mr-32">

                  <text className="text-5xl ">
                     Nós acreditamos que só uma pessoa pode ter controle sobre sua vida financeira: você.
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group text-lg ">

                     <button className=' gap-2 flex items-center'>
                        <text>Saiba mais sobre como fazemos isso</text>

                        <BiArrowBack size={20} className={'rotate-[135deg]'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-white duration-500 -left-[360px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

         </div>

         <div className="relative max-h-[80vh] overflow-hidden">

            <div className="">
               <Image src={Image2} alt="" className={`w-full`}/>
            </div>

            <div className="absolute z-10 right-0 top-0 bottom-0 left-0 bg-black/30 flex items-center justify-center">

               <div className="w-1/2 flex flex-col gap-8 mr-32">
                  
                  <text className="text-5xl">NuCommunity</text>

                  <text className="text-5xl ">                  
                     A comunidade oficial do Nubank para você tirar dúvidas e compartilhar ideias.
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group text-lg ">

                     <button className=' gap-2 flex items-center'>
                        <text>Faça parte</text>

                        <BiArrowBack size={20} className={'rotate-[135deg]'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-white duration-500 -left-[360px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

         </div>

         <div className="relative max-h-[80vh] overflow-hidden">

            <div className="">
               <Image src={Image3} alt="" className={`w-full `}/>
            </div>

            <div className="absolute z-10 right-0 top-0 bottom-0 left-0 bg-black/20 flex items-center justify-center">

               <div className="w-1/2 flex flex-col gap-8 mr-32">

                  <text className="text-5xl ">
                  Conheça nossa central de informações em caso de emergências.
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group text-lg ">

                     <button className=' gap-2 flex items-center'>
                        <text>Conheça o SOS Nu</text>

                        <BiArrowBack size={20} className={'rotate-[135deg]'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-white duration-500 -left-[360px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

         </div>

      </div>
   )
}