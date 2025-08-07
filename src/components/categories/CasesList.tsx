import Link from "next/link";
import CaseCard from "./CaseCard";
import { Universidad } from '@/interfaces/Universidad';

interface CasesListProps {
  universidades: Universidad[];
}

function CasesList({ universidades }: CasesListProps) {
  return (
    <div className="universities-list-container">
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-full">
          <div className="mx-auto xl:mx-12 mt-12 grid max-w-lg gap-40 lg:max-w-none lg:grid-cols-2">
            {universidades.map((universidad, index) => (
              <div key={index}>
                <Link
                  key={index}
                  href={`/Universidades/${encodeURIComponent(universidad.name_university)}`}
                >
                  <CaseCard universidad={universidad} index={index} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasesList;