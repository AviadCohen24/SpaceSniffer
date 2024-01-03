/* eslint-disable no-undef */
import Grid from '@mui/material/Grid';
import { DashboardContainer } from './Dashboard.styles';

export type DashboardProps = {
  menu: JSX.Element;
  mainContent: JSX.Element;
};

export default function Dashboard(props: DashboardProps) {
  const { menu, mainContent } = props;
  return (
    <DashboardContainer>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          {menu}
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          {mainContent}
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}
