/* eslint-disable prettier/prettier */
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-100 ">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
      
        </li>
        <li >
          <Link href="/">
            {/* span text with bold  */}
            <a className="text-white font-bold text-3xl ">Join 
          </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32" >
{/* draw a blue container with drop shadow  */}
      <div className=" rounded-lg shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center">
        
          <div>
            <h1 className="text-4xl font-bold text-center text-white">
              Play with your friends and win prizes
            </h1>
          </div>
              <div className="mt-4">
                <Link href="/asdas">
                  <a className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                    Join
                  </a>
                </Link>
              </div>
            
           
          </div>
        </div>
      </div>

    </Section>
  </Background>
);

export { Hero };
