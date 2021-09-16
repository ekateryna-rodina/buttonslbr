import { LightenDarkenColor } from "lighten-darken-color";
import PropTypes from "prop-types";
import styled from "styled-components";

let lightenLevel = 20;
const padding = {
  small: ".375rem .75rem",
  medium: ".5rem 1rem",
  large: ".6875rem 1.375rem",
};
const background = {
  outline: "transparent",
  text: "none",
};
const backgroundOnHover = (type, color) => {
  if (!type) throw new Error("Type is required");
  switch (type) {
    case "default":
      return LightenDarkenColor(color, lightenLevel);
    case ("outline", "text"):
      return color;
    default:
      return color;
  }
};
const border = (color, lighten = true) => {
  if (!color) throw new Error("Color is required");
  const finalColor = lighten ? LightenDarkenColor(color, lightenLevel) : color;
  return `0 0 0 1px ${finalColor}`;
};
function wc_hex_is_light(color) {
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}
const visible = (type) => {
  if (!type) throw new Error("Type is required");
  return type === "outline" || type === "text";
};
const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 0.375rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.42rem;
  box-sizing: padding-box;
  transition: all 0.1s;
  padding: ${(props) => padding[props.size]};
  box-shadow: ${(props) =>
    props.type === "outline" ? border(props.color, false) : "none"};
  color: ${(props) =>
    wc_hex_is_light(props.color) || visible(props.type) ? "black" : "white"};
  background: ${(props) =>
    props.type === "default" ? props.color : background[props.type]};
  :hover {
    box-shadow: ${(props) =>
      props.type === "text" ? "none" : border(props.color)};
    background: ${(props) => backgroundOnHover(props.type, props.color)};
    color: ${(props) => (wc_hex_is_light(props.color) ? "black" : "white")};
  }
`;
export const Buttonlr = ({
  type = "outline",
  disableBoxShadow = false,
  disabled = false,
  icon = "left",
  size = "large",
  color = "#0096FF",
}) => {
  return (
    <StyledButton type={type} size={size} color={color}>
      Default
    </StyledButton>
  );
};

Buttonlr.propTypes = {
  type: PropTypes.oneOf(["default", "outline", "text"]),
  disableBoxShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  onHoverEffect: PropTypes.oneOf(["darken", "lighten", "border", "zoomIn"]),
};
