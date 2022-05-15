import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
export default function NavbarList() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
   <List
      sx={{ width: '100%', maxWidth: 140, bgcolor: 'background.paper' ,fontSize:5,padding:0}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >


      <ListItemButton onClick={handleClick}>
      <ListItemText primary="Nos Cours"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Programation"/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Robotique"/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Devoloppement"/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
