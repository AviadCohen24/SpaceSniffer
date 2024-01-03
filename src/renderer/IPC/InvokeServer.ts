import { IPCMethods } from '../../shared/IPC/types/clientToServer';

export default async function invokeServer<T extends keyof IPCMethods>(
  method: T,
  params: IPCMethods[T]['request'],
): Promise<IPCMethods[T]['response']> {
  // eslint-disable-next-line no-return-await
  return await window.electron.ipcRenderer.invoke(method, params);
}
