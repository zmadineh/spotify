import Grid from "@mui/material/Grid";

export default function FlexCell({children}) {
    return (
        <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
            {children}
        </Grid>
    )
}