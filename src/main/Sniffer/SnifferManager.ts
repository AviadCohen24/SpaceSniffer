/* eslint-disable no-use-before-define */
import koffi from 'koffi';

const dllPath = 'src\\shared\\Scanner\\directory_scanner.dll';

const directoryScannerLib = koffi.load(dllPath);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DirectoryScanner = koffi.opaque('DirectoryScanner');

// Declare the functions using C-like prototypes or classic syntax
const createDirectoryScanner = directoryScannerLib.func(
  'DirectoryScanner* create_directory_scanner(void)',
);
const freeDirectoryScanner = directoryScannerLib.func(
  'void free_directory_scanner(DirectoryScanner*)',
);
const scanDirectoryAsync = directoryScannerLib.func(
  'void scan_directory_async(const DirectoryScanner*, const char*)',
);
const getDirectoryMap = directoryScannerLib.func(
  'char* get_directory_map(const DirectoryScanner*, const char*, int)',
);
const stopScanning = directoryScannerLib.func('stop_scanner', 'void', [
  koffi.out(koffi.pointer(DirectoryScanner, 2)),
]);

export default class SnifferManager {
  private static instance: SnifferManager;

  public scannerPtr;

  constructor() {
    this.scannerPtr = createDirectoryScanner();
  }

  public static getInstance(): SnifferManager {
    if (!SnifferManager.instance) {
      this.instance = new SnifferManager();
    }
    return this.instance;
  }

  public StartScanner(path: string) {
    scanDirectoryAsync(SnifferManager.getInstance().scannerPtr, path);
    console.log('After invoke function');
  }

  public StopScanner() {
    stopScanning(this.scannerPtr);
  }

  public GetDirectoryMap(depth: number, path: string): string {
    return getDirectoryMap(this.scannerPtr, path, depth);
  }

  destroy() {
    freeDirectoryScanner(this.scannerPtr);
  }
}
