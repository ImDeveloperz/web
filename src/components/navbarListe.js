import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
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
          <ListItemButton sx={{ pl: 3 }}>
          <Link href="/Blog/account?name=Programation
" underline="none">
  <ListItemText primary="Programation"/>
  </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
          <Link href="/Blog/account?name=Robotique
" underline="none">
            <ListItemText primary="Robotique"/>
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
          <Link href="/Blog/account?name=Devolopement
" underline="none">
            <ListItemText primary="Devloppement"/>
            </Link>

          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
