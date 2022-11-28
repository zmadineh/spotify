import Box from "@mui/material/Box";

export default function PlayPauseAction ({children, color, size, onClick}) {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
             sx={{borderRadius: '50%', backgroundColor: color, width: size, height: size, cursor: "pointer"}}
             onClick={onClick}
        >
            {children}
        </Box>
    )
}