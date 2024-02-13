import { GetCurrentMapProps } from '../../shared/IPC/types/clientToServer';
import { Drive } from '../../shared/Scanner/Drives';
import invokeServer from '../IPC/InvokeServer';

export type UserActionHandlers = {
  sendStartScanningRequest: (startPath: string) => Promise<void>;
  sendStopScanningRequest: () => Promise<void>;
  getCurrentDirectoryMap: (props: GetCurrentMapProps) => Promise<void>;
  getAvailableDrives: () => Promise<Drive[] | null>;
};

/**
 * Exposes a table of functions to handle various user actions.
 */
export const useUserActionHandlers = (): UserActionHandlers => {
  const sendStartScanningRequest = async (startPath: string) => {
    invokeServer('start_scanning', startPath);
  };

  const sendStopScanningRequest = async () => {
    invokeServer('stop_scanning', null);
  };

  const getCurrentDirectoryMap = async ({
    path,
    depth,
  }: GetCurrentMapProps) => {
    invokeServer('get_current_map', { path, depth });
  };

  const getAvailableDrives = () => invokeServer('get_available_drives', null);

  return {
    sendStartScanningRequest,
    sendStopScanningRequest,
    getCurrentDirectoryMap,
    getAvailableDrives,
  };
};
