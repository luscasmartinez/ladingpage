export interface Comment {
  text: string;
  createdAt: number;
}

export interface FormData {
  id?: string;
  businessName: string;
  email: string;
  phone: string;
  businessDescription: string;
  ideas: string;
  services: string[];
  createdAt: any;
  status: 'new' | 'inProgress' | 'completed';
  comments?: Comment[];
}

export interface KanbanColumn {
  id: 'new' | 'inProgress' | 'completed';
  title: string;
  items: FormData[];
}