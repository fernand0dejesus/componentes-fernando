import'./App.css'
import Additional from './components/Additional'
import Alert from'./components/Alert'
import Link from './components/Link'
import Live from './components/live'
import Positioned from './components/Positioned'
import Test from './components/Test'
import Cardd from './components/cardd'
import Card from './components/card'

const App =()=>{
    return(
         <>
  <h1>Actividad 1</h1>
<h1>Componentes de bootstrap</h1>
<Alert
titulo="este es un alerta"

/>
<Test/>
<Live
/>
<Link/>

<Additional/>



<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>

<Positioned/>
<div>
  <p>

  </p>
</div>
<Card/>
 

        </>
        
        )
       

}

export default App