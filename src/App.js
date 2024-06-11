import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
//import Header from './components/Header';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css';
//import Nav from './components/nav'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
//import ProductPage from './components/ProductPage';
import SearchResult from './components/SearchResult';
import AddtoCart from './components/AddtoCart';
import { AuthProvider } from './components/AuthContext';


function App() {
    return (
        <AuthProvider>

    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignupPage />} />
           <Route path="/" element={<Home />} />
           <Route path="/:id" element={<ProductDetails />} />
           <Route path="/searchresult/:query" element={<SearchResult />} />
           <Route path="/:id/cart" element={<AddtoCart />} />
            
            

        </Routes>
      </div>
            </Router>
        </AuthProvider>
 
  );
}
//<Route path="/Productdetails/:id" component={ProductDetails } />
//<Route path="/ProductDetails/:id" render={(props) => <ProductDetails {...props} product={product} />} />
//<Route path="/searchresult" element={<SearchResult />} />


export default App;
