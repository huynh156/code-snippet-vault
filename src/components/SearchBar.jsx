import React from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

export function SearchBar({ 
  searchQuery, 
  setSearchQuery, 
  sortBy, 
  setSortBy, 
  selectedLanguage, 
  setSelectedLanguage,
  availableLanguages 
}) {
  return (
    <div className="controls-bar">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Tìm kiếm theo tiêu đề, nội dung code hoặc tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <select 
          className="select-input"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="all">Tất cả Ngôn ngữ</option>
          {availableLanguages.map(lang => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>

        <select 
          className="select-input"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Mới nhất</option>
          <option value="oldest">Cũ nhất</option>
          <option value="title">Tên A - Z</option>
        </select>
      </div>
    </div>
  );
}
