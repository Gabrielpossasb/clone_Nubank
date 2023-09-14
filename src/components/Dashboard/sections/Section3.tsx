import Image from "next/image";

import { BiArrowBack } from "react-icons/bi";

import Emprestimos from "public/midia/homeNubank_1152x768.webp"
import SeguroVida from "public/midia/seguro-de-vida.jpg"
import SeguroCelular from "public/midia/seguro_celular.jpg"

export function Section3 () {
   return (
      <div className="flex flex-col gap-10 px-16 my-20">

         <text className="text-purple-600 text-5xl">Mais Produtos Nubank</text>

         <div className="flex gap-12">

            <div className="rounded-3xl flex flex-col w-[38%] overflow-hidden bg-gray-200">
               
               <div className="">
                  <Image src={Emprestimos} alt="" className="h-[280px]"/>
               </div>

               <div className="flex flex-col p-6 py-6 gap-4 justify-between h-full">

                  <text className="text-purple-600 text-2xl">Emprestimos</text>

                  <text className="font-normal text-lg">
                     Transparentes, seguros e do seu jeito: da simulação até a última parcela
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group">

                     <button className='text-purple-600 gap-2 flex'>
                        <text>Saiba mais</text>

                        <BiArrowBack size={20} className={'rotate-180'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

            <div className="rounded-3xl flex flex-col w-[38%] overflow-hidden bg-gray-200">
               
               <div className="">
                  <Image src={SeguroVida} alt="" className="h-[280px]"/>
               </div>

               <div className="flex flex-col p-6 py-6 gap-4 justify-between h-full">

                  <text className="text-purple-600 text-2xl">Seguro de vida</text>

                  <text className="font-normal text-lg">
                     Seguro para proteger você e quem você mais ama: agora e no futuro.
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group">

                     <button className='text-purple-600 gap-2 flex'>
                        <text>Saiba mais</text>

                        <BiArrowBack size={20} className={'rotate-180'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

            <div className="rounded-3xl flex flex-col w-[38%] overflow-hidden bg-gray-200">
               
               <div className="">
                  <Image src={SeguroCelular} alt="" className="h-[280px]"/>
               </div>

               <div className="flex flex-col p-6 py-6 gap-4 justify-between h-full">

                  <text className="text-purple-600 text-2xl">Seguro celular</text>

                  <text className="font-normal text-lg">
                     Para você não ficar sem curtir seu celular e tudo que você pode fazer com ele.
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group">

                     <button className='text-purple-600 gap-2 flex'>
                        <text>Saiba mais</text>

                        <BiArrowBack size={20} className={'rotate-180'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

         </div>

      </div>
   )
}