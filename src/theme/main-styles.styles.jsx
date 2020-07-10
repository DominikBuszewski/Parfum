// @function color($color-name) {
// 	@return map-get($colors, $color-name);
// }

// $desktop: 840px;
// @mixin desktop {
// 	@media (min-width: #{$desktop}) {
// 		@content;
// 	}
// }

const size = {
	desktop: "1020px",
};

export const device = {
	desktop: `(min-width: ${size.desktop})`,
};

const color = {
	black: "black",
	white: "white",
	third: "#e7b3b3",
};

export const colors = {
	dark: `${color.black}`,
	light: `${color.white}`,
	secondary: `${color.third}`,
};
