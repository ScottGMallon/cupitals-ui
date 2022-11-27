import { useContext, useState } from 'react'
import { Box, Button, Drawer, SvgIcon, SvgIconTypeMap, Switch, Typography } from '@mui/material'
import { DarkMode as DarkModeIcon, Settings as SettingsIcon, FontDownload as FontDownloadIcon, FormatSize as FormatSizeIcon } from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import SettingsContext, { ISettingsContext } from './context/Settings'
import { useTheme } from '@mui/material'

export default function Settings() {

    const [open, setOpen] = useState<boolean>(false)
    const settings = useContext<ISettingsContext>(SettingsContext)
    const { darkTheme, toggleDarkTheme, sansSerif, toggleSansSerif, largeText, toggleLargeText } = settings
    const theme = useTheme()

    interface ISwitchSetting {
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
            muiName: string;
        }
        text: string
        handleClick: any
        isChecked: boolean
    }

    const switchSettings: ISwitchSetting[] = [
        { icon: DarkModeIcon, text: 'Dark Mode', handleClick: () => toggleDarkTheme(), isChecked: darkTheme },
        { icon: FontDownloadIcon, text: 'Sans Serif', handleClick: () => toggleSansSerif(), isChecked: sansSerif },
        { icon: FormatSizeIcon, text: 'Large Text', handleClick: () => toggleLargeText(), isChecked: largeText },

    ]

    const SwitchSetting = ({ icon, text, handleClick, isChecked }: ISwitchSetting): JSX.Element => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', paddingY: '10px', alignItems: 'center', width: '100%' }}>
                <Switch
                    checked={isChecked}
                    onChange={handleClick}
                    sx={{
                        color: theme.palette.action.active
                    }}
                />
                <SvgIcon component={icon} inheritViewBox />
                <Typography>{text}</Typography>
            </Box>
        )
    }

    return (
        <>
            <Button sx={{ p: 0, m: 0 }} onClick={() => setOpen(!open)}>
                <SvgIcon component={SettingsIcon} fontSize='large' />
            </Button>
            <Drawer
                open={open}
                onClose={() => setOpen(!open)}
                anchor={'right'}
            >
                <Box
                    sx={{
                        p: 5,
                        paddingTop: '40px',
                        alignItems: 'center'
                    }}>
                    <Typography variant='h4' sx={{ marginBottom: '10px', textAlign: 'center' }}>Settings</Typography>
                    {settings && switchSettings.map(s => <SwitchSetting key={s.text + '-setting'} icon={s.icon} text={s.text} handleClick={s.handleClick} isChecked={s.isChecked} />)}
                </Box>

            </Drawer>
        </>
    )
}