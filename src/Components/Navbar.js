import ToggleSwitch from "./ToggleSwitch";

import { Flex } from "./styles/Flex.styled";
import { StyledNavbar } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Flex justify="space-between">
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div>
          <span>Dark mode</span>
          <ToggleSwitch />
        </div>
      </Flex>
    </StyledNavbar>
  );
}
