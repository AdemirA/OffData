import { Router } from 'express';
import { ContactController } from '../controllers/contact.controller';
import { validateContact } from '../middleware/validator';

const router = Router();

router.post('/', validateContact, ContactController.sendContact);

export { router as contactRoutes };
