import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/footer'
import { customTheme } from './Themes/custom'

function App() {
  

  return (
    <>
      <ThemeProvider theme={ customTheme }>
        <CssBaseline />
          <Container fixed>
            <Box sx= {{backgroundColor: "primary", height: "100px"}} /> 
          </Container>
      </ThemeProvider>
       <NavBar></NavBar>
       <SideBar></SideBar>
       <Footer></Footer>
    </>
  )
}

export default App
