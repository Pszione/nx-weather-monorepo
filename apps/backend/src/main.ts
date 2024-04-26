import cors from 'cors';
import express, { Request as ExRequest, Response as ExResponse } from 'express';
import * as path from 'path';
import { generateHTML, serve } from 'swagger-ui-express';
import { setupFirebase } from './config/firebase';
import { errorHandlerMiddleware } from './middlewares/ErrorHandler';
import { RegisterRoutes } from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/docs', serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    generateHTML(await import('../spec/swagger.json'), { isExplorer: true })
  );
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'GRP-System' });
});

setupFirebase();
RegisterRoutes(app);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
server.on('error', console.error);
