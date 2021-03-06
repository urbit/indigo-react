import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type BoxProps = AllSystemProps;

export const Box = styled.div<React.PropsWithChildren<BoxProps>>(
  compose(...allSystemStyle)
);

Box.displayName = "Box";
