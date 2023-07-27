import React from "react";
import { Datetime, CustomButton } from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { SupermarkeTable } from "components/MuiTable/SupermarkeTable";
const AllSupermarket = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <div>
        <Typography fontSize={16} fontWeight={600} mt="10px" color="#ffff">
          <Datetime />
        </Typography>
        <center>
          <Typography fontSize={25} fontWeight={700} color="#ffff">
            {!AllSupermarket.length ? "Supermarket Monitoring" : "Supermarket Monitoring"}
          </Typography>
        </center>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <CustomButton title="Add" handleClick={() => navigate("/supermarket/create")} backgroundColor="#475be8" color="#fcfcfc" icon={<Add />} />
        </Stack>
        <SupermarkeTable />
      </div>
    </Box>
  );
};

export default AllSupermarket;
