import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { FormData } from '../../types/submission';
import { Calendar, MessageSquare } from 'lucide-react';
import SubmissionDetailsModal from './SubmissionDetailsModal';

interface SubmissionCardProps {
  submission: FormData;
  index: number;
  onDelete: (id: string) => void;
  onAddComment: (id: string, comment: string) => void;
}

export default function SubmissionCard({ 
  submission, 
  index,
  onDelete,
  onAddComment
}: SubmissionCardProps) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const commentsCount = submission.comments?.length || 0;

  return (
    <>
      <Draggable draggableId={submission.id!} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={() => setShowDetailsModal(true)}
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer
              ${snapshot.isDragging ? 'shadow-xl ring-2 ring-primary/20' : ''}`}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900">{submission.businessName}</h3>
                {commentsCount > 0 && (
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span>{commentsCount}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{new Date(submission.createdAt).toLocaleDateString('pt-BR')}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {submission.services.slice(0, 2).map((service) => (
                  <span
                    key={service}
                    className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                  >
                    {service}
                  </span>
                ))}
                {submission.services.length > 2 && (
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                    +{submission.services.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Draggable>

      <SubmissionDetailsModal
        submission={submission}
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        onDelete={onDelete}
        onAddComment={onAddComment}
      />
    </>
  );
}