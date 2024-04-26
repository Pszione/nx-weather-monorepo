export function defaultErrorHandler(error: any): void {
    // throw error;
  console.error('error', error);
  if (error && error.message) {
    console.error('error message', error.message);
  }
}