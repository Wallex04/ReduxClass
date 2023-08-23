import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

function App() {
  const dummy = [
    {
      image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "signature briefcase",
      dollarPrice: "$234",
      nairaPrice: "₦130,000"
    },
    {
      image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "black briefcase",
      dollarPrice: "$134",
      nairaPrice: "₦80,000"
    },
    {
      image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "black briefcase",
      dollarPrice: "$334",
      nairaPrice: "₦230,000"
    },
    {
      image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "red briefcase",
      dollarPrice: "$364",
      nairaPrice: "₦730,000"
    },
  ]
  const [data, setData] = useState(dummy);


  

  return (
    <Provider store={store}>
     <div>
{
  data.map((item) =>{
    return <Card data={item}/>
    
  })
}  
          <div>
            <button className='red'>NGN</button>
            <button>USD</button>
        </div>
  </div>
    </Provider>
 
    
  )
}

export default App
