import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Footer from "./components/footer/footer.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";
import Shop from "./pages/Shop/Shop";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ShopItemDetails from "./components/shop-items-details/shop-item-details.component";
import { CartProvider } from "./components/shopping-cart/cart-context";

// setCurrentUser(user);

const App = () => {
	let unsuscribeFromAuth = useRef(null);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		unsuscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({ ...snapShot.data(), id: snapShot.id });
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
		// return () => {
		// 	unsuscribeFromAuth();
		// };
	}, []);

	return (
		<Router>
			<CartProvider>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ShopItemDetails} />
					<Route path="/cart" component={ShoppingCartPage} />
				</Switch>
				<Footer />
			</CartProvider>
		</Router>
	);
};

export default App;
