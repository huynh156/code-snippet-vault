import React, { useState, useEffect } from 'react';
import { X, Code, Tag, FileText } from 'lucide-react';

export function SnippetForm({ isOpen, onClose, onSave, editingSnippet }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  useEffect(() => {
    if (editingSnippet) {
      setTitle(editingSnippet.title || '');
      setLanguage(editingSnippet.language || 'javascript');
      setCode(editingSnippet.code || '');
      setDescription(editingSnippet.description || '');
      setTagsInput((editingSnippet.tags || []).join(', '));
    } else {
      setTitle('');
      setLanguage('javascript');
      setCode('');
      setDescription('');
      setTagsInput('');
    }
  }, [editingSnippet, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !code.trim()) return;

    const tags = tagsInput
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(t => t.length > 0);

    const snippetData = {
      id: editingSnippet ? editingSnippet.id : `snip-${Date.now()}`,
      title: title.trim(),
      language: language.toLowerCase(),
      code,
      description: description.trim(),
      tags,
      isFavorite: editingSnippet ? editingSnippet.isFavorite : false,
      createdAt: editingSnippet ? editingSnippet.createdAt : new Date().toISOString()
    };

    onSave(snippetData);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-panel modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            {editingSnippet ? 'Chỉnh Sửa Snippet Code' : 'Thêm Snippet Code Mới'}
          </h2>
          <button className="action-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Tiêu đề Snippet *</label>
            <input 
              type="text"
              className="form-input"
              placeholder="VD: Thuật toán Binary Search C++"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Ngôn ngữ lập trình *</label>
            <select 
              className="form-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++ / C</option>
              <option value="java">Java</option>
              <option value="sql">SQL</option>
              <option value="css">CSS / HTML</option>
              <option value="json">JSON</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Nội dung đoạn Code *</label>
            <textarea 
              className="form-textarea code-font"
              rows={8}
              placeholder="// Nhập hoặc dán đoạn mã nguồn vào đây..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mô tả ngắn (Tùy chọn)</label>
            <input 
              type="text"
              className="form-input"
              placeholder="VD: Sử dụng để lọc danh sách sinh viên theo GPA"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Thẻ phân loại Tags (phân cách bằng dấu phẩy)</label>
            <input 
              type="text"
              className="form-input"
              placeholder="VD: react, hooks, frontend"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="btn btn-primary">
              {editingSnippet ? 'Lưu Thay Đổi' : 'Thêm Snippet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
