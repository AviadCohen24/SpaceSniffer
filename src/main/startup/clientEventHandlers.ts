import { BrowserWindow } from 'electron';
import emitToClient from '../IPC/EmitToClient';
import { ErrorMessage } from '../../shared/Scanner/ErrorMessage';
import { CurrentProgressMessage } from '../../shared/Scanner/Progress';
import { Drive } from '../../shared/Scanner/Drives';

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

export async function handleRequestCurrentDirectoryMap(basePath: string) {
  // TODO: Invoke get current directory function that exist in the rust scanning DLL
  // Temporary implement for demo
  const jsonString: string = `{
    "value": 43,
    "name": ".tmpiEtJbP",
    "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
    "children": [
        {
            "value": 27,
            "name": "subfolder1",
            "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
            "children": []
        },
        {
            "value": 16,
            "name": "subfolder2",
            "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
            "children": []
        }
    ]
  }`;

  return JSON.parse(jsonString);
}

export async function handleAvailableDrivesRequest() {
  // TODO: Implement export available drives
  // Temporary implement for demo
  const mapObject: Drive[] = [
    {
      name: 'C',
      volume: 15200,
    },
    {
      name: 'D',
      volume: 18200,
    },
    {
      name: 'E',
      volume: 10200,
    },
  ];

  return mapObject;
}
