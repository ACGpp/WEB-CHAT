export interface AIModelResponse {
  content: string;
  modelType: string;
  error?: string;
}

export interface AIModelRequest {
  prompt: string;
  conversation?: {
    messages: Array<{
      role: 'user' | 'assistant';
      content: string;
    }>;
  };
} 