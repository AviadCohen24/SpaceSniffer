/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { UserActionHandlers } from '../../hooks/userActionHandlers.hook';
import {
  UsageDisplayContainer,
  ScanStateButton,
  Container,
  ScannerConfigContainer,
  PathContainer,
} from './Home.styles';
import TreemapChart from '../../Components/Chart/TreemapChart.component';
import DriveSelector from '../../Components/DriveSelector/DriveSelector.component';
import { Drive } from '../../../shared/Scanner/Drives';

export type HomeProps = {
  userActionHandlers: UserActionHandlers;
};

export const diskData: string = `{
  "value": 43,
  "name": ".tmpiEtJbP",
  "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP",
  "children": [
      {
          "value": 27,
          "name": "subfolder1",
          "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP",
          "children": [
            {
              "value": 13,
              "name": "subsubfolder1",
              "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP\\\\subfolder1",
              "children": []
            },
            {
              "value": 4,
              "name": "subsubfolder2",
              "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP\\\\subfolder1",
              "children": []
            },
            {
              "value": 10,
              "name": "subsubfolder3",
              "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP\\\\subfolder1",
              "children": []
            }
          ]
      },
      {
          "value": 16,
          "name": "subfolder2",
          "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP",
          "children": []
      }
  ]
}`;

export default function Home(props: HomeProps) {
  const { userActionHandlers } = props;

  const stopScanText = 'Stop scanner';
  const startScanText = 'Start scanner';

  const [buttonText, setButtonText] = useState(startScanText);
  const [driveSelectorOpen, setDriveSelectorOpen] = useState(false);
  const [drive, setDrive] = useState<Drive | null>(null);

  const stopScannerHandler = () => {
    setButtonText(startScanText);
  };

  const openDriveSelectorHnadler = () => {
    setDrive(null);
    setDriveSelectorOpen(true);
  };

  const startScannerHandler = () => {
    if (!driveSelectorOpen && drive) {
      setButtonText(stopScanText);
      userActionHandlers.sendStartScanningRequest(drive.name);
    }
  };

  const stateButtonClickHandler = () => {
    if (buttonText === startScanText) startScannerHandler();
    else stopScannerHandler();
  };

  return (
    <Container>
      <ScannerConfigContainer>
        <ScanStateButton onClick={stateButtonClickHandler}>
          {buttonText}
        </ScanStateButton>
        <button
          onClick={openDriveSelectorHnadler}
          style={{ background: 'transparent', padding: '0 5vw' }}
        >
          <PathContainer>{drive ? drive.name : 'Select path'}</PathContainer>
        </button>
      </ScannerConfigContainer>
      <UsageDisplayContainer>
        <TreemapChart diskData={diskData} />
      </UsageDisplayContainer>
      <DriveSelector
        isOpen={driveSelectorOpen}
        toggleModal={setDriveSelectorOpen}
        getAvailableDrives={userActionHandlers.getAvailableDrives}
        setSelectedDrive={setDrive}
      />
    </Container>
  );
}
