import './App.css';
import Header from './Header';
import Posts from './Posts';
import SideMenu from './SideMenu'

function App() {

  return (
    <>

    <div className='main'>
      <Header/>

<div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>

      {/* start posts & side menu container*/}

      <div style={{display:"flex", width:"60%"}}>


      {/* posts container */}
      <div style={{width:'60%'}}>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>

      </div>
      {/* posts container */}

      <div style={{width:'40%'}}>
      <SideMenu/>

      </div>



      </div>

      {/* end posts & side menu container*/}



</div>


    </div>

    </>
  )
}

export default App
