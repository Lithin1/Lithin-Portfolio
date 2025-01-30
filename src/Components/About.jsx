import { useState, useEffect } from "react";
import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import AboutImg from '../assets/AI-image3.png'

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
         Proficient in React, JavaScript, and modern UI frameworks,
         with a strong focus on performance, accessibility, and seamless user experiences.`,
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
      description: `Experienced Manual Tester with a strong background
         in API testing using Postman, writing and executing over 500 test cases manually.
         Skilled in test case management through qTest, with seamless integration into Jira for tracking and reporting.`,
    },
  ];

  return (
    <Box
      id="About"
      sx={{
        minHeight: isMobile ? "115vh" : "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#001a33",
        boxSizing: "border-box",
        padding: isMobile ? theme.spacing(3) : theme.spacing(4),
        width: isMobile ? "60vh" : "100%",
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
          overflow: "hidden", // Prevent content overflow
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
          <Typography variant={isMobile ? "h3" : "h2"} textAlign="center">
            About
          </Typography>
          <img
            src={AboutImg}
            alt="About Illustration"
            width="100%"
            height="auto"
            style={{
              borderRadius: "12px",
              maxWidth: isMobile ? "250px" : "800px",
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
                    variant="body1"
                    sx={{
                      lineHeight: 1.6,
                      color: "white",
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
            <Carousel indicators={true} interval={5000}>
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
