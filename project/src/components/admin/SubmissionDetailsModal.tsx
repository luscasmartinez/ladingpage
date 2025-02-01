import React from 'react';
import { X, Calendar, Mail, Phone, MessageSquare, Trash2 } from 'lucide-react';
import { FormData } from '../../types/submission';
import CommentsList from './CommentsList';
import CommentModal from './CommentModal';

interface SubmissionDetailsModalProps {
  submission: FormData;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
  onAddComment: (id: string, comment: string) => void;
}

export default function SubmissionDetailsModal({
  submission,
  isOpen,
  onClose,
  onDelete,
  onAddComment
}: SubmissionDetailsModalProps) {
  const [showCommentModal, setShowCommentModal] = React.useState(false);

  if (!isOpen) return null;

  const handleAddComment = (comment: string) => {
    onAddComment(submission.id!, comment);
  };

  const commentsCount = submission.comments?.length || 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-900">
            {submission.businessName}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCommentModal(true)}
              className="p-2 text-gray-400 hover:text-primary rounded-full hover:bg-primary/5 
                transition-colors relative"
              title="Adicionar comentário"
            >
              <MessageSquare className="w-5 h-5" />
              {commentsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 
                  rounded-full flex items-center justify-center">
                  {commentsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => onDelete(submission.id!)}
              className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50"
              title="Excluir submissão"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>{submission.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{submission.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{new Date(submission.createdAt).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Serviços Solicitados:</h4>
              <div className="flex flex-wrap gap-2">
                {submission.services.map((service) => (
                  <span
                    key={service}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Descrição do Negócio:</h4>
              <p className="text-gray-600">{submission.businessDescription}</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Ideias e Objetivos:</h4>
              <p className="text-gray-600">{submission.ideas}</p>
            </div>

            {submission.comments && submission.comments.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Comentários:</h4>
                <CommentsList comments={submission.comments} />
              </div>
            )}
          </div>
        </div>
      </div>

      <CommentModal
        isOpen={showCommentModal}
        onClose={() => setShowCommentModal(false)}
        onSubmit={handleAddComment}
      />
    </div>
  );
}