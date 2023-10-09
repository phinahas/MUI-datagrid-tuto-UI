import React from 'react'
import { Grid, Container, Typography } from '@mui/material'

function PageForDarkLightTest() {
    return (
        <Container>

            <Typography variant='h5' sx={{color:(theme)=>theme.palette.textColor.main}}>Dark & Light</Typography>
            <Grid container spacing={2} marginTop={5}>
                <Grid item md={12} sx={{ backgroundColor:(theme)=>theme.palette.secondary.main }}>
                    <Typography paragraph sx={{ color:(theme)=>theme.palette.paragraphColor.main }} >
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
                
            </Grid>

        </Container>
    )
}

export default PageForDarkLightTest



// iF not predefined color is not found for pallete, we can use 
// import { getColor } from '@mui/system';

// // ...

// <Typography paragraph sx={{ color: (theme) => getColor(theme.palette, 'paragraphColor', 'black') }}>
//   // Content
// </Typography>
