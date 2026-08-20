import React, { useEffect, useState } from 'react';
import { Copy, Check, Star, Edit3, Trash2, Tag, Calendar } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// Import common prism languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';

export function SnippetCard({ 
  snippet, 
  onCopy, 
  onToggleFavorite, 
  onEdit, 
  onDelete, 
  onSelectTag 
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [snippet.code, snippet.language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    if (onCopy) onCopy(snippet.title);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="glass-panel snippet-card">
      <div className="snippet-header">
        <div className="snippet-title-group">
          <div className="snippet-lang-badge">
            {snippet.language}
          </div>
          <h3 className="snippet-title">{snippet.title}</h3>
        </div>

        <div className="snippet-card-actions">
          <button 
            className={`action-btn favorite ${snippet.isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(snippet.id)}
            title={snippet.isFavorite ? 'Bỏ yêu thích' : 'Đánh dấu yêu thích'}
          >
            <Star size={18} fill={snippet.isFavorite ? '#f59e0b' : 'none'} />
          </button>
          <button 
            className="action-btn"
            onClick={() => onEdit(snippet)}
            title="Chỉnh sửa đoạn code"
          >
            <Edit3 size={16} />
          </button>
          <button 
            className="action-btn"
            onClick={() => onDelete(snippet.id)}
            title="Xóa đoạn code"
          >
            <Trash2 size={16} style={{ color: 'var(--accent-danger)' }} />
          </button>
        </div>
      </div>

      {/* Description */}
      {snippet.description && (
        <p className="snippet-description">{snippet.description}</p>
      )}

      {/* Code Area with Copy Button */}
      <div className="code-block-wrapper">
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
          <span>{copied ? 'Đã chép!' : 'Copy'}</span>
        </button>
        <pre className={`language-${snippet.language.toLowerCase()}`}>
          <code className={`language-${snippet.language.toLowerCase()}`}>
            {snippet.code}
          </code>
        </pre>
      </div>

      {/* Tags and Footer */}
      <div className="snippet-footer">
        <div className="tag-cloud">
          {(snippet.tags || []).map(tag => (
            <span 
              key={tag} 
              className="tag-pill"
              onClick={() => onSelectTag && onSelectTag(tag)}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="snippet-date" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Calendar size={12} />
          <span>{formatDate(snippet.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
