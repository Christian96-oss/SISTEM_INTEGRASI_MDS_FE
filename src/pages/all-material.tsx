import React from "react";
import { Datetime, CustomButton } from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { MaterialTable } from "components/MuiTable/MaterialTable";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";

const AllMaterial = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <div>
        <Typography fontSize={16} fontWeight={600} mt="10px" color="#ffff">
          <Datetime />
        </Typography>
        <center>
          <Typography fontSize={25} fontWeight={700} color="#ffff">
            {!AllMaterial.length ? "Material Status" : "Material Status"}
          </Typography>
        </center>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <CustomButton title="Add" handleClick={() => navigate("/material/create")} backgroundColor="#475be8" color="#fcfcfc" icon={<Add />} />
        </Stack>
        <MaterialTable />
      </div>
    </Box>
  );
};

export default AllMaterial;
