import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { FormData, KanbanColumn } from '../../types/submission';
import { Loader2 } from 'lucide-react';
import SubmissionCard from './SubmissionCard';
import { getSubmissions, updateSubmissionStatus, deleteSubmission, addComment } from '../../services/formService';

const columnsConfig: KanbanColumn[] = [
  {
    id: 'new',
    title: 'Novo',
    items: []
  },
  {
    id: 'inProgress',
    title: 'Em Atendimento',
    items: []
  },
  {
    id: 'completed',
    title: 'Concluído',
    items: []
  }
];

export default function SubmissionsList() {
  const [columns, setColumns] = useState<KanbanColumn[]>(columnsConfig);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const data = await getSubmissions();
      
      // Organize submissions into columns
      const newColumns = columnsConfig.map(col => ({
        ...col,
        items: data.filter(item => item.status === col.id)
      }));
      
      setColumns(newColumns);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragEnd = async (result: any) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    // If dropped in the same column in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Find source and destination columns
    const sourceCol = columns.find(col => col.id === source.droppableId);
    const destCol = columns.find(col => col.id === destination.droppableId);

    if (!sourceCol || !destCol) return;

    // Create new arrays
    const newColumns = [...columns];
    const sourceItems = [...sourceCol.items];
    const destItems = source.droppableId === destination.droppableId 
      ? sourceItems 
      : [...destCol.items];

    // Remove from source
    const [removed] = sourceItems.splice(source.index, 1);

    // Add to destination
    destItems.splice(destination.index, 0, removed);

    // Update columns
    newColumns.forEach(col => {
      if (col.id === source.droppableId) {
        col.items = sourceItems;
      }
      if (col.id === destination.droppableId) {
        col.items = destItems;
      }
    });

    // Update state
    setColumns(newColumns);

    // Update in database
    try {
      await updateSubmissionStatus(draggableId, destination.droppableId as FormData['status']);
    } catch (error) {
      console.error('Error updating status:', error);
      // Revert changes on error
      loadSubmissions();
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir esta submissão?')) {
      return;
    }

    try {
      await deleteSubmission(id);
      loadSubmissions();
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const handleAddComment = async (id: string, comment: string) => {
    try {
      const newComment = await addComment(id, comment);
      
      // Update local state
      const newColumns = columns.map(col => ({
        ...col,
        items: col.items.map(item => 
          item.id === id 
            ? { 
                ...item, 
                comments: [...(item.comments || []), newComment] 
              } 
            : item
        )
      }));
      
      setColumns(newColumns);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.id} className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 px-2">
              {column.title} ({column.items.length})
            </h3>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-4 min-h-[200px]"
                >
                  {column.items.map((submission, index) => (
                    <SubmissionCard
                      key={submission.id}
                      submission={submission}
                      index={index}
                      onDelete={handleDelete}
                      onAddComment={handleAddComment}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}