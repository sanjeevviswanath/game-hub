import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/nextgen-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px"></Image>
      <Text fontSize={"xxx-large"}>GamePulse: Ratings & Reviews</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
