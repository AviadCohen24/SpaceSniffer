import { Drive } from '../../Scanner/Drives';
import { FolderHierarchy } from '../../Scanner/FolderHierarchy';

export type GetCurrentMapProps = {
  depth: number;
  path: string;
};

export interface IPCMethods {
  // eslint-disable-next-line prettier/prettier
  'get_available_drives': {
    request: null;
    response: Drive[] | null;
  };
  // eslint-disable-next-line prettier/prettier
  'start_scanning': {
    request: string;
    response: null;
  };
  // eslint-disable-next-line prettier/prettier
  'stop_scanning': {
    request: null;
    response: null;
  };
  // eslint-disable-next-line prettier/prettier
  'get_current_map': {
    request: GetCurrentMapProps;
    response: FolderHierarchy | null;
  };
}
