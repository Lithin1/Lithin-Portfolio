import {
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Portfolio from "../assets/ProImage.jpg";
import Carousel from "react-material-ui-carousel";

export const Project = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projectInfo = [
    {
      id: 1,
      proImg: Portfolio,
      title: "Portfolio",
      tools: "React, Bootstrap, Material-UI, VS Code",
      status: "Status : Completed",
      description: `This portfolio page is developed using React, 
        Material UI, and Bootstrap, ensuring a modern and 
        fully responsive design. It leverages MUI media queries 
        for optimized cross-device compatibility. Built in JSX format and developed in VS Code, 
        the project highlights professional experience, technical skills, and key projects. 
        The source code is maintained on GitHub and GitLab for version control and collaboration.`,
      demo: `https://lithin1.github.io/Lithin-Portfolio/`,
      sourceCode: `https://github.com/Lithin1/Lithin-Portfolio`
    },
    {
      id: 2,
      proImg: Portfolio,
      title: "To Do App",
      status: "Status : In-Progress",
      tools: "React, Bootstrap, Material-UI, VS Code",
      description: `This is a simple To-Do App built with React, 
        Material UI, and Bootstrap for a clean, responsive design. 
        The app features task management functionality (add, mark, delete tasks) 
        and is fully responsive using MUI media queries. Developed in JSX format and 
        VS Code.The project is available on GitHub and GitLab for access and collaboration.`,
      demo: "",
      sourceCode: "",
    },
    {
      id: 3,
      proImg: Portfolio,
      title: "E-Commerce",
      status: "Status : In-Progress",
      tools: "React, Bootstrap, Mateial UI, VS Code",
      description: `This project is an E-Commerce website built with React, 
        utilizing Material UI components for a modern, responsive design.
        The website's layout and styling are enhanced using MUI media queries and Bootstrap, 
        ensuring a seamless experience across devices. The code is structured using JSX format 
        for easy readability and reusability of components.`,
      demo: "",
      sourceCode: "",
    },
  ];

  return (
    <Stack
      id="Projects"
      direction="column"
      maxWidth="1500px"
      sx={{
        color: "white",
        backgroundColor: "#004080",
        padding: isMobile ? theme.spacing(3) : theme.spacing(6),
        margin: "0 auto",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(35, 35, 145, 0.57)",
        width: !isMobile ? "100%" : "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: isMobile ? "125vh" : "100%",
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h4"
        color="inherit"
        sx={{
          textAlign: "center",
          paddingBottom: theme.spacing(4),
          paddingTop: "25px",
        }}
      >
        Projects
      </Typography>

      {/* Projects Section */}
      {!isMobile ? (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "auto",
            height: "auto",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {projectInfo.map((proInfo) => (
            <Card
              key={proInfo.id}
              sx={{
                width:isMobile?"350px":"280px",
                backgroundColor: "#001a33",
                borderRadius: "12px",
                overflow: "hidden",
                height: "auto",
                display:"flex",
                flexDirection:"column"
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                alt={proInfo.title}
                image={proInfo.proImg}
                sx={{ width:isMobile? 350:280, height: isMobile?250 :"175px"}}
              />
              {/* Card Content */}
              <CardContent
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: isMobile ? "345px":"325px",
                  width:"100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "500",
                    color: "white",
                    marginBottom: theme.spacing(1),
                    padding: "3px 0px",
                  }}
                >
                  {proInfo.title}
                </Typography>
                <Typography
                  sx={{fontSize:"13px", color: "green", marginBottom: theme.spacing(1) }}
                >
                  {proInfo.status}
                </Typography>
                <Typography
                  sx={{fontSize:"13px", color: "#808080", marginBottom: theme.spacing(1) }}
                >
                  {proInfo.tools}
                </Typography>
                <Typography
                  sx={{fontSize:"13px", color: "#d9d9d9", marginBottom: theme.spacing(1) }}
                >
                  {proInfo.description}
                </Typography>
              </CardContent>
              {/* Card Actions */}
              <CardActions
                sx={{
                  padding: theme.spacing(2),
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  href={proInfo.demo}
                  size="small"
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                >
                  Demo
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  href={proInfo.sourceCode}
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      ) : (
        <Stack
          direction="column"
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel indicators={true} sx={{ width: "360px", height: "100vh" }}>
            {projectInfo.map((proInfo) => (
              <Card
                key={proInfo.id}
                sx={{
                  width: "100%",
                  height: "85vh",
                  backgroundColor: "#001a33",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {/* Card Image */}
                <CardMedia
                  component="img"
                  alt={proInfo.title}
                  image={proInfo.proImg}
                  sx={{ height: 280 }}
                />
                {/* Card Content */}
                <CardContent
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "300px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "500",
                      color: "white",
                      marginBottom: theme.spacing(1),
                      padding: "3px 0px",
                    }}
                  >
                    {proInfo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "green", marginBottom: theme.spacing(1) }}
                  >
                    {proInfo.status}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#808080", marginBottom: theme.spacing(1) }}
                  >
                    {proInfo.tools}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#d9d9d9", marginBottom: theme.spacing(1) }}
                  >
                    {proInfo.description}
                  </Typography>
                </CardContent>
                {/* Card Actions */}
                <CardActions
                  sx={{
                    padding: theme.spacing(2),
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    variant="contained"
                    href={proInfo.demo}
                    sx={{
                      borderRadius: "20px",
                      textTransform: "none",
                    }}
                  >
                    Demo
                  </Button>
                  <Button
                    variant="contained"
                    href={proInfo.sourceCode}
                    sx={{
                      borderRadius: "20px",
                      textTransform: "none",
                    }}
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </Stack>
      )}
    </Stack>
  );
};
