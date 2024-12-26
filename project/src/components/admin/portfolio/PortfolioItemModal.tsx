import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from '../../../types/portfolio';
import { addPortfolioItem, updatePortfolioItem } from '../../../services/portfolioService';
import FileUploadField from './FileUploadField';
import { getFileType } from '../../../services/storageService';

interface PortfolioItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
  editingItem: PortfolioItem | null;
}

export default function PortfolioItemModal({
  isOpen,
  onClose,
  onSaved,
  editingItem
}: PortfolioItemModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'image' as 'image' | 'video',
    url: '',
    thumbnail: '',
    dimensions: {
      width: 1920,
      height: 1080
    }
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title,
        description: editingItem.description,
        type: editingItem.type,
        url: editingItem.url,
        thumbnail: editingItem.thumbnail,
        dimensions: editingItem.dimensions || { width: 1920, height: 1080 }
      });
    } else {
      setFormData({
        title: '',
        description: '',
        type: 'image',
        url: '',
        thumbnail: '',
        dimensions: { width: 1920, height: 1080 }
      });
    }
  }, [editingItem]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await updatePortfolioItem(editingItem.id, formData);
      } else {
        await addPortfolioItem(formData);
      }
      onSaved();
    } catch (error) {
      console.error('Error saving portfolio item:', error);
    }
  };

  const handleMainFileUploaded = (url: string) => {
    setFormData(prev => ({
      ...prev,
      url,
      thumbnail: prev.type === 'image' ? url : prev.thumbnail
    }));
  };

  const handleThumbnailUploaded = (url: string) => {
    setFormData(prev => ({ ...prev, thumbnail: url }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">
            {editingItem ? 'Editar Item' : 'Novo Item'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'image' | 'video' })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="image">Imagem</option>
              <option value="video">Vídeo</option>
            </select>
          </div>

          <FileUploadField
            label={formData.type === 'video' ? 'Vídeo' : 'Imagem'}
            accept={formData.type === 'video' ? 'video/*' : 'image/*'}
            onFileUploaded={handleMainFileUploaded}
            currentUrl={formData.url}
          />

          <FileUploadField
            label="Thumbnail"
            accept="image/*"
            onFileUploaded={handleThumbnailUploaded}
            currentUrl={formData.thumbnail}
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              {editingItem ? 'Salvar' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}