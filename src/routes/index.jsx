import { createBrowserRouter } from "react-router-dom";



import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Login,Register,Home,Menu,Cart, Checkout, CompletePayment  } from "../containers";


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
        path: '/',
        element: <>
        <Header />
        <Home />
        </>,
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
    {
        path: '/checkout',
        element: <Checkout />,
    },
    {
        path: '/complete',
        element: <CompletePayment />,
    },
]);