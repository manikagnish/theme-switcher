import ToggleSwitch from "./ToggleSwitch";

import { Flex, FlexCol } from "./styles/Flex.styled";
import { StyledNavbar } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <FlexCol justify="space-between">
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <Flex justify="space-between">
          <span>Dark mode</span>
          <ToggleSwitch />
        </Flex>
      </FlexCol>
    </StyledNavbar>
  );
}
