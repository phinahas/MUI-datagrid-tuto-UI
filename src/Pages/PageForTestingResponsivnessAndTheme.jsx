import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';

function PageForTestingResponsivenessAndTheme() {
  return (
    <Container>
      <Grid>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            height: '500px',
          }}
        >
          <Typography variant="h4" color="secondary">
            This is box
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}

export default PageForTestingResponsivenessAndTheme;
