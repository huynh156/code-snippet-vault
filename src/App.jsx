import React, { useState, useMemo } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { initialSnippets } from './data/initialSnippets';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { SnippetCard } from './components/SnippetCard';
import { SnippetForm } from './components/SnippetForm';
import { Toast } from './components/Toast';
import { Code2, Inbox } from 'lucide-react';

export function App() {
  const [snippets, setSnippets] = useLocalStorage('code_vault_snippets', initialSnippets);
  const [theme, setTheme] = useLocalStorage('code_vault_theme', 'dark');

  // Filter & Search states
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'favorites'
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest' | 'title'

  // Modal & Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSnippet, setEditingSnippet] = useState(null);

  // Toast state
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Get available languages list
  const availableLanguages = useMemo(() => {
    const langs = new Set(snippets.map(s => s.language.toLowerCase()));
    return Array.from(langs);
  }, [snippets]);

  // Real-time Filtered and Sorted Snippets
  const filteredSnippets = useMemo(() => {
    return snippets
      .filter(snippet => {
        // 1. Favorites Filter
        if (activeFilter === 'favorites' && !snippet.isFavorite) {
          return false;
        }
        // 2. Language Filter
        if (selectedLanguage !== 'all' && snippet.language.toLowerCase() !== selectedLanguage.toLowerCase()) {
          return false;
        }
        // 3. Tag Filter
        if (selectedTag !== 'all' && !(snippet.tags || []).includes(selectedTag.toLowerCase())) {
          return false;
        }
        // 4. Search Query Filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = snippet.title.toLowerCase().includes(q);
          const matchCode = snippet.code.toLowerCase().includes(q);
          const matchDesc = (snippet.description || '').toLowerCase().includes(q);
          const matchTags = (snippet.tags || []).some(t => t.toLowerCase().includes(q));
          return matchTitle || matchCode || matchDesc || matchTags;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortBy === 'oldest') {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [snippets, activeFilter, selectedLanguage, selectedTag, searchQuery, sortBy]);

  // Handlers
  const handleSaveSnippet = (snippetData) => {
    if (editingSnippet) {
      setSnippets(prev => prev.map(s => s.id === snippetData.id ? snippetData : s));
      addToast(`Đã cập nhật: "${snippetData.title}"`);
    } else {
      setSnippets(prev => [snippetData, ...prev]);
      addToast(`Đã thêm mới: "${snippetData.title}"`);
    }
  };

  const handleToggleFavorite = (id) => {
    setSnippets(prev => prev.map(s => {
      if (s.id === id) {
        const nextFav = !s.isFavorite;
        addToast(nextFav ? 'Đã thêm vào Yêu thích ⭐' : 'Đã bỏ Yêu thích', 'info');
        return { ...s, isFavorite: nextFav };
      }
      return s;
    }));
  };

  const handleDeleteSnippet = (id) => {
    const target = snippets.find(s => s.id === id);
    if (window.confirm(`Bạn có chắc chắn muốn xóa snippet "${target?.title}"?`)) {
      setSnippets(prev => prev.filter(s => s.id !== id));
      addToast('Đã xóa đoạn code khỏi hệ thống', 'error');
    }
  };

  const handleEditSnippet = (snippet) => {
    setEditingSnippet(snippet);
    setIsModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setEditingSnippet(null);
    setIsModalOpen(true);
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(snippets, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `code_vault_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    addToast('Đã xuất file JSON sao lưu thành công!');
  };

  const handleImportData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (Array.isArray(importedData)) {
          setSnippets(importedData);
          addToast(`Đã nhập thành công ${importedData.length} đoạn code từ file!`);
        } else {
          addToast('File JSON không đúng định dạng', 'error');
        }
      } catch (err) {
        addToast('Lỗi đọc file JSON', 'error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="app-container">
      <Header 
        theme={theme}
        setTheme={setTheme}
        onOpenCreateModal={handleOpenCreateModal}
        onExportData={handleExportData}
        onImportData={handleImportData}
        snippetCount={snippets.length}
      />

      <main className="main-content">
        <Sidebar 
          snippets={snippets}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            availableLanguages={availableLanguages}
          />

          {filteredSnippets.length > 0 ? (
            <div className="snippet-grid">
              {filteredSnippets.map(snippet => (
                <SnippetCard 
                  key={snippet.id}
                  snippet={snippet}
                  onCopy={(title) => addToast(`Đã chép code "${title}" vào clipboard!`)}
                  onToggleFavorite={handleToggleFavorite}
                  onEdit={handleEditSnippet}
                  onDelete={handleDeleteSnippet}
                  onSelectTag={(tag) => setSelectedTag(tag)}
                />
              ))}
            </div>
          ) : (
            <div className="glass-panel empty-state">
              <Inbox size={48} className="empty-icon" />
              <h3>Không tìm thấy đoạn code nào</h3>
              <p style={{ marginTop: '6px' }}>Thử thay đổi từ khóa tìm kiếm hoặc chọn lại bộ lọc ở Sidebar.</p>
              <button 
                className="btn btn-primary" 
                style={{ marginTop: '16px' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLanguage('all');
                  setSelectedTag('all');
                  setActiveFilter('all');
                }}
              >
                Đặt lại bộ lọc
              </button>
            </div>
          )}
        </section>
      </main>

      <SnippetForm 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSnippet}
        editingSnippet={editingSnippet}
      />

      <Toast toasts={toasts} />
    </div>
  );
}

export default App;
