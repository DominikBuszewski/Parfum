import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider.component";
import PreviewSlider from "../../components/preview-slider/preview-slider.component.jsx";
import Button from "../../components/custom-button/custom-button.component";
import InvertedButton from "../../components/inverted-button/inverted-button.component";

const Directory = styled.div`
	min-height: 150vh;
`;

const Homepage = () => {
	let name: string = "Test1";

	return (
		<Directory>
			<CommercialSlider />
			<PreviewSlider />
			<Button name={name} />
			<InvertedButton name={name} />
		</Directory>
	);
};
export default Homepage;
