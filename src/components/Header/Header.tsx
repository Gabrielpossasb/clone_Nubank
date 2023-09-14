import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";

import LogoNubank from "public/nubank-seeklogo.com.svg"

export function Header () {
   return (
      <div className="fixed z-50 bg-white flex items-center leading-5 text-[16px] font-medium w-full justify-between px-6 h-[9vh] overflow-hidden border-b-[1px] border-gray-600/10">

         <div className="flex gap-6 ">

            <a href="https://nubank.com.br/" target="_blank" className="">
               <Image width={55} height={45} src={LogoNubank} alt="" className=""/>
            </a>

            <div className="text-gray-600 flex gap-6 items-center ">

               <div className="flex justify-center relative">

                  <text className="">Página Inicial</text>

                  <div className="h-[5px] w-[5px] absolute -bottom-2 bg-purple-600 rounded-full"></div>

               </div>

               <div className="flex items-center  gap-1">

                  <text className="">Para você</text>

                  <div className=" rounded-full">
                     <BiChevronDown size={24}/>
                  </div>

               </div>

               <div className="flex items-center gap-2">

                  <text className="">Para seu negócio</text>

                  <div className=" rounded-full">
                     <BiChevronDown size={24}/>
                  </div>

               </div>

               <div className="flex items-center gap-2">

                  <text className="">O Nubank</text>

                  <div className=" rounded-full">
                     <BiChevronDown size={24}/>
                  </div>

               </div>

               <div className="flex items-center gap-2">

                  <text className="">Perguntas</text>

               </div>

            </div>

         </div>

         <div className="relative w-fit flex overflow-hidden text-md group">

            <div className="flex text-lg items-center gap-2 text-purple-600">

               <text>Login</text>

               <div className="-rotate-90">
                  <FiDownload size={20}/>
               </div>

            </div>

            <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[100px] group-hover:left-0"/>

         </div>

      </div>
   )
}