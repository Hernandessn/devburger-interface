import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	const putProductInCart = (product) => {
		// Implementação para adicionar o produto no carrinho
		const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

		let newProductsInCart = [];

		if (cartIndex >= 0) {
			newProductsInCart = cartProducts;
			newProductsInCart[cartIndex].quantity = newProductsInCart[cartIndex].quantity + 1;
			setCartProducts(newProductsInCart);
		} else {
			product.quantity = 1;
			newProductsInCart = [...cartProducts, product];
			setCartProducts(newProductsInCart);
		}

		updateLocalStorage(newProductsInCart);
	};

	// Função para limpar o carrinho
	const clearCart = () => {
		setCartProducts([]);     // Limpa o carrinho
		updateLocalStorage([]); // Atualiza o localStorage com carrinho vazio
   };


	const deleteProduct = (productId) => {
		// Implementação para remover um produto pelo ID
		const newCart = cartProducts.filter((prd) => prd.id !== productId);
		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	const increaseProduct = (productId) => {
		// Implementação para aumentar a quantidade de um produto
		const newCart = cartProducts.map((prd) => {
			return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
		});

		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	const decreaseProduct = (productId) => {
		// Implementação para diminuir a quantidade de um produto
		const cartIndex = cartProducts.findIndex((prd) => prd.id === productId.id);

		if (cartProducts[cartIndex].quantity > 1) {
			const newCart = cartProducts.map((prd) => {
				return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
			});
			setCartProducts(newCart);
			updateLocalStorage(newCart);
		} else {
			deleteProduct(productId);
		}
	};

	
	const updateLocalStorage = (products) => {
		// Atualiza o localStorage com o estado atual do carrinho
		localStorage.setItem("devburger:cartInfo", JSON.stringify(products));
	};

	useEffect(() => {
		// Carrega os dados do carrinho do localStorage, se existirem
		const clientCartData = localStorage.getItem("devburger:cartInfo");

		if (clientCartData) {
			setCartProducts(JSON.parse(clientCartData));
		}
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				putProductInCart,
				clearCart, // Agora a função clearCart está sendo fornecida
				decreaseProduct,
				increaseProduct,
				deleteProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used with a context");
	}
	return context;
};
