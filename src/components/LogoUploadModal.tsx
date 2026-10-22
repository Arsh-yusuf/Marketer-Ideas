import React, { useState, useRef } from 'react';
import { X, Upload, Check, Trash2, Image as ImageIcon } from 'lucide-react';

interface LogoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoUploadModal: React.FC<LogoUploadModalProps> = ({ isOpen, onClose }) => {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(() => {
    return localStorage.getItem('marketer_ides_custom_logo');
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, SVG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        localStorage.setItem('marketer_ides_custom_logo', result);
        setPreview(result);
        setSuccessMessage(true);
        window.dispatchEvent(new Event('marketer_logo_updated'));
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    localStorage.removeItem('marketer_ides_custom_logo');
    setPreview(null);
    window.dispatchEvent(new Event('marketer_logo_updated'));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">Marketer Ides Logo Manager</h3>
              <p className="text-xs text-neutral-500">Upload and preserve your exact brand logo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          {/* Instructions */}
          <p className="text-sm text-neutral-600 leading-relaxed">
            Upload your official <strong>Marketer Ides</strong> logo file. It will immediately appear in the website header and footer with proportions intact.
          </p>

          {/* Drag & Drop Area */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              dragOver
                ? 'border-orange-500 bg-orange-50/50 scale-[1.01]'
                : 'border-neutral-300 hover:border-orange-400 hover:bg-neutral-50/60'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/svg+xml, image/webp"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileProcess(e.target.files[0]);
                }
              }}
            />
            <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-neutral-800">
              Click to select or drag &amp; drop your logo
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Supports PNG with transparent background, SVG, JPG, WebP
            </p>
          </div>

          {/* Current Logo Preview */}
          {preview && (
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-xs font-medium text-neutral-400 whitespace-nowrap">Preview:</span>
                <img
                  src={preview}
                  alt="Custom Marketer Ides Logo Preview"
                  className="h-10 max-w-[200px] object-contain bg-neutral-800/50 p-1 rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-lg flex items-center gap-1.5 transition-colors"
                title="Reset to default brand logo"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              Logo updated successfully! Changes are applied across the entire site.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg shadow-sm hover:bg-neutral-50 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
