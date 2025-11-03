import React, { useState, useCallback, useMemo } from 'react';
import { locations, Location } from '@/app/components/Location/types'; // 假設 type.ts 在同一個目錄

/**
 * 🇹🇼 地區下拉選單組件
 * 允許用戶從定義的 locations 列表中選擇一個地區
 */
const LocationSelect: React.FC = () => {
  // 1. 使用 useState 來管理當前選中的地區
  // 預設值為 locations 列表中的第一個地區，類型為 Location
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  // 2. 處理選擇變化的函式，使用 useCallback 優化
  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    // 透過類型斷言確保 value 是 Location 類型（因為它是從 locations 產生的）
    setSelectedLocation(event.target.value as Location);
  }, []);

  // 3. 渲染 `<option>` 列表，使用 useMemo 優化性能
  const locationOptions = useMemo(() => {
    return locations.map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ));
  }, []); // 依賴為空陣列，只在組件首次渲染時計算一次

  return (
    <div>
      <h3>請選擇一個地區:</h3>
      <select
        id="location-select"
        value={selectedLocation} // 控制組件：顯示當前 state 的值
        onChange={handleChange}  // 處理選擇變化的事件
        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
      >
        {locationOptions}
      </select>
      <p style={{ marginTop: '15px' }}>
        您當前選擇的是：<strong>{selectedLocation}</strong>
      </p>
    </div>
  );
};

export default LocationSelect;
