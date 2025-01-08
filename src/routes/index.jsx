import { createBrowserRouter } from "react-router-dom";



import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Login,Register,Home,Menu,Cart  } from "../containers";


export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/cardapio',
        element: (
            <>
              <Header />
              <Menu />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: <Cart />,
    },
]);