import Box from "@mui/material/Box";

export default function PlayPauseAction ({children, color, onClick}) {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
             sx={{borderRadius: '50%', backgroundColor: color, width: '40px', height: '40px'}}
             onClick={onClick}
        >
            {children}
        </Box>
    )
}