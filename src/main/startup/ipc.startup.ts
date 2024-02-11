import { BrowserWindow } from 'electron';
import * as ClientEventHandlers from './clientEventHandlers';
import registerEvent from '../IPC/RegisterEvent';
import { ErrorMessage } from '../../shared/Scanner/ErrorMessage';
import createStackTraceFromException from '../../shared/utils/StackTrace.utils';
import { GetCurrentMapProps } from '../../shared/IPC/types/clientToServer';

export default function setIpcRoutes(
  // eslint-disable-next-line no-undef
  ipcMain: Electron.IpcMain,
  browserWindow: BrowserWindow,
) {
  // Wrap each event handler in a try catch statement that automatically sends an ErrorMessage
  // event to the client upon error
  async function forwardErrorsToClient<T>(
    action: () => Promise<T>,
  ): Promise<T | null> {
    try {
      return action();
    } catch (ex: any) {
      // eslint-disable-next-line camelcase
      const err_msg: ErrorMessage = {
        stringMessage: `Error from server: ${createStackTraceFromException(
          ex,
        )}`,
      };
      try {
        ClientEventHandlers.handleErrorMessage(browserWindow, err_msg);
      } catch (exc: any) {
        console.log(
          // eslint-disable-next-line prettier/prettier
        `Exception while handling exception. ${createStackTraceFromException(exc)}`
        );
      }
      return null;
    }
  }
  registerEvent('start_scanning', ipcMain, async (param) => {
    await forwardErrorsToClient(async () =>
      ClientEventHandlers.handleRequestScanning(param),
    );
    const message: ErrorMessage = {
      stringMessage: 'Start scanning request sent',
    };
    ClientEventHandlers.handleErrorMessage(browserWindow, message);
    return null;
  });

  registerEvent('stop_scanning', ipcMain, async () => {
    await forwardErrorsToClient(async () =>
      ClientEventHandlers.handleRequestStopScanning(),
    );
    const message: ErrorMessage = {
      stringMessage: 'Stop scanning request sent',
    };
    ClientEventHandlers.handleErrorMessage(browserWindow, message);
    return null;
  });

  // The exception below will disappear when the `handleRequestCurrentDirectoryMap` will be implemented
  registerEvent(
    'get_current_map',
    ipcMain,
    async (props: GetCurrentMapProps) => {
      return forwardErrorsToClient(async () =>
        ClientEventHandlers.handleRequestCurrentDirectoryMap(props),
      );
    },
  );

  // The exception below will disappear when the `handleAvailableDrivesRequest` will be implemented
  registerEvent('get_available_drives', ipcMain, async () => {
    return forwardErrorsToClient(async () =>
      ClientEventHandlers.handleAvailableDrivesRequest(),
    );
  });
}
