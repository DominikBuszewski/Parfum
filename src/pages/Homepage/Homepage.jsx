import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider.component";
import PreviewSlider from "../../components/preview-slider/preview-slider.component.jsx";
import Button from "../../components/custom-button/custom-button.component";
import InvertedButton from "../../components/inverted-button/inverted-button.component";
import SignInPage from "../Sign-in/Sign-in";

const Directory = styled.div``;

const Homepage = () => {
	return (
		<Directory>
			<CommercialSlider />
			<PreviewSlider />
			<SignInPage />
		</Directory>
	);
};
export default Homepage;
