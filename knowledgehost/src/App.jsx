import Banner from './components/Banner/Banner.jsx'
import Banner2 from './components/Banner/Banner2.jsx'
import './App.css'
import HouseList from './components/Banner/HouseList.jsx'
import Users from './components/Banner/Users.jsx'
function App() {
  
  return (
    <>
      <Banner headerText="Fear of Lord is beginning of Knowledge"/>
     {/* <Banner2></Banner2> */}
      <HouseList></HouseList>
      <Users></Users>
    </>
  )
}

export default App
