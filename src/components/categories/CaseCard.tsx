"use client"

interface Category {
    href: string;
    name: string;
  }
  
  interface CaseCardData {
    imageUrl: string;
    category: Category;
    href: string;
    title: string;
    description: string;
  }
  
  interface CaseCardProps {
    data: CaseCardData;
    index: number;
  }
  
  function CaseCard({ data, index }: CaseCardProps) {
    // Convertimos el 'index' a string al usarlo como ID
    const stringIndex = index.toString();
  
    return (
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
          <img className="h-96 w-full object-cover" src={data.imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-xl font-medium text-gray-800">
              <a href={data.category.href} className="hover:underline">
                {data.category.name}
              </a>
            </p>
            <a href={data.href} className="mt-2 block">
              {/* Usamos la versión string del index como ID */}
              <p id={stringIndex} className="lg:text-4xl text-2xl font-semibold text-gray-900">{data.title}</p>
              <p className="mt-3 text-base text-gray-500">{data.description}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default CaseCard;