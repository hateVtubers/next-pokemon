import Image from 'next/image';

export const Card = ({ title, imageArray }) => {
  return (
    <div className="bg-crimson-500 p-2 w-60 rounded">
      <h4 className="text-center mb-2">{title}</h4>
      <picture className="flex items-center justify-evenly flex-wrap gap-3 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0">
        {imageArray.map((i, index) => (
          <Image src={i} alt={i} width={60} height={60} key={index} priority />
        ))}
      </picture>
    </div>
  );
};
