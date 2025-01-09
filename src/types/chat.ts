export type ModelCategory = '中国模型' | '国外模型';

export type ModelType = 
  | 'deepseek'
  | 'gemini-pro'
  | 'bard'
  | 'copilot'
  | 'pi'
  | 'claude-web'
  | 'chatgpt' 
  | 'wenxin-yiyan'
  | 'stability-chat'
  | 'gpt-neo'
  | 'doubao'
  | 'tongwenqianyi';

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: number;
}

export interface ModelConfig {
  id: ModelType;
  name: string;
  description: string;
  url: string;
  provider: 'anthropic' | 'google' | 'microsoft' | 'deepseek' | 'inflection' | 'other' | 'openai' | 'baidu';
  icon?: string;
  isAvailable: boolean;
  category: ModelCategory;
}

export const MODEL_CONFIGS: Record<ModelType, ModelConfig> = {
  'deepseek': {
    id: 'deepseek',
    name: 'DeepSeek',
    description: '强大的代码理解和生成能力',
    url: 'https://chat.deepseek.com',
    provider: 'deepseek',
    icon: '🔍',
    isAvailable: true,
    category: '中国模型'
  },
  'gemini-pro': {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    description: 'Google最新的AI模型',
    url: 'https://gemini.google.com',
    provider: 'google',
    icon: '🌟',
    isAvailable: true,
    category: '国外模型'
  },
  'bard': {
    id: 'bard',
    name: 'Google Bard',
    description: 'Google的对话模型',
    url: 'https://bard.google.com',
    provider: 'google',
    icon: '🎭',
    isAvailable: true,
    category: '国外模型'
  },
  'copilot': {
    id: 'copilot',
    name: 'Microsoft Copilot',
    description: '微软的AI助手',
    url: 'https://copilot.microsoft.com',
    provider: 'microsoft',
    icon: '🤖',
    isAvailable: true,
    category: '国外模型'
  },
  'pi': {
    id: 'pi',
    name: 'Pi',
    description: 'Inflection的个性化AI助手',
    url: 'https://pi.ai',
    provider: 'inflection',
    icon: 'π',
    isAvailable: true,
    category: '国外模型'
  },
  'claude-web': {
    id: 'claude-web',
    name: 'Claude Web',
    description: 'Claude网页版',
    url: 'https://claude.ai',
    provider: 'anthropic',
    icon: '🌐',
    isAvailable: true,
    category: '国外模型'
  },
   
  'chatgpt': {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI的通用对话型AI模型',
    url: 'https://chatgpt.com/',
    provider: 'openai',
    icon: '🤖',
    isAvailable: true,
    category: '国外模型'
  },
  'wenxin-yiyan': {
    id: 'wenxin-yiyan',
    name: '文心一言',
    description: '百度的通用对话型AI模型',
    url: 'https://yiyan.baidu.com',
    provider: 'baidu',
    icon: '🎤',
    isAvailable: true,
    category: '中国模型'
  },
  'stability-chat': {
    id: 'stability-chat',
    name: 'Stability Chat',
    description: 'Stability AI的对话型模型',
    url: 'https://stability.ai/chat',
    provider: 'other',
    icon: '🌀',
    isAvailable: true,
    category: '国外模型'
  },
  'gpt-neo': {
    id: 'gpt-neo',
    name: 'GPT-Neo',
    description: 'EleutherAI的开源对话型AI模型',
    url: 'https://gpt-neo.eleuther.ai',
    provider: 'other',
    icon: '🔮',
    isAvailable: true,
    category: '国外模型'
  },
  'doubao': {
    id: 'doubao',
    name: '豆包',
    description: '中国的对话型AI模型',
    url: 'https://www.doubao.com/chat/',
    provider: 'baidu',
    icon: '🥟',
    isAvailable: true,
    category: '中国模型'
  },
  'tongwenqianyi': {
    id: 'tongwenqianyi',
    name: '通义千问',
    description: '中国的高级对话型AI模型',
    url: 'https://tongyi.aliyun.com/',
    provider: 'baidu',
    icon: '📚',
    isAvailable: true,
    category: '中国模型'
  },
};