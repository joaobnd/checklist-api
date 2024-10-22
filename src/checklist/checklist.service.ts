import { PrismaClient } from '@prisma/client';
import { LogLevel, logMessage } from "../lib/logger";

const prisma = new PrismaClient();

class ChecklistService {
  async createChecklist(email: string, checklistData: { nome: string; checked: boolean; }[], description: string) {
    try {
      const checklist = await prisma.checklist.create({
        data: {
          driverEmail: email,
          verificacaoDePneus: checklistData.find(item => item.nome === 'Verificação de Pneus')?.checked ?? false,
          verificacaoDeLuzes: checklistData.find(item => item.nome === 'Verificação de Luzes')?.checked ?? false,
          verificacaoDeFreios: checklistData.find(item => item.nome === 'Verificação de Freios')?.checked ?? false,
          verificacaoDoTanque: checklistData.find(item => item.nome === 'Verificação do Tanque de Combustível')?.checked ?? false,
          verificacaoDeEscapamento: checklistData.find(item => item.nome === 'Verificação de Escapamento')?.checked ?? false,
          verificacaoDeOleos: checklistData.find(item => item.nome === 'Verificação de Óleo do Motor')?.checked ?? false,
          verificacaoDeLimpadores: checklistData.find(item => item.nome === 'Verificação de Limpadores de Para-brisa')?.checked ?? false,
          verificacaoDeSinalizacao: checklistData.find(item => item.nome === 'Verificação de Sinalização')?.checked ?? false,
          verificacaoDeDocumentos: checklistData.find(item => item.nome === 'Verificação de Documentação')?.checked ?? false,
          problemas: description,
        }
      });

      return checklist;
    } catch (error) {
      logMessage(LogLevel.ERROR, 'Cannot create checklist.', { message: error.message });
      throw new Error('Erro ao criar a checklist: ' + error.message);
    }
  }

  async getChecklistsByEmail(email: string) {
    try {
      const checklists = await prisma.checklist.findMany({
        where: {
          driverEmail: email,
        },
      });

      return checklists;
    } catch (error) {
      logMessage(LogLevel.ERROR, 'Cannot retrieve checklists.', { message: error.message });
      throw new Error('Erro ao recuperar checklists: ' + error.message);
    }
  }
}

export default ChecklistService;