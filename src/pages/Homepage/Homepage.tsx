import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider";
import PreviewSlider from "../../components/preview-slider/preview-slider.jsx";

const Directory = styled.div``;

const Homepage = () => (
	<Directory>
		<CommercialSlider />
		<PreviewSlider />
	</Directory>
);

export default Homepage;
