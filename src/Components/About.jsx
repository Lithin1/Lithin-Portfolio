import { useState, useEffect } from "react";
import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import AboutImg from "../assets/AI-image3.png";

export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 50 ? 0 : prev + 1));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const AboutItems = [
    {
      id: "1",
      title: "Frontend Developer",
      description: `Experienced Frontend Developer specializing
         in building responsive, user-friendly web applications.
         Proficient in React, JavaScript, and modern UI frameworks.`,
    },
    {
      id: "2",
      title: "Backend Developer",
      description: `Experienced Backend Developer with expertise in feature analysis,
         comprehensive documentation, and seamless API integration.`,
    },
    {
      id: "3",
      title: "Software Test Engineer:",
      description: `Experienced Manual Tester with 
      expertise in API testing using Postman, executing 500+ test cases manually. 
      Proficient in qTest for test case management and seamless Jira integration for tracking.`,
    },
  ];

  return (
    <Box
      id="About"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#001a33",
        boxSizing: "border-box",
        padding: isMobile ? theme.spacing(3) : theme.spacing(4),
        width: "100%",
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={4}
        sx={{
          maxWidth: "1200px",
          width: "100%",
          borderRadius: "25px",
          backgroundColor: "#002244",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          color: "white",
          padding: theme.spacing(2),
          margin: "0 auto",
        }}
      >
        {/* Left Section: About Image */}
        <Stack
          direction="column"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(4),
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Typography variant={isMobile ? "h4" : "h2"} textAlign="center">
            About
          </Typography>
          <img
            src={AboutImg}
            alt="About Illustration"
            width="100%"
            height="auto"
            style={{
              borderRadius: "12px",
              maxWidth: isMobile ? "200px" : "400px",
            }}
          />
        </Stack>

        {/* Right Section: Content */}
        <Stack
          direction="column"
          spacing={4}
          sx={{
            justifyContent: !isMobile ? "center" : "flex-start",
            padding: theme.spacing(2),
          }}
        >
          {!isMobile ? (
            AboutItems.map((item) => (
              <Stack direction="row" spacing={2} key={item.id}>
                <ArrowForwardIcon
                  sx={{
                    fontSize: "50px",
                    color: "#007acc",
                    padding: "10px 10px",
                    transition: "transform 0.02s linear",
                    transform: `translateX(${position}%)`,
                  }}
                />
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      padding: "10px 0px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      color: "#d9d9d9",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      maxWidth: "1200px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            ))
          ) : (
            <Carousel indicators={true} interval={10000}>
              {AboutItems.map((item) => (
                <Box key={item.id}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: theme.spacing(1),
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.5,
                      textAlign: "flex-start",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      maxWidth: "500px",
                      paddingLeft: "5px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
