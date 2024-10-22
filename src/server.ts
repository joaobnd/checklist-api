import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import { router } from "./routes";
import { LogLevel, logMessage } from "./lib/logger";
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.use(router);

app.get("/_health_check", (_, res: Response) => res.sendStatus(200))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }
  logMessage(LogLevel.ERROR, 'Unhandled Error!');
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
});

app.listen(3030)
console.log('Server up at 3030!')