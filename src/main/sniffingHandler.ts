import { ipcMain } from 'electron';

const fs = require('fs');
const path = require('path');
const fastFolderSizeSync = require('fast-folder-size/sync');

type FolderInfo = {
  folderName: string;
  basePath: string;
};

export type FolderHierarchy = {
  value: number;
  name: string;
  path: string;
  childrens: FolderHierarchy[];
};

const initialDirectoryMap = {
  value: 0,
  name: '',
  path: '',
  childrens: [],
};

let DirectoryMap: FolderHierarchy = initialDirectoryMap;

const getFolderSize = (dirPath: string): number => {
  return fastFolderSizeSync(dirPath);
};

const getFolderNameAndParentPath = (directoryPath: string): FolderInfo => {
  const folderName = path.basename(directoryPath);
  const basePath = path.dirname(directoryPath);

  return { folderName, basePath };
};

const RaiseDirectoryMapChanged = (newDirectoryMap: FolderHierarchy) => {
  DirectoryMap = newDirectoryMap;
  console.log('Raise map changed', newDirectoryMap);
  ipcMain.emit('CurrentDirectoryMap', DirectoryMap);
};

const scanFolder = async (directoryPath: string): Promise<FolderHierarchy> => {
  try {
    const files = await fs.readdir(directoryPath, { withFileTypes: true });
    const childs: FolderHierarchy[] = [];

    await Promise.all(
      files.map(async (file: any) => {
        if (file.isDirectory()) {
          const subFolderPath = path.join(directoryPath, file.name);
          childs.push(await scanFolder(subFolderPath));
        }
      }),
    );

    const { folderName, basePath } = getFolderNameAndParentPath(directoryPath);

    return {
      value: getFolderSize(directoryPath),
      name: folderName,
      path: basePath,
      childrens: childs,
    };
  } catch (err) {
    console.error('Error reading the directory:', err);
    throw err;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const SniffDirectory = async (directoryPath: string) => {
  console.log(`Start sniffing with directory ${directoryPath}`);
  RaiseDirectoryMapChanged({
    value: getFolderSize(directoryPath),
    name: directoryPath,
    path: directoryPath,
    childrens: [],
  });
  try {
    const files = await fs.readdir(directoryPath, { withFileTypes: true });
    const childs: FolderHierarchy[] = [];

    await Promise.all(
      files.map(async (file: any) => {
        if (file.isDirectory()) {
          const subFolderPath = path.join(directoryPath, file.name);
          childs.push(await scanFolder(subFolderPath));
          RaiseDirectoryMapChanged({
            ...DirectoryMap,
            childrens: childs,
          });
        }
      }),
    );
  } catch (err) {
    console.error('Error reading the directory:', err);
    throw err;
  }
};

export const GetCurrentDirectoryMap = (): FolderHierarchy => {
  return DirectoryMap;
};

export const ResetDirectoryMap = () => {
  DirectoryMap = initialDirectoryMap;
};
