import React from "react";
import { Grid, Typography, Box, Link, Container } from "@mui/material";
import ulemLogo from "../../../../assets/images/partnersLogo/ULEM.png";
import maCleanEnergyLogo from "../../../../assets/images/partnersLogo/MACleanEnergy.png";
import heatSmartLogo from "../../../../assets/images/partnersLogo/HeatSmart.png";
import codeForAmericaLogo from "../../../../assets/images/partnersLogo/CFA.png";
import codeForBostonLogo from "../../../../assets/images/partnersLogo/CFB.png";
import pcb from "../../../../assets/images/partnersLogo/powercorp-boston.jpeg";
import moc from "../../../../assets/images/partnersLogo/moc.png";
import AnimatedBox from "../../Components/AnimatedBox";
import Heading1 from "../../Components/Typography/Heading1";

const Partners = () => {
  const partners = [
    {
      id: 1,
      logo: codeForAmericaLogo,
      name: "Code For America",
      link: "https://codeforamerica.org/",
    },
    {
      id: 2,
      logo: codeForBostonLogo,
      name: "Code For Boston",
      link: "https://www.codeforboston.org/",
    },
    {
      id: 3,
      logo: pcb,
      name: "City of Boston - PowerCorpsBOS (PCB)",
      link: "https://www.boston.gov/departments/workforce-development/powercorpsbos",
    },
    {
      id: 4,
      logo: heatSmartLogo,
      name: "HeatSmart Alliance",
      link: "https://heatsmartalliance.org/",
    },
    {
      id: 5,
      logo: maCleanEnergyLogo,
      name: "MOC Alliance",
      link: "https://www.masscec.com/",
    },
    {
      id: 6,
      logo: moc,
      name: "Massachusetts Clean Energy Center",
      link: "https://massopen.cloud/",
    },
    {
      id: 7,
      logo: ulemLogo,
      name: "Urban League of Eastern Massachusetts (ULEM)",
      link: "https://www.ulem.org/",
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
          textAlign: "center",
        }}
      >
        <Heading1 text="Our Partners" />
      </Box>

      <AnimatedBox triggerOnce={false}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          px={2}
          gap={2}
        >
          {partners.map((partner) => (
            <Grid item key={partner.id}>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  sx={{
                    width: "150px",
                  }}
                  src={partner.logo}
                  alt={partner.name}
                />
              </a>
            </Grid>
          ))}
          <Grid item pb={4} pt={1} mx={2}>
            <Typography
              variant="body"
              sx={{ color: "var(--color-text-3)" }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              The Boston Heat Pump Accelerator is an initiative of the Urban
              League of Eastern Massachusetts, in partnership with local and
              national organizations.{" "}
              <Link
                href="https://www.masssave.com/residential/programs-and-services/income-based-offers/income-eligible-programs"
                target="_blank"
                rel="noopener"
                sx={{ color: "var(--color-text-3)" }}
              >
                Learn more
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </AnimatedBox>
    </Container>
  );
};

export default Partners;
