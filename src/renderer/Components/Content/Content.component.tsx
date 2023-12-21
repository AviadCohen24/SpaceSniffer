import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import { Wrapper, EmptyString } from './Content.styles';
import { FolderHierarchy } from '../../../main/sniffingHandler';
import TreemapChart from '../Chart/TreemapChart.component';

export default function Content() {
  const [dirMap, setDirMap] = useState<FolderHierarchy | null>(null);

  useEffect(() => {
    const handleDirMapUpdate = (event: any, newDirMap: FolderHierarchy) => {
      setDirMap(newDirMap);
    };

    ipcRenderer.on('CurrentDirectoryMap', handleDirMapUpdate);

    return () => {
      ipcRenderer.removeListener('CurrentDirectoryMap', handleDirMapUpdate);
    };
  }, []);

  return (
    <Wrapper>
      dirMap ?
      <EmptyString>
        It&apos;s pretty empty in here... Start a scan to see the magic happen!
      </EmptyString>{' '}
      :
      <TreemapChart diskData={dirMap} />
    </Wrapper>
  );
}
