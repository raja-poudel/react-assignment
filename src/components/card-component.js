import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

export const CardComponent = ({ title, description, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        flex: '1 1 30%',
        margin: '10px', // Adjust spacing between cards
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography sx={{}} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
