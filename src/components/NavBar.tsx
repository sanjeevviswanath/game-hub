import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/nextgen-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
