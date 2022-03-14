/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div  className={props.color} style={{ 
    backgroundImage: `url("/assets/images/background.jpg")`,
    // no repeating background image
    backgroundRepeat: 'no-repeat',
    // background position
    backgroundPosition: 'center',
    // background size
    backgroundSize: 'cover',
    // opacity 
  
  }} >{props.children}</div>
);

export { Background };
