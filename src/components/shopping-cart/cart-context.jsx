import React, { useState, useReducer, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [state, dispatch] = useReducer(reducer, { quantity: 1 });

	function addTocart(cartItem) {
		setCartItems((prevState) => [...prevState, cartItem]);
	}

	function reducer(state, action) {
		return { quantity: state.quantity + 1 };
	}

	function increaseQuantity() {
		dispatch();
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
				increaseQuantity,
				cartItemsCount: cartItems.length,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};
