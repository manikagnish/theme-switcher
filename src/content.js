import {
  FaCaretDown,
  FaCaretUp,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const followerCardContent = [
  {
    id: 1,
    socialIcon: <FaFacebookSquare />,
    arrowIcon: <FaCaretUp />,
    username: "@nathanf",
    followers: 1987,
    updates: 12,
    color: "var(--clr-facebook)",
    smallClr: "var(--clr-green)",
  },
  {
    id: 2,
    socialIcon: <FaTwitter />,
    arrowIcon: <FaCaretUp />,
    username: "@nathanf",
    followers: 1044,
    updates: 90,
    color: "var(--clr-twitter)",
    smallClr: "var(--clr-green)",
  },
  {
    id: 3,
    socialIcon: <FaInstagram />,
    arrowIcon: <FaCaretUp />,
    username: "@realnathanf",
    followers: "11k",
    updates: 1099,
    color: "var(--clr-instagram-light)",
    smallClr: "var(--clr-green)",
  },
  {
    id: 4,
    socialIcon: <FaYoutube />,
    arrowIcon: <FaCaretDown />,
    username: "Nathan F.",
    followers: 8239,
    updates: 144,
    color: "var(--clr-youtube)",
    smallClr: "var(--clr-red)",
  },
];
export const statsCardContent = [
  {
    id: 1,
    statName: "Page Views",
    socialIcon: <FaFacebookSquare />,
    arrowIcon: <FaCaretUp />,
    count: 1987,
    updates: 3,
  },
];
