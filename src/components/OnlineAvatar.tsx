import Avatar, {AvatarProps} from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

// style and animation
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -0.1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
}));

const OnlineAvatar: React.FC<AvatarProps> = ({ src, children }) => {
  return (
    <>
      <StyledBadge
        overlap='circular'
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant='dot'>
        <Avatar src={src}>{children}</Avatar>
      </StyledBadge>
    </>
  );
};

export default OnlineAvatar;
