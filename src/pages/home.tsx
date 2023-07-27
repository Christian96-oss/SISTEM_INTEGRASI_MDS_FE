import { Typography, Box, Stack } from "@pankod/refine-mui";
import { Datetime } from "components";
import { PieChart, PropertyReferrals, TotalRevenue } from "components";

const Home = () => {
  return (
    <Box>
      <Datetime />
      <center>
        <Typography fontSize={25} fontWeight={700} color="#ffff">
          Supermarket Monitoring
        </Typography>
      </center>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart title="Materials" value={6} series={[25, 25, 25, 25, 25, 25]} colors={["#275be8", "#c4e8ef"]} />
        <PieChart title="Orders" value={5} series={[25, 25, 25, 25, 25, 25]} colors={["#275be8", "#c4e8ef"]} />
        <PieChart title="Schedule" value={5} series={[20, 20, 20, 20, 20]} colors={["#275be8", "#c4e8ef"]} />
      </Box>
      <Stack mt="25px" width="100%" direction={{ xs: "column", lg: "row" }} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Home;
