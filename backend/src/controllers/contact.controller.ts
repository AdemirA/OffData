import { Request, Response } from 'express';
import { ContactRequest, ApiResponse } from '../types';

export class ContactController {
  static async sendContact(
    req: Request<{}, {}, ContactRequest>,
    res: Response<ApiResponse>
  ) {
    try {
      const { name, email, phone, company, message, projectInterest } = req.body;

      // Log da mensagem (em produção, envie por email ou salve no DB)
      console.log('📧 Nova mensagem de contato recebida:');
      console.log({
        name,
        email,
        phone,
        company,
        message,
        projectInterest,
        timestamp: new Date().toISOString()
      });

      // TODO: Implementar envio de email via SMTP ou serviço como SendGrid/Mailgun
      // TODO: Ou salvar no banco de dados

      res.status(200).json({
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        data: {
          id: `contact-${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Erro ao processar contato:', error);
      res.status(500).json({
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
      });
    }
  }
}
