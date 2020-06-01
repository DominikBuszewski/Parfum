import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider";
import PreviewSlider from "../../components/preview-slider/preview-slider.jsx";
import Button from "../../components/custom-button/custom-button";
import InvertedButton from "../../components/inverted-button/inverted-button";

const Directory = styled.div``;

const Homepage = () => {
	let name: string = "";
	let theme: string = "";

	return (
		<Directory>
			<CommercialSlider />
			<PreviewSlider />
			<Button name={"SignIn"} />
			<InvertedButton name={"Test"} />
		</Directory>
	);
};
export default Homepage;
