import { Box } from '@mui/material'

export const Main = (props) => {
  const { data, clickedDataType } = props
  const object = data.find((d) => d.dataType === clickedDataType)
  return (
    <Box
      sx={{
        width: props.width,
        height: '100vh',
        padding: 2,
      }}
    >
      {clickedDataType === null ? 'Please select something' : object?.content}
    </Box>
  )
}
