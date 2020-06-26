import React,{useState} from 'react' 
import Header from './Header' 



const App = () => {

    let time = new Date().toLocaleTimeString()

    const [ctime, setCtime] = useState(time)

    const updatedTime = () =>{
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }

    setInterval(updatedTime, 1000)
    return <>
        
          <Header></Header>
          <p>{ctime}</p>
        
    </>
}

export default App