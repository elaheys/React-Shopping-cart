import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';

//components
import Store from './components/Store';
import ProductDtails from './components/ProductDtails';
import Navbar from './Shared/Navbar';
import ShopCart from './components/ShopCart';

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
  <ProductContextProvider>
    <CartContextProvider>
      <Navbar/>
        <Switch>
          <Route path='/products/:id' component={ProductDtails}/>
          <Route path='/products' component={Store}/>
          <Route path="/cart" component={ShopCart}/>
          <Redirect to='/products'/>
        </Switch>
    </CartContextProvider>
  </ProductContextProvider>
  );
}

export default App;
