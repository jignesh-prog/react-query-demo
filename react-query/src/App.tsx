import React from 'react';
import {HomePage} from './components/Home.page'
import {RQPage} from './components/RQ.page'
import {Dashbord} from './components/dashbord'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient = new QueryClient()
function App () {
  return (
    <QueryClientProvider client={queryClient} >
   <BrowserRouter>
   <Routes>
     <Route  path='/' element={<Dashbord/>}>
     <Route path='Home.page' element={<HomePage/>} />
     <Route  path='RQ.page' element={<RQPage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
