import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true;
	}

	interface Theme {
		colors: {
			competenceType: {
				education: string;
				job: string;
				hardSkill: string;
				softSkill: string;
			};
			white: string;
			text: string;
			primary: {
				default: string;
				hover: string;
				pressed: string;
				disabled: string;
			};
			orange: {
				light: string;
				main: string;
				dark: string;
			};
		};
		border: string;
		borderRadius: string;
		boxShadow: string;
		linearGradient: string;
	}

	interface ThemeOptions {
		breakpoints: {
			values: {
				xs: number;
				sm: number;
				md: number;
				lg: number;
				xl: number;
				xxl: number;
			};
		};
		colors: {
			competenceType: {
				education: string;
				job: string;
				hardSkill: string;
				softSkill: string;
			};
			white: string;
			text: string;
			primary: {
				default: string;
				hover: string;
				pressed: string;
				disabled: string;
			};
			orange: {
				light: string;
				main: string;
				dark: string;
			};
		};
		border: string;
		borderRadius: string;
		boxShadow: string;
		linearGradient: string;
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: '#3B8D3B',
			light: '#8ED355',
			dark: '#2D692D',
		},
		secondary: {
			main: '#EA4F4F',
			light: '#FC8787',
			dark: '#C01212',
		},
		success: {
			main: '#1B9962',
		},
		error: {
			main: '#EC312F',
		},
	},
	colors: {
		competenceType: {
			education: '#235789',
			job: '#ED1C24',
			hardSkill: '#303030',
			softSkill: '#EDD31E',
		},
		white: '#FFFFFF',
		text: '#000000',
		primary: {
			default: '#D9D9D9',
			hover: '#cdcaca',
			pressed: '#bcb9b9',
			disabled: '#a7a5a5',
		},
		orange: {
			light: '#ffA64d',
			main: '#ff8000',
			dark: '#ff6300',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 375,
			md: 600,
			lg: 768,
			xl: 960,
			xxl: 1200,
		},
	},
	border: '2px solid #000000',
	borderRadius: '16px',
	boxShadow: '0px 8px 16px rgba(17, 17, 17, 0.06)',
	linearGradient: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3))',
	spacing: (value: number) => `${4 * value}px`,

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
					fontWeight: 500,
					fontSize: '16px',
					fontFamily: 'Roboto Condensed, sans-serif',
				},
			},
		},
	},
});
