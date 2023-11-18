import { Container, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { ActionType, Action as Transform } from "../../model/transformer";

interface Props {}

const Action = (props: Props) => {
  const [action, setAction] = useState<ActionType>();

  const handleChange = (event: SelectChangeEvent) => {
    setAction(event.target.value as ActionType);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Grid container justifyContent="center">
        <Box component="img" src={electronLogo} width={200} height={200} />
      </Grid>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
        Electron boilerplate with TypeScript, React, and MUI
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        Made by HelloSoftware
      </Typography> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={action}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"LIST_FILES"}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Container>
  );
};

export default Action;
