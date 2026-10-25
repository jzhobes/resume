import { useState } from 'react';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';

const views = [
  { value: 'designed', label: 'Standard', Icon: ViewSidebarOutlinedIcon },
  { value: 'ats', label: 'ATS-friendly', Icon: ArticleOutlinedIcon }
];

export default function ResumeViewSelector({ view, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { label, Icon } = views.find(option => option.value === view);
  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title={`Resume view: ${label}`} slotProps={{ popper: { className: 'resume-view-tooltip' } }}>
        <IconButton
          id='resume-view-button'
          aria-label={`Choose resume view, current view: ${label}`}
          aria-haspopup='menu'
          aria-controls={open ? 'resume-view-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={event => setAnchorEl(event.currentTarget)}
        >
          <Icon />
        </IconButton>
      </Tooltip>
      <Menu
        id='resume-view-menu'
        className='resume-view-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{ list: { 'aria-labelledby': 'resume-view-button' } }}
      >
        {views.map(({ value, label, Icon }) => (
          <MenuItem
            key={value}
            role='menuitemradio'
            aria-checked={view === value}
            selected={view === value}
            onClick={() => {
              onChange(value);
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
