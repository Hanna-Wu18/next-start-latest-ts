'use client';

import React from 'react';
import { locations, Location } from '@/app/components/Location/types'; // pastikan path sesuai

interface Props {
  selected?: Location;
  onChange: (location: Location) => void;
}

export default function LocationDropdown({ selected, onChange }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="location" className="mb-1 text-sm font-medium text-gray-700">
        Select Location 選擇地點
      </label>
      <select
        id="location"
        value={selected ?? ''}
        onChange={(e) => onChange(e.target.value as Location)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
      >
        <option value="">請選擇地點</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}
