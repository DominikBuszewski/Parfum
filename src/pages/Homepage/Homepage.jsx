import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider.component";
import PreviewSlider from "../../components/preview-slider/preview-slider.component.jsx";
import { Link } from "react-router-dom";

const Directory = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Banner = styled.div`
	width: 80%;
	margin: 2em auto;

	a {
		text-decoration: none;
	}
	img {
		width: 100%;
	}
`;

const Homepage = () => {
	return (
		<Directory>
			<CommercialSlider />
			<PreviewSlider />
			<Banner>
				<Link to="/shop/2">
					<img
						src={"https://i.ytimg.com/vi/78I9vSem9OQ/maxresdefault.jpg"}
						alt="commercial banner"
					/>
				</Link>
			</Banner>
		</Directory>
	);
};
export default Homepage;
