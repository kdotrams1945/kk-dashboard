"use client";

import {
  Card,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { keyframes } from "@mui/system";
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const SIZE = 48; // icon size in px

const kfX = keyframes`
  0%   { left: 0; }
  100% { left: calc(100% - ${SIZE}px); }
`;
const kfY = keyframes`
  0%   { top: 0; }
  100% { top: calc(100% - ${SIZE}px); }
`;

const skills = [
  { name: "Java",        Icon: DiJava,       color: "#F89820", dx: 6, dy: 7 },
  { name: "Python",      Icon: SiPython,     color: "#3776AB", dx: 8, dy: 5 },
  { name: "C++",         Icon: SiCplusplus,  color: "#00599C", dx: 7, dy: 9 },
  { name: "SQL",         Icon: SiMysql,      color: "#00758F", dx: 5, dy: 6 },
  { name: "React",       Icon: SiReact,      color: "#61DAFB", dx: 9, dy: 8 },
  { name: "Typescript",  Icon: SiTypescript, color: "#3178C6", dx: 6, dy:10 },
];

export default function SkillsCard() {
  return (
    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, height: 300 }}>
    <Typography variant="h6" gutterBottom>
      Languages / Frameworks
    </Typography>

    {/* ── NEW flex row ───────────────────────────────────── */}
    <Box sx={{ display: "flex", height: "100%" }}>
      {/* fixed column for the bullet list */}
      <Box sx={{ minWidth: 200, pr: 2, position: "relative", zIndex: 2 }}>
        <List sx={{ pl: 2, pointerEvents: "none" }}>
          {skills.map(({ name }) => (
            <ListItem key={name} disableGutters sx={{ py: 0.5 }}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* flexible arena for bouncing icons */}
      <Box
        sx={{
          position: "relative",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {skills.map(({ Icon, color, dx, dy }, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              fontSize: SIZE,
              color,
              top: `${(i * 23) % 80}%`,
              left: `${(i * 37) % 80}%`,
              animation: `
                ${kfX} ${dx}s linear infinite alternate,
                ${kfY} ${dy}s ease-in-out infinite alternate
              `,
            }}
          >
            <Icon />
          </Box>
        ))}
      </Box>
    </Box>
  </Card>
  );
}