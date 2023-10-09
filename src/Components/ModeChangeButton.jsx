import React from 'react'
import Box from '@mui/material/Box';
import ContrastIcon from '@mui/icons-material/Contrast';

function ModeChangeButton({onClickAction}) {
  return (
    <div>
      <Box sx={{  transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', top: '50px', right: '50px',  }}>

        <ContrastIcon fontSize='large' onClick={onClickAction} />
      </Box>

    </div>
  )
}

export default ModeChangeButton