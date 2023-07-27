import React from "react";
import { Datetime, CustomButton } from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { OrderTable } from "components/MuiTable/OrderTable";
import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { TextField, Select, MenuItem } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useMemo } from "react";

const AllOrder = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <div>
        <Typography fontSize={16} fontWeight={600} mt="10px" color="#ffff">
          <Datetime />
        </Typography>
        <center>
          <Typography fontSize={25} fontWeight={700} color="#ffff">
            {!AllOrder.length ? "Order Monitoring" : "Order Monitoring"}
          </Typography>
        </center>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <CustomButton title="Add" handleClick={() => navigate("/order/create")} backgroundColor="#475be8" color="#fcfcfc" icon={<Add />} />
        </Stack>
        <OrderTable />
      </div>
    </Box>
  );
};

export default AllOrder;
