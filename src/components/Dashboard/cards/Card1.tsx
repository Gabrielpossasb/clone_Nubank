import { ReactElement } from "react";
import { BiArrowBack } from "react-icons/bi";

interface CardProps {
   icon: ReactElement,
   title: string,
   description: string
}

export function Card1 ({icon, title, description}: CardProps) {
   return (
      <div className='flex flex-col justify-between h-[300px] gap-8 border p-4 py-6 min-w-[300px] border-gray-600/10 rounded-xl'>

         <div className='text-2xl gap-2 flex flex-col'>
            <div className="h-6 flex items-center">
               {icon}
            </div>

            <text className=''>{title}</text>
         </div>

         <text className='font-normal'>{description}</text>

         <div className="flex flex-col w-fit overflow-hidden relative group">

            <button className='text-purple-600 gap-2 flex'>
               <text>Saiba mais</text>

               <BiArrowBack size={20} className={'rotate-180'}/>

            </button>
            
            <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

         </div>

      </div>
   )
}