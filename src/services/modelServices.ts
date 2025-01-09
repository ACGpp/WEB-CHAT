import { AIModelRequest, AIModelResponse } from './types';
import { ModelType, MODEL_CONFIGS } from '../types/chat';

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
    return this.checkModelAvailability(modelType);
  }
}

export default ModelService; 