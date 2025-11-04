import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  company: z.string().max(100).optional(),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres').max(1000),
  projectInterest: z.enum(['homeclick', 'graotech', 'resolveLgpd', 'other']).optional()
});

export const validateContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    contactSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validação falhou',
        errors: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      });
      return;
    }
    next(error);
  }
};
