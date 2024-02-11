/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
import { Library } from 'ffi-napi';

// eslint-disable-next-line import/prefer-default-export
export const snifferDll = Library('path_to_your_dll', {
  'create_directory_scanner': ['pointer', []],
  'free_directory_scanner': ['void', ['pointer']],
  'scan_directory_async': ['void', ['pointer', 'string']],
  'get_directory_map': ['string', ['pointer', 'string', 'int']],
  'stop_scanning': ['void', ['pointer']],
});

export default class SnifferManager {
  private static instance: SnifferManager;

  public scanner: any;

  constructor() {
    this.scanner = snifferDll.create_directory_scanner();
  }

  public static getInstance(): SnifferManager {
    if (!SnifferManager.instance) {
      SnifferManager.instance = new SnifferManager();
    }
    return SnifferManager.instance;
  }

  public StartScanner(path: string) {
    snifferDll.scan_directory_async(this.scanner, path)
  }

  public StopScanner() {
    snifferDll.stop_scanning(this.scanner);
  }

  public GetDirectoryMap(depth: number, path: string) {
    return snifferDll.get_directory_map(this.scanner, path, depth);
  }

  // eslint-disable-next-line class-methods-use-this
  destroy() {
    snifferDll.free_directory_scanner(this.scanner);
}
}
