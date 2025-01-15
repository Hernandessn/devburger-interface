import { createBrowserRouter, Route, Routes } from "react-router-dom";


import { Login,Register,Home,Menu,Cart, Checkout, CompletePayment, Admin  } from "../containers";
import { UserLayout, AdminLayout} from "../layouts";



export function Router(){

    return(
        <Routes>
            <Route path="/" element={<UserLayout/>}>
                <Route path="/" element={ <Home/> }/>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cardapio" element={ <Menu /> }/>
                <Route path="/carrinho" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>      
                <Route path="/complete" element={ <CompletePayment /> }/>
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/home" element={<Admin />}/>
            </Route>

            <Route path="/login" element={ <Login /> }/>
            <Route path="/cadastro" element={ <Register /> }/>
            
        </Routes>
    )
}
 

