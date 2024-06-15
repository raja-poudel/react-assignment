import { Box } from '@mui/material'
import { CardComponent } from './card-component'

export const Subsidebar = (props) => {
  const { data, clickedSidebarType, handleMain } = props
  const filteredData = data.filter((d) => d.type === clickedSidebarType)
  return (
    <Box
      sx={{
        width: props.width,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      {filteredData.map((item, index) => (
        <CardComponent
          key={index}
          title={item.title}
          description={item.description}
          onClick={() => handleMain(item.dataType)}
        />
      ))}
    </Box>
  )
}
