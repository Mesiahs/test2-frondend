"use client";

import { Universidad } from "@/interfaces/Universidad";
import { useState } from "react";

interface CaseCardProps {
  universidad: Universidad;
  index: number;
}

function CaseCard({ universidad, index }: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex-shrink-0">
        <img 
          className="h-96 w-full object-cover" 
          src={universidad.logo || '/placeholder-university.png'} 
          alt={`Logo de ${universidad.name_university}`} 
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="text-xl font-medium text-gray-800">
            <span className={`block transition-colors duration-300 ${isHovered ? 'text-orange-500' : 'text-gray-800'}`}>
              {universidad.name_university}
            </span>
          </div>
          <div className="mt-2 block">
            <h3 
              className={`lg:text-4xl text-2xl font-semibold transition-colors duration-300 ${isHovered ? 'text-orange-500' : 'text-gray-900'}`}
            >
              {universidad.name_university}
            </h3>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">
              {universidad.descripcion || 'Descripción no disponible'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;