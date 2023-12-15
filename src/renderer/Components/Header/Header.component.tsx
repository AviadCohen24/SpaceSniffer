import { Outlet } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import { BarWrapper, IconButton } from './Header.styles';

export default function NavigationBar() {
  return (
    <>
      <BarWrapper>
        <IconButton>
          <PlayCircleOutlineIcon />
        </IconButton>
      </BarWrapper>
      <Outlet />
    </>
  );
}
