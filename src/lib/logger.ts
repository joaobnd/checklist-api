import pino from 'pino';

enum LogLevel {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

const logger = pino();

const logMessage = (level: LogLevel, message: string, data?: Record<string, unknown>) => {
  switch (level) {
    case LogLevel.INFO:
      logger.info({ message, data });
      break;
    case LogLevel.WARNING:
      logger.warn({ message, data });
      break;
    case LogLevel.ERROR:
      logger.error({ message, data });
      break;
    default:
      throw new Error(`Invalid log level: ${level}`);
  }
};

export { LogLevel, logMessage };