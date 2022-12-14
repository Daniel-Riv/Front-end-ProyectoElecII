import {
    AppBar,
    Grid,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'

export const NavbarC = ({ drawerWidth, matters, getMatters }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{
                        mr: 2,
                        display: {
                            sm: 'none'
                        }
                    }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant="h6" noWrap component='div'>Actividades</Typography>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
