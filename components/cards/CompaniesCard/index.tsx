import Image from 'next/image';
import React from 'react';

interface CompanyProps {
  Company: {
    name: string;
    description: string;
    website: string;
    logo: string;
  };
}

export default function CompaniesCard({ Company }: CompanyProps) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition-all justify-between">
      {Company.logo ? (
        <Image
          src={Company.logo}
          alt={Company.name}
          width={80}
          height={80}
          className="object-contain"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
          {Company.name}
        </div>
      )}

      <h3 className="mt-3 text-sm font-bold">{Company.name}</h3>

    </div>
  );
}
