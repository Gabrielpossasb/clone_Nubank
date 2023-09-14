import { BiArrowBack } from "react-icons/bi";

interface Props {
   text: string
}

export function TextLink ({text}: Props) {
   return (
      <button className=' gap-2 flex items-center hover:text-purple-600 duration-200 hover:cursor-pointer'>
         <text>{text}</text>

         <BiArrowBack size={20} className={'rotate-[135deg]'}/>
      </button>
   )
}