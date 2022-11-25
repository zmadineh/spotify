import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function TableRowCell ({children}) {

    return (
        <Typography variant={"h6"} color={'text.primary'}>{children}</Typography>
    )
}
