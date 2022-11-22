import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    direction: 'ltr',

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#fff",
                    'a' : {
                        textDecoration: "none",
                        color: "inherit",
                    },
                    'a:hover' : {
                        textDecoration: 'underline',
                    },
                },

            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "12px 24px",
                    borderRadius: '50px',
                },
            },
        },
    },

    // breakpoints: {
    //     values: {
    //         mobile: 0,
    //         tablet: 640,
    //         laptop: 1024,
    //         desktop: 1200,
    //     },
    // },

    palette: {
        primary: {
            main: '#000000',
            light: '#282828',
            lighter: '#B3B3B3',
            mainGradient:  "linear-gradient(180deg, #90AEA7 0%, #000000 89.7%)",
        },
        secondary: {
            main: '#FFFFFF',
            light: '#FFFFFFB3',
            mainGradient:  "linear-gradient(180deg,, #000000, #90AEA7)",
        },
        error: {
            main: '#eb4137',
            light: '#f5a09bb2',
            lighter: '#f5a09b1a',
        },
        warning: {
            main: '#fbbd06',
            light: '#fdde82b2',
            lighter: '#fdde821a',
        },
        info: {
            main: '#4a7f9c',
            light: '#60abd547',
            lighter: '#60abd51a',
        },
        success: {
            main: '#30be81',
            light: '#a0d6aeb2',
            lighter: '#a0d6ae1a',

        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFFB3',
        },
        action: {
            disabledBackground: '#6c759624',
            selected: '#00000014',
        },

        divider: '#282828',

        skeleton: '#e0e0e0',

        background: {
            default:'#000000',
            secondary: '#181818',
            lighter: '#FFFFFF1A',
            mainGradient: "linear-gradient(0deg, #121212, #1E1E1E)",
        },
    },

    typography: {
        fontFamily: [
            'IRANSans',
            'Poppins',
            'sans-serif',
        ].join(','),

        h1: {
            fontSize: "90px",
            fontWeight: 900,
            lineHeight: "113px",
        },
        h2: {
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "38px",
        },
        h3: {
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "38px",
        },
        h4: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
        },
        h5: {
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "19px",
        },
        h6: {
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "17px",
        },
        body1: {
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "16px",
        },
        body2: {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16px",
        },
    },

    // shadows: Array(25).fill('none')
    shadows: [
        '0px 8px 8px rgba(0, 0, 0, 0.25)',
    ],
});