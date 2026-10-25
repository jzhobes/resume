import { useState } from 'react';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import BrightnessAutoOutlinedIcon from '@mui/icons-material/BrightnessAutoOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const themes = [
  { value: 'system', label: 'System', Icon: BrightnessAutoOutlinedIcon },
  { value: 'light', label: 'Light', Icon: LightModeOutlinedIcon },
  { value: 'dark', label: 'Dark', Icon: DarkModeOutlinedIcon }
];

export default function ThemeSelector() {
  const { mode = 'system', setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const { label, Icon } = themes.find(theme => theme.value === mode) || themes[0];
  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title={`Theme: ${label}`} slotProps={{ popper: { className: 'theme-tooltip' } }}>
        <IconButton
          id='theme-button'
          className='theme-selector'
          aria-label={`Choose theme, current theme: ${label}`}
          aria-haspopup='menu'
          aria-controls={open ? 'theme-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={event => setAnchorEl(event.currentTarget)}
        >
          <Icon />
        </IconButton>
      </Tooltip>
      <Menu
        id='theme-menu'
        className='theme-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{ list: { 'aria-labelledby': 'theme-button' } }}
      >
        {themes.map(({ value, label, Icon }) => (
          <MenuItem
            key={value}
            role='menuitemradio'
            aria-checked={mode === value}
            selected={mode === value}
            onClick={() => {
              setMode(value);
              setAnchorEl(null);
            }}
          >
            <ListItemIcon><Icon fontSize='small' /></ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
