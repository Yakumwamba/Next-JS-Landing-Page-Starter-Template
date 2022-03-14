import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;

  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center p-4">
    <h1 className="text-5xl text-white font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>

    {props.button}
  </header>
);

export { HeroOneButton };
