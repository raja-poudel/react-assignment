import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

export const Sidebar = (props) => {
  const { clickedSidebarType, subsidebar, handleSubsidebar, items } = props

  return (
    <Box
      sx={{
        width: props.width,
        height: '100vh',
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => handleSubsidebar(clickedSidebarType === item.type ? !subsidebar : true, item.type)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.primary} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
