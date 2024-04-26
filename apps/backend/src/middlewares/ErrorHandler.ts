// import { ApiError } from '@libs/models';
import { NextFunction, Response } from 'express';

export function errorHandlerMiddleware(
  err: unknown,
  req: any,
  res: Response,
  next: NextFunction
): Response {
  console.error('error', err);
//   if (err instanceof ApiError) {
//     return res.status(err.httpResponseCode).json({
//       ...err.toMap(),
//     });
//   }


  console.error('error data', JSON.stringify(err));
  if (err && (err as any).message) {
    console.error('error message', (err as any).message);
  }

  return res.status((err as any)?.status ?? 500).json({
    message: 'Internal Server Error',
    code: (err as any)?.status ?? 500,
  });
}