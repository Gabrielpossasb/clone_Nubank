import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";

import LogoNubank from "public/nubank-seeklogo.com.svg"

export function Header () {
   return (
      <div className="fixed bg-white flex items-center leading-5 text-base w-full justify-between px-16 h-[10vh] overflow-hidden">

         <div className="flex gap-6">

            <Image width={80} height={80} src={LogoNubank} alt="" className=""/>

            <div className="text-gray-600 flex items-center ">

               <div className="flex justify-center relative p-3">

                  <text className="">Página Inicial</text>

                  <div className="h-2 w-2 absolute bottom-0 bg-purple-600 rounded-full"></div>

               </div>

               <div className="flex items-center gap-1 p-3">

                  <text className="">Para você</text>

                  <div className=" rounded-full">
                     <BiChevronDown size={24}/>
                  </div>

               </div>

               <div className="flex items-center gap-2 p-3">

                  <text className="">Para seu negócio</text>

                  <div className=" rounded-full">
                     <BiChevronDown size={24}/>
                  </div>

               </div>

               <div className="flex items-center gap-2 p-3">

                  <text className="">O Nubank</text>

                  <div className=" rounded-full">
                     <BiChevronDown size={24}/>
                  </div>

               </div>

               <div className="flex items-center gap-2 p-3">

                  <text className="">Perguntas</text>

               </div>

            </div>

         </div>

         <div className="flex text-xl font-semibold items-center gap-2 text-purple-600">

            <text>Login</text>

            <div className="-rotate-90">
               <FiDownload size={32}/>
            </div>

         </div>

      </div>
   )
}