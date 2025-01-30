import { useState } from "react";
import {
  Stack,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Link,
} from "@mui/material";
import HTML5 from "../assets/html5.png";
import CSS3 from "../assets/css3.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Bootstrap from "../assets/bootstrapIcon.png";
import MaterialUI from "../assets/material-UI.png";
import Postman from "../assets/postmanIcon.png";
import Jira from "../assets/jira.png";
import Putty from "../assets/putty.png";
import TCSIcon from "../assets/tcsIcon1.png";
import qTest from "../assets/qTest1.png";
import Mainframe from "../assets/mainframe.png";
import VsCode from "../assets/vscode.png";
import Carousel from "react-material-ui-carousel";

export const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tech, setTech] = useState(null);

  const experienceData = [
    {
      id: "1",
      icon: TCSIcon,
      title: "System Engineer",
      period: `Apr 2023 ${"\u2192"} Present`,
      role: "Frontend Developer",
    },
    {
      id: "1",
      icon: TCSIcon,
      title: "Assistant S.E",
      period: `Apr 2022  ${"\u2192"}  2023`,
      role: "Frontend Developer",
    },
    {
      id: "1",
      icon: TCSIcon,
      title: "A.S.E Trainee",
      period: `Oct 2021 ${"\u2192"}  2022`,
      role: "Jr Web Developer",
    },
  ];

  const IconsData = [
    { id: "1", iconPath: HTML5, techName: "HTML5" },
    { id: "2", iconPath: CSS3, techName: "CSS3" },
    { id: "3", iconPath: Javascript, techName: "Javascript" },
    { id: "4", iconPath: ReactLogo, techName: "React" },
    { id: "5", iconPath: Bootstrap, techName: "Bootstrap" },
    { id: "6", iconPath: MaterialUI, techName: "Material-UI" },
    { id: "7", iconPath: Postman, techName: "Postman" },
    { id: "8", iconPath: Jira, techName: "Jira" },
    { id: "9", iconPath: Putty, techName: "Putty" },
    { id: "10", iconPath: qTest, techName: "qTest" },
    { id: "11", iconPath: Mainframe, techName: "Mainframe" },
    { id: "12", iconPath: VsCode, techName: "VsCode" },
  ];

  return (
    <Stack
      id="Experience"
      direction={isMobile ? "column" : "row"}
      maxWidth="lg"
      sx={{
        height: !isMobile ? "100vh" : "125vh",
        margin: "0 auto",
        padding: isMobile ? theme.spacing(4) : theme.spacing(6),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? theme.spacing(6) : theme.spacing(10),
        color: "white",
        width: isMobile ? "60vh" : "auto",
      }}
    >
      {/* Skills Section */}
      <Stack
        direction="column"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          color="white"
          gutterBottom
          sx={{
            textAlign: "center",
            paddingBottom: theme.spacing(3),
            paddingTop: isMobile ? theme.spacing(4) : "0",
          }}
        >
          Experience
        </Typography>
        <Grid
          container
          rowGap={3}
          spacing={3}
          sx={{
            justifyContent: "center",
            alignContent: "center",
            paddingRight: isMobile ? "12px" : "auto",
          }}
        >
          {IconsData.map((icon) => (
            <Grid
              item
              xs={4}
              sm={3}
              md={2}
              key={icon.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {tech === icon.techName && (
                <Box
                  variant="body2"
                  sx={{
                    color: "inherit",
                    position: "absolute",
                    top: "-15px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                >
                  {icon.techName}
                </Box>
              )}
              <img
                src={icon.iconPath}
                alt={`Icon ${icon.id}`}
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "#001a33",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                onMouseEnter={() => {
                  setTech(icon.techName);
                }}
                onMouseLeave={() => {
                  setTech(false);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* Work Experience Section */}
      {!isMobile ? (
        <Stack
          direction="column"
          spacing={3}
          sx={{
            backgroundColor: "#001a33",
            borderRadius: "12px",
            padding: theme.spacing(4),
            width: "100%",
            maxWidth: "400px",
          }}
        >
          {experienceData.map((item) => (
            <Stack
              key={item.id}
              direction="row"
              spacing={4}
              sx={{
                padding: theme.spacing(2),
                backgroundColor: "#002244",
                borderRadius: "12px",
                alignItems: "center",
              }}
            >
              <Link href="https://tcs.com" target="_blank" underline="none">
                <img
                  src={item.icon}
                  alt="TCS Icon"
                  width="100px"
                  height="35px"
                />
              </Link>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: "white", padding: "5px 0px" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 200,
                    fontSize: "12px",
                    color: "white",
                    padding: "3px 0px",
                    wordSpacing: "2px",
                  }}
                >
                  {item.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 200,
                    fontSize: "12px",
                    color: "white",
                    padding: "3px 0px",
                  }}
                >
                  {item.role}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Stack
          direction="column"
          spacing={3}
          sx={{
            backgroundColor: "#001a33",
            borderRadius: "12px",
            padding: theme.spacing(4),
            width: "400px",
            height: "auto",
          }}
        >
          <Carousel indicators={true}>
            {experienceData.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                spacing={2}
                sx={{
                  padding: theme.spacing(2),
                  backgroundColor: "#002244",
                  borderRadius: "12px",
                  alignItems: "center",
                }}
              >
                <Link href="https://tcs.com" target="_blank" underline="none">
                  <img
                    src={item.icon}
                    alt="TCS Icon"
                    width="130px"
                    height="60px"
                  />
                </Link>
                <Stack>
                  <Typography
                    variant="h6"
                    sx={{ color: "white", padding: "5px 0px" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 200,
                      fontSize: "15px",
                      color: "white",
                      padding: "2px 0px",
                      wordSpacing: "2px",
                    }}
                  >
                    {item.period}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 200,
                      fontSize: "15px",
                      color: "white",
                      padding: "2px 0px",
                    }}
                  >
                    {item.role}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      )}
    </Stack>
  );
};
