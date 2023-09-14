import { BiArrowBack } from "react-icons/bi";
import { TextLink } from "../TextLink";


export function Footer () {
   return (

      <div className="bg-gray-600 text-white text-lg">

         <div className=" gap-20 flex flex-col p-16">

            <div className="flex ">

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Nubank</text>

                  <div className="flex flex-col gap-2">

                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Sobre nós</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Carreiras</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Perguntas frequentes</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Contato</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Imprensa</text>
                     <TextLink text={'ESG'}/>
                     <TextLink text={'Investidores'}/>

                  </div>

               </div>

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Produtos</text>

                  <div className="flex flex-col gap-2">

                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Conta digital</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Cartão de crédito</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Nubank Ultravioleta</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Função Construir Limite</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Empréstimo</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Conta PJ</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Cartão de crédito PJ</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Nubank Vida</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Investimentos</text>

                  </div>

               </div>

            </div>

            <div className="flex">

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Explore</text>

                  <div className="flex flex-col gap-2">
                     
                     <TextLink text={'Comunidade'}/>
                     <TextLink text={'Blog'}/>
                     <TextLink text={'InvestNews'}/>
                     <TextLink text={'Newsletter'}/>
                     <TextLink text={'México'}/>
                     <TextLink text={'Colômbia'}/>

                  </div>

               </div>

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Veja também</text>

                  <div className="flex flex-col gap-2">
                     
                     <button className=' gap-2 flex items-center hover:text-purple-600 duration-200 hover:cursor-pointer'>
                        <text>Tudo sobre o Pix</text>

                        <BiArrowBack size={20} className={'rotate-180'}/>
                     </button>

                     <button className=' gap-2 flex items-center hover:text-purple-600 duration-200 hover:cursor-pointer'>
                        <text>Fornecedores</text>

                        <BiArrowBack size={20} className={'rotate-180'}/>
                     </button>

                  </div>

               </div>

            </div>

            <div className="flex">

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Transparência</text>

                  <div className="flex flex-col gap-2">
                     
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Política de privacidade</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Política de segurança</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Contratos</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Relatórios financeiros</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Ética e compliance</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Dados abertos</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">SCR</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">Convenção de boletos</text>

                  </div>

               </div>

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Fale com a gente</text>

                  <div className="flex flex-col gap-2">
                     
                     <div className="flex flex-col">

                        <text className="font-normal text-base">Capitais e Regiões metropolitanas</text>
                        <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">4020 0185</text>

                     </div>

                     <div className="flex flex-col">

                        <text className="font-normal text-base">Demais localidades</text>
                        <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">0800 591 2117</text>

                     </div>

                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">
                        meajuda@nubank.com.br
                     </text>

                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">
                        Canal de atendimento em libras
                     </text>

                     <text className="font-normal text-base">Atendimento 24h</text>

                  </div>

               </div>

            </div>

            <div className="flex">

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Ouvidoria</text>

                  <div className="flex flex-col gap-2">
                     
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">0800 887 0463</text>
                     <text className="hover:text-purple-600 duration-200 hover:cursor-pointer">ouvidoria@nubank.com.br</text>
                     <text className="font-light">Atendimento das 9h às 18h (dias úteis)</text>

                  </div>

               </div>

               <div className="flex flex-col gap-6 w-1/2">

                  <text className="font-light ">Baixe o app</text>

                  <div className="flex flex-col gap-6">
                     
                     <svg width="151" height="56" fill="none" viewBox="0 0 151 56" xmlns="http://www.w3.org/2000/svg">
                        <title>Apple Store Icon</title><path fill="#000" d="M0 0h151v56H0z"></path><path d="M50.68 14.95V22h2.37c2.1 0 3.33-1.3 3.33-3.53 0-2.21-1.24-3.52-3.33-3.52h-2.37zm.88.8H53c1.6 0 2.49.97 2.49 2.73 0 1.75-.89 2.73-2.49 2.73h-1.43v-5.46zM57.88 22h.85v-5.08h-.85V22zm.43-5.98c.3 0 .53-.24.53-.53a.53.53 0 10-1.06 0c0 .29.23.53.53.53zm1.98 2.3c0 .74.47 1.18 1.42 1.41l.8.2c.59.14.79.35.79.71 0 .46-.42.75-1.11.75-.7 0-1.08-.27-1.19-.85h-.84c.1.95.84 1.55 2.03 1.55 1.13 0 1.96-.63 1.96-1.51 0-.73-.37-1.13-1.4-1.38l-.8-.2c-.56-.13-.82-.37-.82-.72 0-.45.4-.75 1.03-.75.62 0 1.01.32 1.08.86h.8c-.03-.9-.77-1.56-1.88-1.56-1.1 0-1.87.62-1.87 1.5zM68 16.83c-.73 0-1.32.38-1.64.95h-.02v-.86h-.8v6.77h.85v-2.52h.02c.3.56.89.92 1.61.92 1.28 0 2.16-1.04 2.16-2.63 0-1.6-.88-2.63-2.18-2.63zm-.16 4.51c-.87 0-1.46-.75-1.46-1.88s.59-1.88 1.46-1.88c.9 0 1.47.73 1.47 1.88s-.57 1.88-1.47 1.88zm5.8.75c1.4 0 2.35-1.01 2.35-2.63 0-1.62-.95-2.63-2.35-2.63-1.4 0-2.35 1.01-2.35 2.63 0 1.62.94 2.63 2.35 2.63zm0-.75c-.9 0-1.49-.68-1.49-1.88 0-1.2.6-1.88 1.5-1.88.89 0 1.47.68 1.47 1.88 0 1.2-.58 1.88-1.48 1.88zm3.7.66h.86v-2.99c0-.86.52-1.42 1.32-1.42.78 0 1.17.45 1.17 1.27V22h.85v-3.3c0-1.15-.65-1.87-1.76-1.87-.79 0-1.33.36-1.61.9h-.02v-.8h-.8V22zm5.83 0h.85v-5.08h-.85V22zm.76-5.81l1.14-1.47h-.93l-.87 1.47h.66zm5.9.73h-.89l-1.4 4.18h-.02l-1.4-4.18h-.9L87.1 22h.87l1.87-5.08zm3.06.65c.8 0 1.33.6 1.35 1.46h-2.76c.05-.85.61-1.46 1.4-1.46zm1.33 2.97c-.14.48-.62.81-1.26.81-.91 0-1.48-.64-1.48-1.61v-.05h3.64v-.32c0-1.54-.85-2.54-2.22-2.54-1.4 0-2.3 1.07-2.3 2.65 0 1.6.89 2.6 2.34 2.6 1.1 0 1.97-.65 2.11-1.54h-.83zm2.3 1.46h.85v-7.05h-.85V22zm5.05 0h.85v-2.99c0-.86.52-1.42 1.32-1.42.78 0 1.17.45 1.17 1.27V22h.85v-3.3c0-1.15-.65-1.87-1.76-1.87-.78 0-1.33.36-1.61.9h-.02v-.8h-.8V22zm7.45-.63c-.61 0-1.02-.32-1.02-.8 0-.48.4-.79 1.08-.83l1.35-.08v.41c0 .73-.61 1.3-1.41 1.3zm-.2.72c.7 0 1.34-.38 1.64-.96h.02V22h.8v-3.51c0-1.01-.75-1.66-1.94-1.66-1.2 0-1.95.68-2.01 1.56h.82c.1-.5.52-.8 1.17-.8.7 0 1.11.36 1.11.98V19l-1.45.08c-1.17.07-1.84.62-1.84 1.48 0 .92.68 1.53 1.69 1.53z" fill="#F5F5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.62 14.22a5.48 5.48 0 01-1.32 4 4.92 4.92 0 01-3.83 1.76 5.22 5.22 0 011.35-3.86 5.95 5.95 0 013.8-1.9zm4.71 8.53c-.16.09-2.82 1.63-2.79 4.76A5.52 5.52 0 0041 32.56c-.02.1-.53 1.8-1.8 3.55-1.06 1.54-2.17 3.04-3.94 3.07-.83.02-1.4-.22-2-.46a5.37 5.37 0 00-4.63.02c-.56.22-1.1.45-1.86.48-1.68.06-2.97-1.64-4.07-3.17-2.2-3.1-3.9-8.75-1.61-12.6a6.33 6.33 0 015.3-3.13 7.1 7.1 0 012.67.65c.61.24 1.16.45 1.6.45.4 0 .93-.2 1.55-.44.98-.38 2.17-.84 3.4-.71.83.02 3.2.32 4.72 2.48zM94.59 38.24c.79-.7 1.18-1.6 1.18-2.7 0-.9-.27-1.65-.8-2.25a6.6 6.6 0 00-2.54-1.58 6.99 6.99 0 01-1.94-1c-.41-.34-.62-.76-.62-1.28 0-.46.18-.85.54-1.17.42-.36 1-.54 1.76-.54.95 0 1.8.2 2.56.6l.53-1.7a6.63 6.63 0 00-3.03-.62c-1.36 0-2.45.34-3.27 1.02a3.26 3.26 0 00-1.23 2.63c0 1.63 1.17 2.88 3.5 3.72.87.31 1.48.65 1.85 1 .37.37.55.81.55 1.34 0 .6-.22 1.07-.67 1.42-.45.35-1.07.53-1.88.53a5.98 5.98 0 01-3.1-.83l-.49 1.74c.87.54 2.03.8 3.46.8 1.56 0 2.77-.37 3.64-1.13zm-35.6.94h2.28L56.95 26.2H54.3l-4.3 13h2.22l1.19-3.82h4.33L59 39.18zm-2.75-8.8l1.13 3.39h-3.59l1.11-3.4c.3-1.08.5-1.9.64-2.44h.04c.33 1.28.55 2.1.67 2.44zM71 38.15a5.24 5.24 0 001.32-3.78c0-1.42-.38-2.57-1.14-3.45a3.61 3.61 0 00-2.84-1.3c-1.45 0-2.53.55-3.25 1.67h-.04l-.12-1.49h-1.88c.05 1.06.08 2.09.08 3.09V43h2.14v-4.94h.04c.56.9 1.47 1.33 2.73 1.33 1.18 0 2.16-.4 2.96-1.23zM69.5 32.2c.42.6.63 1.35.63 2.26a3.9 3.9 0 01-.67 2.39c-.45.6-1.08.9-1.88.9-.69 0-1.24-.23-1.67-.7a2.46 2.46 0 01-.65-1.72v-1.57c0-.16.03-.37.1-.63a2.36 2.36 0 012.28-1.85c.78 0 1.4.3 1.86.92zm13.88 2.18c0 1.6-.44 2.86-1.32 3.78a3.93 3.93 0 01-2.95 1.23c-1.27 0-2.18-.44-2.74-1.33h-.04V43H74.2V32.9c0-1-.02-2.03-.07-3.09H76l.12 1.49h.04a3.59 3.59 0 013.24-1.68c1.14 0 2.09.44 2.85 1.31a5.09 5.09 0 011.13 3.45zm-2.17.08c0-.91-.22-1.66-.64-2.26a2.2 2.2 0 00-1.86-.92 2.36 2.36 0 00-2.28 1.85c-.06.26-.1.47-.1.63v1.57c0 .68.22 1.25.65 1.72.42.47.98.7 1.67.7.8 0 1.43-.3 1.88-.9.45-.6.68-1.4.68-2.39zm21.63-3.08h-2.36v4.55c0 1.15.41 1.73 1.25 1.73.38 0 .7-.03.95-.1l.06 1.58c-.43.16-.98.23-1.67.23a2.6 2.6 0 01-1.98-.75c-.47-.5-.71-1.34-.71-2.52v-4.73h-1.4v-1.56h1.4V28.1l2.1-.62v2.33h2.36v1.57zm9.37 6.59a5.06 5.06 0 001.26-3.55c0-1.4-.4-2.54-1.23-3.43-.86-.91-2-1.37-3.4-1.37-1.47 0-2.64.47-3.5 1.4a5 5 0 00-1.3 3.56 4.9 4.9 0 001.26 3.45 4.36 4.36 0 003.38 1.36c1.46 0 2.64-.47 3.53-1.42zm-1.53-5.7c.38.61.57 1.35.57 2.22 0 .86-.2 1.61-.59 2.24a2.15 2.15 0 01-1.92 1.14c-.83 0-1.48-.37-1.94-1.12a4.12 4.12 0 01-.58-2.22c0-.9.2-1.65.58-2.26a2.16 2.16 0 011.96-1.12c.83 0 1.47.37 1.92 1.12zm9.75-.63a3.82 3.82 0 00-.68-.05c-.75 0-1.33.27-1.74.83-.36.49-.54 1.1-.54 1.85v4.91h-2.14l.02-6.42c0-1.07-.02-2.06-.08-2.94h1.87l.08 1.79h.05c.23-.62.59-1.11 1.07-1.49.48-.33 1-.5 1.55-.5.2 0 .38.02.53.04v1.98zm9.48 3.36c.06-.26.08-.57.08-.94 0-1.17-.28-2.16-.85-2.95-.71-1-1.76-1.5-3.15-1.5-1.41 0-2.53.5-3.36 1.5a5.27 5.27 0 00-1.2 3.52c0 1.44.43 2.59 1.28 3.44a4.75 4.75 0 003.52 1.29c1.24 0 2.32-.2 3.23-.58l-.34-1.45c-.78.3-1.64.45-2.6.45-.85 0-1.55-.22-2.1-.66-.59-.49-.9-1.2-.93-2.12h6.42zm-2.37-3.08c.28.45.42.98.41 1.6h-4.45c.06-.63.27-1.17.63-1.62.43-.57 1-.85 1.7-.85.77 0 1.33.29 1.7.87z" fill="#F5F5F5"></path>
                     </svg>

                     <svg width="151" height="56" fill="none" viewBox="0 0 151 56" xmlns="http://www.w3.org/2000/svg">
                        <title>Google Play Icon</title><path fill="#000" d="M0 0h151v56H0z"></path><path d="M75.65 29.38c-2.39 0-4.34 1.81-4.34 4.3a4.26 4.26 0 004.34 4.28c2.4 0 4.35-1.82 4.35-4.29a4.25 4.25 0 00-4.35-4.29zm0 6.9c-1.31 0-2.44-1.07-2.44-2.6 0-1.55 1.13-2.61 2.44-2.61s2.44 1.06 2.44 2.6-1.14 2.6-2.44 2.6zm-9.48-6.9c-2.4 0-4.35 1.81-4.35 4.3a4.26 4.26 0 004.35 4.28c2.39 0 4.34-1.82 4.34-4.29a4.25 4.25 0 00-4.34-4.29zm0 6.9c-1.32 0-2.45-1.07-2.45-2.6 0-1.55 1.13-2.61 2.45-2.61 1.3 0 2.44 1.06 2.44 2.6s-1.13 2.6-2.44 2.6zM54.89 30.7v1.81h4.4a3.82 3.82 0 01-1 2.3 4.5 4.5 0 01-3.4 1.32 4.8 4.8 0 01-4.82-4.84 4.8 4.8 0 014.83-4.84c1.45 0 2.52.56 3.3 1.3l1.3-1.28a6.44 6.44 0 00-4.61-1.84 6.79 6.79 0 00-6.82 6.67 6.8 6.8 0 006.82 6.67c2 0 3.5-.64 4.69-1.87a6 6 0 001.59-4.25c0-.43-.03-.82-.1-1.14h-6.18v-.01zM101 32.1c-.36-.95-1.46-2.73-3.7-2.73s-4.09 1.74-4.09 4.3c0 2.4 1.83 4.28 4.3 4.28a4.3 4.3 0 003.6-1.9l-1.48-.97a2.47 2.47 0 01-2.12 1.19 2.2 2.2 0 01-2.1-1.3l5.79-2.38-.2-.48zm-5.9 1.44a2.36 2.36 0 012.25-2.5c.76 0 1.4.37 1.61.9l-3.87 1.6zm-4.71 4.16h1.9V25.09h-1.9v12.62zm-3.11-7.37h-.08a3 3 0 00-2.28-.96 4.29 4.29 0 00-4.15 4.31c0 2.4 1.99 4.28 4.15 4.28 1.03 0 1.86-.45 2.28-.98h.07v.62c0 1.64-.89 2.52-2.31 2.52a2.4 2.4 0 01-2.18-1.52l-1.66.68a4.12 4.12 0 003.84 2.54c2.22 0 4.1-1.3 4.1-4.47v-7.71h-1.8v.7h.02zm-2.2 5.94c-1.3 0-2.4-1.1-2.4-2.59 0-1.51 1.1-2.61 2.4-2.61 1.3 0 2.32 1.1 2.32 2.61 0 1.5-1.01 2.59-2.31 2.59zm24.83-11.19h-4.55v12.62h1.9v-4.78h2.66c2.11 0 4.18-1.52 4.18-3.92s-2.09-3.92-4.19-3.92zm.04 6.08h-2.7v-4.33h2.7A2.2 2.2 0 01112.2 29c0 .99-.8 2.17-2.23 2.17zm11.75-1.8c-1.37 0-2.8.6-3.39 1.92l1.69.7c.36-.7 1.03-.93 1.73-.93.98 0 1.98.58 2 1.62v.13a4.28 4.28 0 00-1.99-.48c-1.82 0-3.66.99-3.66 2.84 0 1.68 1.48 2.77 3.15 2.77 1.27 0 1.99-.56 2.42-1.23h.06v.98h1.84v-4.84c0-2.24-1.68-3.49-3.85-3.49zm-.23 6.9c-.63 0-1.49-.3-1.49-1.06 0-.97 1.08-1.35 2.02-1.35.83 0 1.23.19 1.72.43a2.29 2.29 0 01-2.25 1.99zm10.77-6.63l-2.18 5.47H130l-2.26-5.47h-2.05l3.39 7.64-1.93 4.25h1.98l5.22-11.9h-2.12zm-17.1 8.07h1.9V25.09h-1.9v12.62z" fill="#F5F5F5"></path><path d="M16.92 15.04c-.3.32-.47.8-.47 1.42v22.32c0 .62.18 1.1.47 1.41l.07.07 12.61-12.5V27.48L17 14.97l-.08.07z" fill="url(#paint0_linear)"></path><path d="M33.8 31.94l-4.2-4.17v-.3l4.2-4.17.1.05 4.98 2.8c1.42.8 1.42 2.11 0 2.92l-4.98 2.8-.1.07z" fill="url(#paint1_linear)"></path><path d="M33.9 31.88l-4.3-4.26-12.68 12.57c.47.5 1.24.56 2.12.06l14.86-8.37z" fill="url(#paint2_linear)"></path><path d="M33.9 23.36l-14.87-8.38c-.88-.5-1.65-.43-2.12.06l12.7 12.58 4.29-4.26z" fill="url(#paint3_linear)"></path><path opacity=".2" d="M33.8 31.79L19.04 40.1c-.83.46-1.57.43-2.04.01l-.07.07.07.07c.48.43 1.21.46 2.04 0l14.87-8.38-.1-.1z" fill="#000"></path><path opacity=".12" d="M16.92 40.05c-.3-.31-.47-.8-.47-1.41v.15c0 .62.18 1.1.47 1.41l.07-.07-.07-.08zM38.88 28.93l-5.08 2.86.09.09 4.98-2.8c.7-.41 1.06-.94 1.06-1.46-.05.47-.4.95-1.05 1.3z" fill="#000"></path><path opacity=".25" d="M19.03 15.12l19.85 11.19c.64.36 1 .82 1.06 1.3 0-.52-.35-1.05-1.06-1.45L19.03 14.98c-1.43-.8-2.59-.13-2.59 1.49v.15c0-1.63 1.17-2.3 2.59-1.5z" fill="#fff"></path><path d="M48.37 20.55V14.5h1.88c.93 0 1.69.28 2.25.84.55.56.84 1.29.84 2.19 0 .9-.29 1.62-.84 2.19a3.1 3.1 0 01-2.26.83h-1.87zm.79-.74h1.08c.7 0 1.26-.2 1.67-.6.42-.41.63-.97.63-1.7 0-.71-.2-1.26-.63-1.67a2.3 2.3 0 00-1.67-.6h-1.08v4.57zM54.44 20.55V14.5h.78v6.05h-.78zM58.34 20.69c-.45 0-.88-.15-1.3-.44a2 2 0 01-.84-1.21l.71-.28c.08.33.26.61.52.84.27.23.56.34.9.34.33 0 .63-.1.87-.26a.85.85 0 00.37-.73c0-.33-.12-.6-.37-.78a3.86 3.86 0 00-1.15-.51 3.12 3.12 0 01-1.23-.66c-.27-.27-.42-.6-.42-1.03 0-.43.18-.8.52-1.13.35-.32.8-.48 1.36-.48a2 2 0 011.26.38c.32.25.54.54.63.84l-.71.3c-.05-.2-.18-.38-.38-.54-.2-.16-.46-.25-.78-.25-.3 0-.56.09-.78.26a.76.76 0 00-.31.62c0 .22.1.42.3.58.19.15.48.29.86.41.3.1.55.2.75.28.2.1.4.22.61.37.2.15.37.33.47.55a1.86 1.86 0 01-.02 1.57c-.12.23-.28.41-.49.54a2.27 2.27 0 01-1.35.41zM62.29 20.55h-.79V14.5h2.08c.52 0 .97.17 1.34.51.38.35.57.77.57 1.3 0 .51-.19.94-.57 1.29-.37.34-.82.51-1.34.51h-1.3v2.44zm0-3.2h1.31c.33 0 .6-.1.8-.33.2-.22.29-.46.29-.72 0-.27-.1-.5-.3-.73-.2-.22-.46-.33-.79-.33h-1.31v2.12zM71.48 19.77a3 3 0 01-2.24.92 3.08 3.08 0 01-3.13-3.16c0-.88.29-1.64.89-2.24a3 3 0 012.24-.92 3.1 3.1 0 013.15 3.16c0 .88-.31 1.63-.91 2.24zm-3.9-.5c.45.45 1 .67 1.66.67.65 0 1.21-.22 1.66-.68.45-.45.68-1.03.68-1.73a2.33 2.33 0 00-2.34-2.42c-.65 0-1.21.23-1.66.68a2.37 2.37 0 00-.68 1.74c0 .7.23 1.28.68 1.73zM73.48 20.55V14.5h.96l2.97 4.71h.03l-.03-1.17V14.5h.79v6.05h-.82l-3.1-4.93h-.03l.03 1.17v3.76h-.8zM79.6 20.55V14.5h.77v6.05h-.78zm.72-6.53h-.68l.45-1.07h.85l-.62 1.07zM83.29 20.55l-2.15-6.05H82l1.67 4.91h.03l1.75-4.91h.87l-2.22 6.05h-.81zM90.78 15.25H88v1.91h2.5v.73H88v1.92h2.78v.74H87.2V14.5h3.57v.75zM92 20.55V14.5h.78v5.3h2.65v.75H92zM98.46 20.55V14.5h.96l2.97 4.71h.03l-.03-1.17V14.5h.78v6.05h-.81l-3.1-4.93h-.03l.03 1.17v3.76h-.8zM109.57 19.77a3 3 0 01-2.24.92 3.09 3.09 0 01-3.14-3.16c0-.88.3-1.64.9-2.24a3 3 0 012.24-.92 3.1 3.1 0 013.14 3.16 3.1 3.1 0 01-.9 2.24zm-3.9-.5c.45.45 1 .67 1.66.67.65 0 1.2-.22 1.66-.68.45-.45.68-1.03.68-1.73a2.33 2.33 0 00-2.34-2.42c-.65 0-1.21.23-1.66.68a2.37 2.37 0 00-.68 1.74c0 .7.23 1.28.68 1.73z" fill="#F5F5F5"></path><defs><linearGradient id="paint0_linear" x1="28.48" y1="16.22" x2="11.55" y2="33.31" gradientUnits="userSpaceOnUse"><stop stop-color="#00A0FF"></stop><stop offset=".01" stop-color="#00A1FF"></stop><stop offset=".26" stop-color="#00BEFF"></stop><stop offset=".51" stop-color="#00D2FF"></stop><stop offset=".76" stop-color="#00DFFF"></stop><stop offset="1" stop-color="#00E3FF"></stop></linearGradient><linearGradient id="paint1_linear" x1="40.73" y1="27.62" x2="16.1" y2="27.62" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE000"></stop><stop offset=".41" stop-color="#FFBD00"></stop><stop offset=".78" stop-color="orange"></stop><stop offset="1" stop-color="#FF9C00"></stop></linearGradient><linearGradient id="paint2_linear" x1="31.56" y1="29.93" x2="8.6" y2="53.1" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3A44"></stop><stop offset="1" stop-color="#C31162"></stop></linearGradient><linearGradient id="paint3_linear" x1="13.72" y1="7.61" x2="23.98" y2="17.96" gradientUnits="userSpaceOnUse"><stop stop-color="#32A071"></stop><stop offset=".07" stop-color="#2DA771"></stop><stop offset=".48" stop-color="#15CF74"></stop><stop offset=".8" stop-color="#06E775"></stop><stop offset="1" stop-color="#00F076"></stop></linearGradient></defs>
                     </svg>

                  </div>

               </div>

            </div>

         </div>

         <div className="flex justify-between p-16 border-y border-white/10">

            <div className="gap-20 flex">

               <svg width="44" height="24" fill="#fff" viewBox="0 0 58 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4699 3.05246C12.304 1.12557 14.7369 0 17.5951 0C23.1632 0 26.8549 4.06542 27.5612 10.1557C27.7902 12.1335 27.7881 14.9219 27.7858 18.1516C27.7855 18.4828 27.7853 18.8187 27.7853 19.1588V31.2578H20.1281V22.309C20.1281 22.309 20.1125 14.6501 20.0657 13.2187C19.8602 6.98449 16.1695 3.06722 10.4691 3.06301C8.74925 4.88006 7.82773 7.10172 7.69183 10.4987C7.67315 10.9725 7.67785 12.6519 7.68404 14.8653C7.68725 16.0121 7.69086 17.3023 7.69183 18.6424C7.6975 24.4753 7.69183 31.2591 7.69183 31.2591H0.0346685V17.487C0.0346685 17.0151 0.0260685 16.5392 0.0174352 16.0614C6.75514e-05 15.1003 -0.0174352 14.1318 0.0346685 13.1728C0.121182 11.5741 0.397742 10.0025 1.14374 8.54252C2.85132 5.1978 6.35016 3.04426 10.0802 3.04426C10.2105 3.04426 10.3409 3.047 10.4699 3.05246Z" ></path><path d="M57.9653 18.8272C58.0174 17.8682 57.9999 16.8996 57.9826 15.9386C57.9739 15.4608 57.9653 14.9849 57.9653 14.513V0.740867H50.3082C50.3082 0.740867 50.3025 7.52467 50.3082 13.3575C50.3091 14.6976 50.3127 15.9877 50.3159 17.1345C50.3221 19.348 50.3268 21.0274 50.3082 21.5012C50.1723 24.8983 49.2507 27.1199 47.5309 28.937C41.8306 28.9327 38.14 25.0154 37.9344 18.7813C37.8876 17.3499 37.8678 13.7978 37.8678 9.68381V0.735023L30.2163 0.742173V12.8412C30.2163 13.1813 30.216 13.5171 30.2158 13.8484C30.2134 17.0781 30.2114 19.8664 30.4404 21.8443C31.1452 27.9346 34.8369 32 40.405 32C43.2633 32 45.6962 30.8744 47.5303 28.9475C47.6592 28.953 47.7895 28.9557 47.9198 28.9557C51.6498 28.9557 55.1487 26.8022 56.8563 23.4575C57.6023 21.9974 57.8788 20.4259 57.9653 18.8272Z" ></path>
               </svg>

               <div className="flex flex-col gap-2 font-normal">
                  <text className="text-base">© 2023 Nu Pagamentos S.A - Instituição de Pagamento. 18.236.120/0001-58</text>
                  <text className="text-base">Rua Capote Valente, 39 - São Paulo, SP - 05409-000</text>
               </div>

            </div>

            <div className="flex gap-8">

               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 21 20" color="white" role="img">
                     <title>LinkedIn</title><g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M.936 2.184C.5 3.04.5 4.16.5 6.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 001.748 1.748C3.54 20 4.66 20 6.9 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 001.748-1.748c.436-.856.436-1.976.436-4.216V6.4c0-2.24 0-3.36-.436-4.216A4 4 0 0018.316.436C17.46 0 16.34 0 14.1 0H6.9C4.66 0 3.54 0 2.684.436A4 4 0 00.936 2.184zm3.73 4.483v9.166h2.5V6.667h-2.5zM4.459 4.14c0 .812.654 1.47 1.459 1.47.806 0 1.458-.658 1.458-1.47 0-.812-.653-1.47-1.458-1.47-.805 0-1.458.658-1.458 1.47zm10.209 11.693h2.5v-5.632c0-4.378-4.67-4.219-5.834-2.064v-1.47h-2.5v9.166h2.5v-4.67c0-2.594 3.334-2.806 3.334 0v4.67z"></path>
                  </g>
               </svg>

               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 20"  color="white" role="img">
                     <title>Youtube Icon</title><g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.935974 2.18404C0.5 3.03969 0.5 4.15979 0.5 6.4V13.6C0.5 15.8402 0.5 16.9603 0.935974 17.816C1.31947 18.5686 1.93139 19.1805 2.68404 19.564C3.53969 20 4.65979 20 6.9 20H14.1C16.3402 20 17.4603 20 18.316 19.564C19.0686 19.1805 19.6805 18.5686 20.064 17.816C20.5 16.9603 20.5 15.8402 20.5 13.6V6.4C20.5 4.15979 20.5 3.03969 20.064 2.18404C19.6805 1.43139 19.0686 0.819467 18.316 0.435974C17.4603 0 16.3402 0 14.1 0H6.9C4.65979 0 3.53969 0 2.68404 0.435974C1.93139 0.819467 1.31947 1.43139 0.935974 2.18404ZM14.2443 9.59091L8.2485 6.06817C7.91378 5.87151 7.5 6.12386 7.5 6.52465V13.4754C7.5 13.8735 7.9088 14.1261 8.24342 13.9348L14.2392 10.5068C14.5846 10.3093 14.5875 9.79258 14.2443 9.59091Z" fill="#fff"></path>
                  </g>
               </svg>

               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 21 20"  color="white" role="img"><title>Facebook</title><g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M.936 2.184C.5 3.04.5 4.16.5 6.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 001.748 1.748C3.54 20 4.66 20 6.9 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 001.748-1.748c.436-.856.436-1.976.436-4.216V6.4c0-2.24 0-3.36-.436-4.216A4 4 0 0018.316.436C17.46 0 16.34 0 14.1 0H6.9C4.66 0 3.54 0 2.684.436A4 4 0 00.936 2.184zM11.245 17.3v-6.743h2.84l.428-2.514h-3.268V6.87c0-.91.718-1.657 1.616-1.657h1.69V2.7h-1.69c-2.231 0-4.05 1.862-4.05 4.171v1.172h-2.36v2.514h2.36V17.3h2.434z"></path>
               </g></svg>

               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 20"  color="white" role="img"><title>Instagram Icon</title><g>
                  <path d="M10.5 7C8.84315 7 7.5 8.34315 7.5 10C7.5 11.6569 8.84315 13 10.5 13C12.1569 13 13.5 11.6569 13.5 10C13.5 8.34315 12.1569 7 10.5 7Z" fill="#fff"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.935974 2.18404C0.5 3.03969 0.5 4.15979 0.5 6.4V13.6C0.5 15.8402 0.5 16.9603 0.935974 17.816C1.31947 18.5686 1.93139 19.1805 2.68404 19.564C3.53969 20 4.65979 20 6.9 20H14.1C16.3402 20 17.4603 20 18.316 19.564C19.0686 19.1805 19.6805 18.5686 20.064 17.816C20.5 16.9603 20.5 15.8402 20.5 13.6V6.4C20.5 4.15979 20.5 3.03969 20.064 2.18404C19.6805 1.43139 19.0686 0.819467 18.316 0.435974C17.4603 0 16.3402 0 14.1 0H6.9C4.65979 0 3.53969 0 2.68404 0.435974C1.93139 0.819467 1.31947 1.43139 0.935974 2.18404ZM16.5417 5.08333C17.117 5.08333 17.5833 4.61696 17.5833 4.04167C17.5833 3.46637 17.117 3 16.5417 3C15.9664 3 15.5 3.46637 15.5 4.04167C15.5 4.61696 15.9664 5.08333 16.5417 5.08333ZM5.5 10C5.5 7.23858 7.73858 5 10.5 5C13.2614 5 15.5 7.23858 15.5 10C15.5 12.7614 13.2614 15 10.5 15C7.73858 15 5.5 12.7614 5.5 10Z" fill="#fff"></path></g>
               
               </svg>

               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 20"  color="white" role="img"><title>Twitter Icon</title><g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6.4C0.5 4.15979 0.5 3.03969 0.935974 2.18404C1.31947 1.43139 1.93139 0.819467 2.68404 0.435974C3.53969 0 4.65979 0 6.9 0H14.1C16.3402 0 17.4603 0 18.316 0.435974C19.0686 0.819467 19.6805 1.43139 20.064 2.18404C20.5 3.03969 20.5 4.15979 20.5 6.4V13.6C20.5 15.8402 20.5 16.9603 20.064 17.816C19.6805 18.5686 19.0686 19.1805 18.316 19.564C17.4603 20 16.3402 20 14.1 20H6.9C4.65979 20 3.53969 20 2.68404 19.564C1.93139 19.1805 1.31947 18.5686 0.935974 17.816C0.5 16.9603 0.5 15.8402 0.5 13.6V6.4ZM15.6735 7.60187C15.6735 11.2667 12.9892 15.5 8.08363 15.5C6.58023 15.5 5.17567 15.0399 4 14.2603C4.20808 14.2874 4.42137 14.2982 4.63465 14.2982C5.88315 14.2982 7.03281 13.8543 7.94838 13.1073C6.78311 13.0856 5.79472 12.2844 5.45658 11.1801C5.61785 11.2126 5.78431 11.2288 5.95598 11.2288C6.20048 11.2288 6.43457 11.1964 6.65826 11.1314C5.44098 10.877 4.52021 9.75098 4.52021 8.40846V8.37057C4.87915 8.57628 5.29012 8.70079 5.72709 8.71703C5.01441 8.219 4.54102 7.36909 4.54102 6.40551C4.54102 5.89665 4.67107 5.42028 4.89996 5.00886C6.21609 6.68701 8.18247 7.79675 10.3986 7.91043C10.3569 7.70472 10.3309 7.4936 10.3309 7.27707C10.3309 5.74508 11.5274 4.5 12.9996 4.5C13.7643 4.5 14.4562 4.83563 14.9452 5.37697C15.5538 5.25246 16.126 5.0251 16.6411 4.70571C16.4382 5.35531 16.0168 5.90207 15.4654 6.24311C16.0064 6.17274 16.5214 6.02657 17 5.80463C16.6411 6.3622 16.1885 6.85482 15.6683 7.24459C15.6735 7.36368 15.6735 7.48278 15.6735 7.60187Z" fill="#fff"></path></g>
               
               </svg>

            </div>

         </div>

         <div className="flex justify-end px-16 pt-10 pb-24 gap-10 text-base">

            <div className="flex gap-2 items-center hover:text-purple-600 duration-300 group hover:cursor-pointer">
               <div className="h-5 w-5 rounded-full border-2 border-white group-hover:border-purple-600 relative duration-300">
                  <div className="h-2 w-2 bg-white group-hover:bg-purple-600 absolute rounded-full left-1 top-1 duration-300"></div>
               </div>
               <text>Português</text>
            </div>

            <div className="flex gap-2 items-center hover:text-purple-600 duration-300 group hover:cursor-pointer">
               <div className="h-5 w-5 rounded-full border-2 border-white group-hover:border-purple-600 relative duration-300">
               </div>
               <text>English</text>
            </div>

         </div>

      </div>
   )
}