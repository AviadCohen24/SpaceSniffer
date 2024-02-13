/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { Drive } from '../../../shared/Scanner/Drives';

type DriveSelectorProps = {
  isOpen: boolean;
  toggleModal: (newState: boolean) => void;
  getAvailableDrives: () => Promise<Drive[] | null>;
  setSelectedDrive: (drive: Drive) => void;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DriveSelector(props: DriveSelectorProps) {
  const { isOpen, toggleModal, getAvailableDrives, setSelectedDrive } = props;

  const [availableDrives, setAvailableDrives] = useState<Drive[] | null>(null);

  useEffect(() => {
    const getDrives = async () => {
      const drives = await getAvailableDrives();
      setAvailableDrives(drives);
    };
    getDrives();
  }, []);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => toggleModal(false)}
        onClick={() => toggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <nav aria-label="secondary mailbox folders">
            <List>
              {availableDrives?.map((drive) => {
                return (
                  <ListItem
                    disablePadding
                    key={drive.name}
                    onClick={() => setSelectedDrive(drive)}
                  >
                    <ListItemButton>
                      <ListItemText primary={drive.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </nav>
        </Box>
      </Modal>
    </div>
  );
}
