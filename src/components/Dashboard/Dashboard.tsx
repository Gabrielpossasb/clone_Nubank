import { Section1 } from './sections/Section1';
import { SectionCard1 } from './cards/CardSection1';
import { Home } from './sections/Home';
import { Section2 } from './sections/Section2';
import { Section3 } from './sections/Section3';
import { Section4 } from './sections/Section4';
import { Section5 } from './sections/Section5';
import { Section6 } from './sections/Section6';

export function Dashboard() {
   return (

      <div className={'w-full pt-[9vh] gap-12 flex flex-col'}>

         <Home/>

         <SectionCard1/>

         <Section1/>

         <Section2/>

         <Section3/>

         <Section4/>

         <Section5/>

         <Section6/>

      </div>
   )
}