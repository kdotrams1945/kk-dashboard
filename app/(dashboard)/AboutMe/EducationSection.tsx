"use client";

import { Box } from "@mui/material";
import InfoCard, { resumeItem } from "./InfoCard";
import UIUCPhoto from "./UIUC_photo.png"

export default function EducationSection(item: resumeItem) {
    return (
      <Box sx={{ position: "relative" }}>
        <InfoCard {...item} />
  
       
        <Box
          sx={{
            position: "absolute",
            top: 24,
            right: 24,
            pointerEvents: "none",
          }}
        >
          <img
            src={UIUCPhoto.src}
            alt="UIUC logo"
            style={{ width: 120, height: "auto", display: "block" }}
          />
        </Box>
      </Box>
    );
  }


  /* <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        {/* {education.map((e) => (
      <EducationSection key={e.title} {...e} /> */
        /*<EducationSection {...education[0]} />
        <Box sx={{ position: "relative" }}>
          <InfoCard {...education[1]} />

          <Box
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
              pointerEvents: "none",
            }}
          >
            <img
              src={NVHS.src}
              alt="NVHS logo"
              style={{ width: 120, height: "auto", display: "block" }}
            />
          </Box>
        </Box> */