export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectInterest?: 'homeclick' | 'graotech' | 'resolveLgpd' | 'other';
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
