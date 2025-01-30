import { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Stack,
  Typography,
  Link,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#00264d" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Link href="#Portfolio" underline="none" sx={{ color: "white" }}>
              <Typography variant="h5">Portfolio</Typography>
            </Link>
          </Stack>

          {/* Desktop View */}
          {!isMobile ? (
            <Stack direction="row" spacing={4}>
              {navLinks.map((navLink, index) => (
                <Link
                  key={index}
                  href={navLink.href}
                  color="inherit"
                  underline="none"
                >
                  <Typography variant="h5">{navLink.label}</Typography>
                </Link>
              ))}
            </Stack>
          ) : (
            // Mobile View
            <>
              <IconButton color="inherit" onClick={handleMenuToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={menuOpen}
                onClose={handleMenuToggle}
                PaperProps={{
                  sx: { width: "250px" },
                }}
              >
                <Box>
                  <List>
                    {navLinks.map((navLink, index) => (
                      <ListItem key={index} onClick={handleMenuToggle}>
                        <ListItemText>
                          <Link
                            href={navLink.href}
                            color="inherit"
                            underline="none"
                          >
                            {navLink.label}
                          </Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
