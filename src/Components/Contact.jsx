import { Stack, Typography, Link, useMediaQuery } from "@mui/material";
import {
  PhoneFill,
  EnvelopeAtFill,
  Github,
  Gitlab,
  Linkedin,
} from "react-bootstrap-icons";
import CartoonImage from "../assets/AI-image5.png";

export const Contact = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const contactInfo = [
    {
      id: 1,
      href: "tel:+919603394513",
      contactTitle: "+91-9603394513",
      icon: <PhoneFill size={30} color="#404040" />,
    },
    {
      id: 2,
      href: "mailto:lithinmajji@gmail.com",
      contactTitle: "lithinmajji@gmail.com",
      icon: <EnvelopeAtFill size={30} color="#404040" />,
    },
    {
      id: 3,
      href: `https://github.com/Lithin1`,
      contactTitle: "GitHub Page",
      icon: <Github size={30} color="#404040" />,
    },
    {
      id: 4,
      href: `https://gitlab.com/grp-react-projects`,
      contactTitle: "GitLab Page",
      icon: <Gitlab size={30} color="#404040" />,
    },
    {
      id: 5,
      href: "https://www.linkedin.com/in/lithin-majji-a191211b0/",
      contactTitle: "Linkedin Profile",
      icon: <Linkedin size={30} color="#404040" />,
    },
  ];
  return (
    <Stack
      id="Contact"
      direction="row"
      sx={{
        display: !isMobile ? "flex" : "block",
        justifyContent: !isMobile ? "space-around" : "center",
        alignItems: "center",
        margin: "0 auto",
        padding: !isMobile ? "50px 50px" : "25px 25px",
        backgroundColor: "#121212",
        borderRadius: "15px",
        boxShadow: "10px 10px 20px rgba(22, 28, 128, 0.49)",
        maxWidth: "1500px",
        minHeight: !isMobile ? "100vh" : "100vh",
        width: !isMobile ? "100%" : "100vw",
      }}
    >
      <Stack sx={{ padding: !isMobile ? "25px 0px" : "20px 85px" }}>
        <Typography
          variant={!isMobile ? "h2" : "h4"}
          sx={{ color: "white", fontWeight: "400", padding: "35px 5px" }}
        >
          Contact
        </Typography>
        <img
          src={CartoonImage}
          alt="AI Cartoon Image"
          width={!isMobile ? "500px" : "180px"}
          height={!isMobile ? "500px" : "auto"}
        />
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: !isMobile ? "25px" : "10px auto",
        }}
      >
        {contactInfo.map((info) => (
          <Stack
            direction="row"
            spacing={2}
            key={info.id}
            sx={{
              width: !isMobile ? "350px" : "310px",
              height: "50px",
              backgroundColor: "#1E1E1E",
              borderRadius: "12px",
              padding: "8px",
              transition: "0.3s",
              "&:hover": { backgroundColor: "#272727" },
            }}
          >
            <Link
              href={info.href}
              underline="none"
              sx={{
                fontSize: !isMobile ? "20px" : "15px",
                padding: !isMobile ? "10px 5px" : "5px 5px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#c48c6b",
                  padding: "10px",
                  borderRadius: "50px",
                },
              }}
            >
              {info.icon}
            </Link>
            <Link href={info.href} underline="none">
              <Typography
                color="white"
                sx={{
                  fontSize: !isMobile ? "20px" : "15px",
                  fontWeight: "400",
                  padding: "10px 5px",
                  fontFamily: "monospace",
                  transition: "0.3s",
                  "&:hover": { color: "#c48c6b" },
                }}
              >
                {info.contactTitle}
              </Typography>
            </Link>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
