import React from 'react'
import {Grid, Stack, Typography} from '@mui/material'
import CustomDataGrid from '../Components/CustomDataGrid'
import CustomDataGridWithServerSidePagination from '../Components/CustomDataGridWithServerSidePagination'
import TablePagination from  '../Components/TablePagination'

function Test() {
  return (
    <Grid >

       <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
        <Typography variant='h5' >Test Page</Typography>
       </Stack>
       
       <Grid item md={12} padding={1}>
        <CustomDataGridWithServerSidePagination />
       </Grid>

    </Grid>
  )
}

export default Test