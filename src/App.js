import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Auth from './views/Auth';
import SearchList from './views/SearchList';
import JobItemsLayer from './views/JobItemsLayer';
import ProfileUser from './views/ProfileUser';
import ManageForCustomer from './views/ManageForCustomer';
import './assets/sass/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<SearchList></SearchList>}/>
        <Route path='/items' element={<JobItemsLayer></JobItemsLayer>}/>
        <Route path='/profile' element={<ProfileUser></ProfileUser>}/>
        <Route path='/manageforcustomer' element={<ManageForCustomer></ManageForCustomer>}/>
        <Route path='*' element={<Auth></Auth>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
