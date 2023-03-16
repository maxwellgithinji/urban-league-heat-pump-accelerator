import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ButtonGetPump from "../Components/ButtonGetPump";
import logoHeatPump from "../../../assets/images/logoHeatPump.png";
import { styled } from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const footerItems = {
  "About B.H.P.A": { link: "learn-more" },
  "Our Partners": { link: "our-partners-section" },
  "F.A.Q": { link: "faq" },
};

const FooterWrapper = styled("div")(({ theme }) => ({
  background: "var(--bgColor-2)",
  color: "var(--color-text-1)",
  marginTop: "128px",
  position: "relative",
  "& .subtitle-footer": {
    fontWeight: "bold",
    textDecoration: "underline",
  },
}));

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper sx={{ px: { xl: "18%" } }}>
      <Toolbar>
        <Grid
          container
          position="static"
          pt={4}
          pb={2}
          sx={{
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Grid
            item
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ display: { xs: "none", lg: "flex" } }}
            lg={3}
          >
            <Link to="" onClick={() => window.scrollTo(0, 0)}>
              <Box
                component="img"
                container
                alt="logo"
                src={logoHeatPump}
                sx={{ maxWidth: "100%" }}
              />
            </Link>
          </Grid>

          <Grid
            item
            sx={{
              display: { xs: "block", lg: "none" },
            }}
            xs={12}
          >
            <ButtonGetPump variant="getpump" />
          </Grid>

          {/* LEARN */}
          <Grid
            item
            sx={{
              pt: { xs: 2, lg: 0 },
              px: { lg: 2 },
              borderLeft: { lg: "1px solid rgba(0, 0, 0, 0.08)" },
            }}
            xs={12}
            lg={3}
          >
            <List variant="caption">
              <Typography className="subtitle-footer">LEARN</Typography>
              {Object.keys(footerItems).map((item) => (
                <ListItem key={item} sx={{ py: { xs: 0, lg: 1 }, px: 0 }}>
                  <ListItemButton
                    sx={{
                      py: 0,
                      px: 0,
                      textAlign: { xs: "center", lg: "left" },
                    }}
                    component={item === "Our Partners" ? "button" : Link}
                    to={item === "Our Partners" ? null : footerItems[item].link}
                    onClick={
                      item === "Our Partners"
                        ? () => {
                            navigate("/public");
                            setTimeout(() => {
                              const target = document.getElementById(
                                footerItems[item].link
                              );
                              if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                              }
                            }, 100);
                          }
                        : () => window.scrollTo(0, 0)
                    }
                  >
                    <ListItemText
                      primary={item}
                      sx={{
                        color: "var(--color-text-1)",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* LEGAL */}
          <Grid
            item
            sx={{
              pt: { xs: 1, lg: 0 },
              px: { lg: 2 },
              borderLeft: { lg: "1px solid rgba(0, 0, 0, 0.08)" },
            }}
            xs={12}
            lg={3}
          >
            <List variant="caption">
              <Typography className="subtitle-footer">LEGAL</Typography>

              <ListItem sx={{ py: { xs: 0, lg: 1 }, px: 0 }}>
                <ListItemButton
                  sx={{ py: 0, px: 0, textAlign: { xs: "center", lg: "left" } }}
                  component={Link}
                  to="privacy-policy"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <ListItemText
                    primary="Privacy & Data Policy"
                    sx={{
                      color: "var(--color-text-1)",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          {/* GET IN TOUCH */}
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              pt: { xs: 2, lg: 0 },
              px: { lg: 2 },
              borderLeft: { lg: "1px solid rgba(0, 0, 0, 0.08)" },
            }}
          >
            <>
              <Typography className="subtitle-footer">GET IN TOUCH</Typography>
              <Box>
                <Box
                  variant="navLinks"
                  sx={{
                    display: "flex",
                    alignItem: "flex-center",
                    justifyContent: { xs: "center", lg: "flex-start" },
                    pt: { xs: 1, lg: 2 },
                  }}
                >
                  <LocalPhoneIcon sx={{ mr: 1 }} />
                  <a
                    href="tel:617-635-4500"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    617-635-4500 (Voicemail)
                  </a>
                </Box>
                <Box
                  variant="navLinks"
                  pt={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", lg: "flex-start" },
                    py: { xs: 1, lg: 2 },
                  }}
                >
                  <EmailIcon sx={{ mr: 1 }} />
                  <a
                    href="mailto:info@bhpa.org"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    info@bhpa.org
                  </a>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  <ButtonGetPump variant="getpump" />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    py: { xs: 0, lg: 2 },
                  }}
                >
                  <Button
                    variant="blackBtn"
                    sx={{ width: "200px", height: "50px" }}
                    component={Link}
                    to="/surveyor"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <LockOutlinedIcon sx={{ mr: 1 }} /> Member Login
                  </Button>
                </Box>
              </Box>
            </>
          </Grid>

          {/* LOGIN */}
          <Grid
            item
            xs={12}
            align="center"
            sx={{ pt: { xs: 4 }, display: { xs: "block", lg: "none" } }}
          >
            <Button
              variant="blackBtn"
              component={Link}
              to="/surveyor"
              onClick={() => window.scrollTo(0, 0)}
              sx={{ width: "200px", height: "50px" }}
            >
              <LockOutlinedIcon sx={{ mr: 1 }} /> Member Login
            </Button>
          </Grid>

          {/* COPYRIGHT */}
          <Grid
            item
            sx={{ display: { xs: "block", lg: "none" }, pt: { xs: 4 } }}
            xs={12}
          >
            <Link to="" onClick={() => window.scrollTo(0, 0)}>
              <Box
                component="img"
                container
                alt="logo"
                src={logoHeatPump}
                sx={{
                  maxWidth: "100%",
                  "@media (max-width: 350px)": {
                    width: "250px",
                  },
                }}
              />
            </Link>
          </Grid>

          <Grid item xs={12} align="center">
            <Divider light="true" sx={{ my: 2 }} />
            <Typography variant="caption" pt={1}>
              © {currentYear} | Boston Heat Pump Accelerator.
            </Typography>
            <Typography align="center" variant="caption" pt={1}>
              All logos and trademarks are copyright their respective owners.
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </FooterWrapper>
  );
};

export default Footer;
