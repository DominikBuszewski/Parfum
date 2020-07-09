import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	// const [state, dispatch] = useReducer(reducer, { quantity: 1 });

	function addTocart(cartItem) {
		setCartItems((prevState) => [...prevState, cartItem]);
	}

	function removeFromCart(cartItems, cartItemToRemove) {
		return setCartItems(
			cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
		);
	}

	function increase(cartItems, cartItemToAdd) {
		return setCartItems(
			cartItems.map((cartItem) =>
				cartItem.id === cartItemToAdd.id
					? {
							...cartItem,
							quantity: cartItem.quantity + 1,
					  }
					: cartItem
			)
		);
	}

	function decrease(cartItems, cartItemToRemove) {
		const existingCartItem = cartItems.find(
			(cartItem) => cartItem.id === cartItemToRemove.id
		);
		if (existingCartItem.quantity === 1) {
			return setCartItems(
				cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
			);
		} else {
			return setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === cartItemToRemove.id
						? {
								...cartItem,
								quantity: cartItem.quantity - 1,
						  }
						: cartItem
				)
			);
		}
	}

	function clearCart() {
		setCartItems([]);
	}

	function cartItemsWithQUantity(cartItems) {
		return cartItems.reduce((acc, item) => {
			const foundItem = acc.find((_item) => _item.id === item.id);
			if (foundItem) {
				foundItem.quantity = foundItem.quantity + 1;
			} else {
				acc.push({
					quantity: 1,
					...item,
				});
			}
			return acc;
		}, []);
	}

	return (
		<CartContext.Provider
			value={{
				cartItems: cartItemsWithQUantity(cartItems),
				addTocart,
				cartItemsCount: cartItems.length,
				removeFromCart,
				clearCart,
				decrease,
				increase,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};
