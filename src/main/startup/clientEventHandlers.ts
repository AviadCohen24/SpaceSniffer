import { BrowserWindow } from 'electron';
import emitToClient from '../IPC/EmitToClient';
import { ErrorMessage } from '../../shared/Scanner/ErrorMessage';
import { CurrentProgressMessage } from '../../shared/Scanner/Progress';
import { FolderHierarchy } from '../../Scanner/FolderHierarchy';

export function handleErrorMessage(
  browserWindow: BrowserWindow,
  data: ErrorMessage,
): void {
  emitToClient(browserWindow, 'error_message', data);
}

export function handleProgressRequest(
  browserWindow: BrowserWindow,
  data: CurrentProgressMessage,
): void {
  emitToClient(browserWindow, 'progress_status', data);
}

export async function handleRequestScanning(startPath: string) {
  // TODO: Invoke start scanning function that exist in the rust scanning DLL
  console.log(
    `Start scanning request arrived successfully with the path: ${startPath}`,
  );
}

export async function handleRequestStopScanning() {
  // TODO: Invoke stop scanning function that exist in the rust scanning DLL
  console.log(`Stop scanning request arrived successfully`);
}

export async function handleRequestCurrentDirectoryMap() {
  // TODO: Invoke get current directory function that exist in the rust scanning DLL
  // TODO: Temporary implement for demo
  let jsonObject =
}

export async function handleAvailableDrivesRequest() {
  // TODO: Implement export available drives
}
