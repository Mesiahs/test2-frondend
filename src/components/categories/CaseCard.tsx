"use client"

import { Universidad } from "@/interfaces/Universidad";

interface Category {
  href: string;
  name: string;
}

// interface CaseCardData {
//   imageUrl: string;
//   category: Category;
//   href: string;
//   title: string;
//   description: string;
// }

// interface CaseCardProps {
//   data: CaseCardData;
//   index: number;
// }

interface CaseCardProps {
  universidad: Universidad; // Assuming universidades is an array of Universidad objects
  index: number
}

function CaseCard({ universidad, index }: CaseCardProps) {
  // Convertimos el 'index' a string al usarlo como ID
  const stringIndex = index.toString()

  return (
    // <div>
    //   {universidad.name_university}
    // </div>
    <div
      onMouseEnter={() => {
        const title_element = document.getElementById(stringIndex);
        title_element?.classList.add('text-orange-500');
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(stringIndex);
        title_element?.classList.remove('text-orange-500');
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img className="h-96 w-full object-cover" src={universidad.logo} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-xl font-medium text-gray-800">
            <a  className="hover:underline">
              {universidad.name_university}
            </a>
          </p>
          <a href={universidad.name_university} className="mt-2 block">
            {/* Usamos la versión string del index como ID */}
            <p id={stringIndex} className="lg:text-4xl text-2xl font-semibold text-gray-900">{universidad.name_university}</p>
            <p className="mt-3 text-base text-gray-500">{universidad.descripcion}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;