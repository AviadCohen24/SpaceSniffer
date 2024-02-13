import { BrowserWindow } from 'electron';
import { list } from 'drivelist';
import emitToClient from '../IPC/EmitToClient';
import { ErrorMessage } from '../../shared/Scanner/ErrorMessage';
import { CurrentProgressMessage } from '../../shared/Scanner/Progress';
import { Drive } from '../../shared/Scanner/Drives';
import SnifferManager from '../Sniffer/SnifferManager';
import { GetCurrentMapProps } from '../../shared/IPC/types/clientToServer';

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
  // TODO: Remove this console
  console.log(
    `Start scanning request arrived successfully with the path: ${startPath.toString()}`,
  );
  SnifferManager.getInstance().StartScanner(startPath.toString());
}

export async function handleRequestStopScanning() {
  SnifferManager.getInstance().StopScanner();
  // TODO: Remove this console
  console.log(`Stop scanning request arrived successfully`);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleRequestCurrentDirectoryMap({
  depth,
  path,
}: GetCurrentMapProps) {
  const directoryMap = SnifferManager.getInstance().GetDirectoryMap(
    depth,
    path,
  );
  // TODO: Delete this demo
  // Temporary implement for demo
  // const jsonString: string = `{
  //   "value": 43,
  //   "name": ".tmpiEtJbP",
  //   "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
  //   "children": [
  //       {
  //           "value": 27,
  //           "name": "subfolder1",
  //           "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
  //           "children": []
  //       },
  //       {
  //           "value": 16,
  //           "name": "subfolder2",
  //           "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
  //           "children": []
  //       }
  //   ]
  // }`;

  if (directoryMap) return JSON.parse(directoryMap);
  return null;
}

export async function handleAvailableDrivesRequest() {
  const drives = await list();
  const drivesMap: Drive[] | null = drives.map((drive) => {
    return {
      name: drive.mountpoints[0].path,
      volume: drive.size ?? 0,
    };
  });
  // TODO: Delete this demo
  // Temporary implement for demo
  // const mapObject: Drive[] = [
  //   {
  //     name: 'C',
  //     volume: 15200,
  //   },
  //   {
  //     name: 'D',
  //     volume: 18200,
  //   },
  //   {
  //     name: 'E',
  //     volume: 10200,
  //   },
  // ];

  return drivesMap;
}
