import {
  Stack,
  Typography,
  useMediaQuery,
  Button,
  useTheme,
} from "@mui/material";
import ProfileImg from '../assets/AI-image1.png'

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      id="Portfolio"
      direction={isMobile ? "column" : "row"}
      sx={{
        maxWidth:"1200px",
        margin: "0 auto",
        padding: isMobile ? theme.spacing(4) : theme.spacing(8),
        gap: isMobile ? theme.spacing(4) : theme.spacing(6),
        textAlign: "start",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: isMobile ? "70vh" : "100vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Text Section */}
      <Stack
        direction="column"
        spacing={2}
        sx={{
          padding: isMobile ? theme.spacing(4) : theme.spacing(6),
          backgroundColor: "#00264d",
          borderRadius: "12px",
          color: "white",
          fontFamily: "Roboto",
          maxWidth: "100%",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          sx={{ display: "flex", alignItems: "center", paddingTop:isMobile? "55px" :"auto"}}
        >
          Hello,&nbsp;
          <span
            className="typing-effect"
            style={{ fontSize: isMobile ? "1.5rem" : "3rem" }}
          >
            I am Lithin!
          </span>
        </Typography>
        <Typography
          variant={!isMobile ? "body1" : "body2"}
          sx={{
            fontStyle: "italic",
            fontWeight: 300,
            lineHeight: 1.6,
            flexWrap: "nowrap",
            width: isMobile ? "300px" : "auto",
          }}
        >
          An experienced Frontend Web Developer specializing in building
          responsive and user-friendly websites.
        </Typography>
        <Button
          variant="contained"
          href="#Contact"
          sx={{
            borderRadius: "35px",
            width: !isMobile ? "140px" : "100px",
            textTransform: "inherit",
            backgroundColor: "#007acc",
            "&:hover": { backgroundColor: "#005f99" },
          }}
        >
          <Typography
            color="white"
            sx={{
              fontSize: !isMobile ? "20px" : "12px",
              "&:hover": { color: "#1aff8c", transition: "0.3s" },
            }}
          >
            Contact me
          </Typography>
        </Button>
      </Stack>

      {/* Image Section */}
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: isMobile ? "100%" : "50%",
          paddingLeft: isMobile ? "60px" : "0",
        }}
      >
        <img
          src={ProfileImg}
          alt="AI Generated Image"
          style={{
            width: isMobile ? "350px" : "450px",
            height: "auto",
            padding: isMobile ? "85px 10px" : "0",
          }}
        />
      </Stack>
    </Stack>
  );
};
