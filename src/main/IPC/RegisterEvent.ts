import { IpcMainInvokeEvent } from 'electron';
import { IPCMethods } from '../../shared/IPC/types/clientToServer';

// A type-safe wrapper around the request-response API of Electron Inter-Process Communication API.
export default function registerEvent<T extends keyof IPCMethods>(
  method: T,
  // eslint-disable-next-line no-undef
  ipcMain: Electron.IpcMain,
  handler: (
    param: IPCMethods[T]['request'],
  ) => Promise<IPCMethods[T]['response']>,
) {
  type Request = IPCMethods[T]['request'];
  type Response = IPCMethods[T]['response'];
  ipcMain.handle(
    method,
    async (event: IpcMainInvokeEvent, param: Request): Promise<Response> => {
      return handler(param);
    },
  );
}
