import { Box } from '@mui/material'
import { Sidebar } from './components/sidebar'
import { Main } from './components/main'
import { useState } from 'react'
import { Subsidebar } from './components/subsidebar'
import { Home as HomeIcon, Person as ProfileIcon } from '@mui/icons-material'

function App() {
  const [subsidebar, setSubsidebar] = useState(false)
  const [clickedSidebarType, setClickedSidebarType] = useState(null)
  const [clickedDataType, setClickedDataType] = useState(null)

  const items = [
    { primary: 'Home', icon: <HomeIcon />, type: 'home' },
    { primary: 'Profile', icon: <ProfileIcon />, type: 'profile' },
  ]

  const data = [
    { title: 'Home 1', description: 'Description of Home 1', type: 'home', dataType: 'home-1' },
    { title: 'Home 2', description: 'Description of Home 2', type: 'home', dataType: 'home-2' },
    { title: 'Home 3', description: 'Description of Home 3', type: 'home', dataType: 'home-3' },
    { title: 'Home 4', description: 'Description of Home 4', type: 'home', dataType: 'home-4' },
    { title: 'Profile 1', description: 'Description of Profile 1', type: 'profile', dataType: 'profile-1' },
    { title: 'Profile 2', description: 'Description of Profile 2', type: 'profile', dataType: 'profile-2' },
    { title: 'Profile 3', description: 'Description of Profile 3', type: 'profile', dataType: 'profile-3' },
  ]

  const mainData = [
    {
      content:
        "Home-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'home-1',
    },
    {
      content:
        "Home-2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'home-2',
    },
    {
      content:
        " Home-3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'home-3',
    },
    {
      content:
        " Home-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'home-4',
    },
    {
      content:
        "Profile-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'profile-1',
    },
    {
      content:
        "Profile-2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'profile-2',
    },
    {
      content:
        "Profile-3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      dataType: 'profile-3',
    },
  ]

  const handleSubsidebar = (value, type) => {
    setSubsidebar(value)
    setClickedSidebarType(type)
    setClickedDataType(null)
  }

  const handleMain = (type) => {
    setClickedDataType(type)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Sidebar
        width={'10%'}
        clickedSidebarType={clickedSidebarType}
        items={items}
        subsidebar={subsidebar}
        handleSubsidebar={handleSubsidebar}
      />
      {subsidebar ? (
        <>
          <Box
            sx={{
              width: '2px',
              background: 'grey',
              height: '100vh',
              alignSelf: 'stretch',
            }}
          />
          <Subsidebar handleMain={handleMain} clickedSidebarType={clickedSidebarType} data={data} width={'20%'} />
        </>
      ) : null}

      <Box
        sx={{
          width: '2px',
          background: 'grey',
          height: '100vh',
          alignSelf: 'stretch',
        }}
      />
      <Main data={mainData} width={subsidebar ? '70%' : '90%'} clickedDataType={clickedDataType} />
    </Box>
  )
}

export default App
