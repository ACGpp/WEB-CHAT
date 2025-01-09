import { AIModelRequest, AIModelResponse } from './types';
import { ModelType, MODEL_CONFIGS } from '../types/chat';
import axios from 'axios';

class ModelService {
  static checkModelAvailability(modelType: ModelType): AIModelResponse {
    const model = MODEL_CONFIGS[modelType];
    if (!model.isAvailable || !model.url) {
      return {
        content: '该模型暂不可用',
        modelType,
        error: '模型不可用'
      };
    }
    return {
      content: `已加载 ${model.name}`,
      modelType
    };
  }

  static async sendMessage(modelType: ModelType, request: AIModelRequest): Promise<AIModelResponse> {
    try {
      const MODEL_API_URL = 'https://your-model-api.com'; // Define the API URL
      const response = await axios.post<{ status: string; message: string; data: any }>(`${MODEL_API_URL}/${modelType}`, request);
      return {
        content: response.data.message,
        modelType,
      };
    } catch (error) {
      throw new Error('发送消息失败');
    }
  }
}

export default ModelService; 