
export interface FileData {
    name: string;
    cover: string;
    languages: string[];
    id: string;
    status: 'ready' | 'transcribing' | 'error';
    createdAt: string;
    updatedAt: string;
    errorMessage: string;
  };

export {};  