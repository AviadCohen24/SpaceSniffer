export default function createStackTraceFromException(ex: any): string {
  if (ex instanceof Error) {
    return `${ex.message}\n${ex.stack}`;
  }
  return `An unexpected error occurred: ${ex}`;
}
