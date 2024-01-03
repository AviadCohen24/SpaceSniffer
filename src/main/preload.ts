/* eslint-disable camelcase */
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { IPCMethods } from '../shared/IPC/types/clientToServer';
import { IPC_PushNotification } from '../shared/IPC/types/serverToClient';

type Channels = keyof IPCMethods;

export interface ElectronHandler {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]): void;

    on: <T extends keyof IPC_PushNotification>(
      channel: T,
      func: (
        _event: IpcRendererEvent,
        args: IPC_PushNotification[T]['payload'],
      ) => void,
    ) => void;

    off: <T extends keyof IPC_PushNotification>(
      channel: T,
      func: (
        _event: IpcRendererEvent,
        args: IPC_PushNotification[T]['payload'],
      ) => void,
    ) => void;

    removeAllListeners: <T extends keyof IPC_PushNotification>(
      channel: T,
    ) => void;

    once: <T extends keyof IPC_PushNotification>(
      channel: T,
      func: (
        _event: IpcRendererEvent,
        args: IPC_PushNotification[T]['payload'],
      ) => void,
    ) => void;

    invoke: <T extends Channels>(
      channel: T,
      args: IPCMethods[T]['request'],
    ) => Promise<IPCMethods[T]['response']>;

    listenerCount: <T extends keyof IPC_PushNotification>(channel: T) => number;
  };
}

const electronHandler: ElectronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, args);
    },

    on: <T extends keyof IPC_PushNotification>(
      channel: T,
      func: (
        _event: IpcRendererEvent,
        args: IPC_PushNotification[T]['payload'],
      ) => void,
    ) => {
      ipcRenderer.on(channel, func);
    },

    off: <T extends keyof IPC_PushNotification>(
      channel: T,
      func: (
        _event: IpcRendererEvent,
        args: IPC_PushNotification[T]['payload'],
      ) => void,
    ) => {
      ipcRenderer.off(channel, func);
    },

    removeAllListeners: <T extends keyof IPC_PushNotification>(channel: T) => {
      ipcRenderer.removeAllListeners(channel);
    },

    listenerCount: <T extends keyof IPC_PushNotification>(
      channel: T,
    ): number => {
      return ipcRenderer.listenerCount(channel);
    },

    once: <T extends keyof IPC_PushNotification>(
      channel: T,
      func: (
        _event: IpcRendererEvent,
        args: IPC_PushNotification[T]['payload'],
      ) => void,
    ) => {
      ipcRenderer.once(channel, func);
    },

    invoke: async (channel, ...args) => {
      return ipcRenderer.invoke(channel, args);
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);
