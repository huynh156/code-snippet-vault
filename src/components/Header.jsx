import React from 'react';
import { Code2, Plus, Sun, Moon, Download, Upload } from 'lucide-react';

export function Header({ 
  theme, 
  setTheme, 
  onOpenCreateModal, 
  onExportData, 
  onImportData, 
  snippetCount 
}) {
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-group">
          <div className="logo-icon">
            <Code2 size={24} />
          </div>
          <div className="logo-text">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1>Code Vault</h1>
              <span className="logo-badge">Personal Scrum</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Kho lưu trữ & Tra cứu đoạn code ({snippetCount} snippets)
            </span>
          </div>
        </div>

        <div className="header-actions">
          <button 
            className="btn btn-secondary btn-icon-only" 
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className="btn btn-secondary" 
            onClick={onExportData}
            title="Xuất file JSON sao lưu"
          >
            <Download size={16} />
            <span className="hide-mobile">Export</span>
          </button>

          <label className="btn btn-secondary" style={{ cursor: 'pointer' }} title="Nạp file JSON sao lưu">
            <Upload size={16} />
            <span className="hide-mobile">Import</span>
            <input 
              type="file" 
              accept=".json" 
              onChange={onImportData} 
              style={{ display: 'none' }} 
            />
          </label>

          <button className="btn btn-primary" onClick={onOpenCreateModal}>
            <Plus size={18} />
            <span>Thêm Code Mới</span>
          </button>
        </div>
      </div>
    </header>
  );
}
