/* eslint-disable camelcase */
import { IpcRendererEvent } from 'electron';
import { IPC_PushNotification } from '../../shared/IPC/types/serverToClient';

export function onServerEvent<T extends keyof IPC_PushNotification>(
  method: T,
  handler: (
    _event: IpcRendererEvent,
    payload: IPC_PushNotification[T]['payload'],
  ) => void,
  onceFlag: boolean,
): void {
  if (onceFlag) {
    window.electron.ipcRenderer.once(method, handler);
  } else {
    window.electron.ipcRenderer.on(method, handler);
  }
}

export function offServerEvent<T extends keyof IPC_PushNotification>(
  method: T,
  handler: (
    _event: IpcRendererEvent,
    payload: IPC_PushNotification[T]['payload'],
  ) => void,
): void {
  window.electron.ipcRenderer.off(method, handler);
}

export function removeAllListenersToServerEvent<
  T extends keyof IPC_PushNotification,
>(method: T): void {
  return window.electron.ipcRenderer.removeAllListeners(method);
}

export function listenerCount<T extends keyof IPC_PushNotification>(
  method: T,
): number {
  return window.electron.ipcRenderer.listenerCount(method);
}
