import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Fragment,useState } from 'react';

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  }
});

const LeftChildren = props => {
      const [open, setOpen] = useState(true);

        const toList = props.toData.map(
          toDo => (
                  <div key={toDo.index}> 
                    <ListItemButton
                                alignItems="flex-start"
                                onClick={() => setOpen(!open)}
                                sx={{
                                px: 3,
                                pt: 2.5,
                                pb: open ? 0 : 2.5,
                                '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                }}
                            >
                            <ListItemText
                                primary={toDo.title}
                                primaryTypographyProps={{
                                fontSize: 15,
                                fontWeight: 'medium',
                                lineHeight: '20px',
                                mb: '2px',
                                }}
                                secondary={toDo.subTitle}
                                secondaryTypographyProps={{
                                noWrap: true,
                                fontSize: 12,
                                lineHeight: '16px',
                                color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                }}
                                sx={{ my: 0 }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                mr: -1,
                                opacity: 0,
                                transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                transition: '0.2s',
                            }}
                            />
                        </ListItemButton>
                        {open &&
                        toDo.subTitle.map((item) => (
                        <ListItemButton
                            key={item.id}
                            sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        >
                            <ListItemIcon sx={{ color: 'inherit' }}>
                            {item.icon}
                            </ListItemIcon>
                            <ListItemText
                            primary={item}
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                            />
                        </ListItemButton>
                        ))}              
                </div>
          )
        )
        return (
          <div>
            {toList}
          </div>
        );
}

export default LeftChildren;