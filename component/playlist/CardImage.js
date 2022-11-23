import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function CardImage ({image}) {

    return (
        <Grid sx={{boxShadow: '0px 6px 32px 6px rgba(0, 0, 0, 0.2)'}}>
            <Image src={image} alt={'playlist image'} style={{width: '230px', height: '230px', borderRadius: '4px'}}/>
        </Grid>
    )
}
