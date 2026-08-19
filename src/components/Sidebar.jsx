import React from 'react';
import { Layers, Star, Code, Tag } from 'lucide-react';

export function Sidebar({ 
  snippets, 
  activeFilter, 
  setActiveFilter, 
  selectedLanguage, 
  setSelectedLanguage,
  selectedTag, 
  setSelectedTag 
}) {
  // Compute counts
  const totalCount = snippets.length;
  const favoriteCount = snippets.filter(s => s.isFavorite).length;

  // Extract all unique languages with counts
  const languagesMap = snippets.reduce((acc, snippet) => {
    const lang = snippet.language.toLowerCase();
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});

  const languagesList = Object.entries(languagesMap).sort((a, b) => b[1] - a[1]);

  // Extract all unique tags with counts
  const tagsMap = snippets.reduce((acc, snippet) => {
    (snippet.tags || []).forEach(tag => {
      const cleanTag = tag.toLowerCase().trim();
      if (cleanTag) {
        acc[cleanTag] = (acc[cleanTag] || 0) + 1;
      }
    });
    return acc;
  }, {});

  const tagsList = Object.entries(tagsMap).sort((a, b) => b[1] - a[1]);

  const handleSelectFilter = (filterType) => {
    setActiveFilter(filterType);
    setSelectedLanguage('all');
    setSelectedTag('all');
  };

  const handleSelectLanguage = (lang) => {
    if (selectedLanguage === lang) {
      setSelectedLanguage('all');
    } else {
      setSelectedLanguage(lang);
      setActiveFilter('all');
    }
  };

  const handleSelectTag = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag('all');
    } else {
      setSelectedTag(tag);
      setActiveFilter('all');
    }
  };

  return (
    <aside className="sidebar">
      {/* Category Menu */}
      <div className="glass-panel sidebar-section">
        <div className="sidebar-title">Danh mục</div>
        <ul className="sidebar-menu">
          <li 
            className={`menu-item ${activeFilter === 'all' && selectedLanguage === 'all' && selectedTag === 'all' ? 'active' : ''}`}
            onClick={() => handleSelectFilter('all')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={16} />
              <span>Tất cả Snippet</span>
            </div>
            <span className="menu-item-count">{totalCount}</span>
          </li>

          <li 
            className={`menu-item ${activeFilter === 'favorites' ? 'active' : ''}`}
            onClick={() => handleSelectFilter('favorites')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star size={16} className="text-warning" />
              <span>Đặc biệt / Yêu thích</span>
            </div>
            <span className="menu-item-count">{favoriteCount}</span>
          </li>
        </ul>
      </div>

      {/* Languages List */}
      <div className="glass-panel sidebar-section">
        <div className="sidebar-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Code size={14} />
          <span>Ngôn ngữ lập trình</span>
        </div>
        <ul className="sidebar-menu">
          {languagesList.map(([lang, count]) => (
            <li 
              key={lang}
              className={`menu-item ${selectedLanguage === lang ? 'active' : ''}`}
              onClick={() => handleSelectLanguage(lang)}
            >
              <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700' }}>
                {lang}
              </span>
              <span className="menu-item-count">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Cloud */}
      {tagsList.length > 0 && (
        <div className="glass-panel sidebar-section">
          <div className="sidebar-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Tag size={14} />
            <span>Thẻ Phân Loại (Tags)</span>
          </div>
          <div className="tag-cloud">
            {tagsList.map(([tag, count]) => (
              <span
                key={tag}
                className={`tag-pill ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => handleSelectTag(tag)}
              >
                #{tag} ({count})
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
