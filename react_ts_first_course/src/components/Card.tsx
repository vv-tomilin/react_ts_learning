import React, { FC } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  onClick?: () => void;
};

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        background: variant === CardVariant.primary ? 'lightgray' : '',
        border: variant === CardVariant.outlined ? '1px solid red' : 'none',
      }}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;