import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          {toast.type === 'success' && <CheckCircle2 size={18} style={{ color: '#10b981' }} />}
          {toast.type === 'error' && <AlertCircle size={18} style={{ color: '#ef4444' }} />}
          {toast.type === 'info' && <Info size={18} style={{ color: '#6366f1' }} />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
