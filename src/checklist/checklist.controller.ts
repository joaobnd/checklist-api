import { Request, Response, NextFunction } from 'express';
import ChecklistService from './checklist.service';

class ChecklistController {
  private checklistService = new ChecklistService();

  async create(req: Request, res: Response) {
    const { driverEmail, checklistData, description } = req.body;

    try {
      const newChecklist = await this.checklistService.createChecklist(driverEmail, checklistData, description);
      return res.status(201).json(newChecklist);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getChecklists(req: Request, res: Response) {
    const email = req.params.email;

    try {
      const checklists = await this.checklistService.getChecklistsByEmail(email);
      return res.status(200).json(checklists);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default ChecklistController;