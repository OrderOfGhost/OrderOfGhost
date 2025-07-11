import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children?: ReactNode;
}

export const Card = ({ title, children }: CardProps) => (
  <div className="bg-gray-800 p-6 rounded shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div>{children}</div>
  </div>
);
