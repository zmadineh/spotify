import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function TableHeaderCell ({children}) {

    return (
        <Typography variant={"body2"} sx={{opacity: '0.7'}}>{children}</Typography>
    )
}
