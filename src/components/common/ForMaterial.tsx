import { Box, Typography, FormControl, FormHelperText, TextField, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProp } from "interfaces/common";
import CustomButton from "./CustomButton";

const ForMaterial = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, orderImage }: FormProp) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Material
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <Stack direction="row" gap={6}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Part
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="line"
                {...register("line", {
                  required: true,
                })}
              >
                <MenuItem value="Dormal_Cup">Dormal Cup</MenuItem>
                <MenuItem value="Screw_Ring">Screw Ring</MenuItem>
                <MenuItem value="Teat">Teat</MenuItem>
                <MenuItem value="Fancy">Fancy</MenuItem>
                <MenuItem value="DFU">DFU</MenuItem>
                <MenuItem value="A_box">A-box</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                12 NC
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="line"
                {...register("line", {
                  required: true,
                })}
              >
                <MenuItem value="421335083380">421335083380</MenuItem>
                <MenuItem value="421335083381">421335083381</MenuItem>
                <MenuItem value="421335083382">421335083382</MenuItem>
                <MenuItem value="421335083383">421335083383</MenuItem>
                <MenuItem value="421335083384">421335083384</MenuItem>
                <MenuItem value="421335083385">421335083385</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Part
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="line"
                {...register("line", {
                  required: true,
                })}
              >
                <MenuItem value="Dormal_Cup">Dormal Cup</MenuItem>
                <MenuItem value="Screw_Ring">Screw Ring</MenuItem>
                <MenuItem value="Teat">Teat</MenuItem>
                <MenuItem value="Fancy">Fancy</MenuItem>
                <MenuItem value="DFU">DFU</MenuItem>
                <MenuItem value="A_box">A-box</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" gap={6}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Qty/Bin
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("qty_bin", { required: true })} />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Max Bin
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("qty_bin", { required: true })} />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                #Bin
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("bin", { required: true })} />
            </FormControl>
          </Stack>
          <Stack direction="row" gap={6}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Qty Deliver
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("po", { required: true })} />
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Qty Order
              </FormHelperText>
              <TextField fullWidth required id="outlined-basic" color="info" type="number" variant="outlined" {...register("po", { required: true })} />
            </FormControl>
          </Stack>
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">
                Material Photo
              </Typography>
              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleImageChange(e.target.files![0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{ wordBreak: "break-all" }}>
              {orderImage?.name}
            </Typography>
          </Stack>

          <CustomButton type="submit" title={formLoading ? "Submitting..." : "Submit"} backgroundColor="#475be8" color="#fcfcfc" />
        </form>
      </Box>
    </Box>
  );
};

export default ForMaterial;
