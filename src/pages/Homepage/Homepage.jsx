import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider.component";
import PreviewSlider from "../../components/preview-slider/preview-slider.component.jsx";

const Directory = styled.div``;

const Homepage = () => {
	return (
		<Directory>
			<CommercialSlider />
			<PreviewSlider />
		</Directory>
	);
};
export default Homepage;
