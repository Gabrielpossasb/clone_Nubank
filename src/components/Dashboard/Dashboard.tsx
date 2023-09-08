import Image from 'next/image'

import LogoNubank from "public/midia/homeNubank.webp"

export function Dashboard() {
   return (
      <div className={'w-full'}>
         <Image src={LogoNubank} alt="" />
      </div>
   )
}