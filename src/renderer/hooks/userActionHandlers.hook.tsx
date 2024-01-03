import invokeServer from '../IPC/InvokeServer';

export type UserActionHandlers = {
  sendStartScanningRequest: (startPath: string) => Promise<void>;
  sendStopScanningRequest: () => Promise<void>;
  getCurrentDirectoryMap: (basePath: string) => Promise<void>;
  getAvailableDrives: () => Promise<void>;
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

  const getCurrentDirectoryMap = async (basePath: string) => {
    invokeServer('get_current_map', basePath);
  };

  const getAvailableDrives = async () => {
    invokeServer('get_available_drives', null);
  };

  return {
    sendStartScanningRequest,
    sendStopScanningRequest,
    getCurrentDirectoryMap,
    getAvailableDrives,
  };
};
