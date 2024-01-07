/* eslint-disable no-undef */
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { Container } from './Navbar.styles';

type LinkTabProps = {
  label: string;
  to: string;
};

function LinkTab(props: LinkTabProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Tab component={Link} {...props} />;
}

export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number,
  ) => setValue(newValue);

  return (
    <Container style={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <LinkTab label="Home" to="/" />
        <LinkTab label="About" to="/about" />
      </Tabs>
    </Container>

    // TODO: Get rid of this comments
    // <BarWrapper>
    //   <IconButton>
    //     <PlayCircleOutlineIcon />
    //   </IconButton>
    // </BarWrapper>
  );
}
