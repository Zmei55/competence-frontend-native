import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
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
		border: string;
		borderRadius: string;
		boxShadow: string;
		spacing(value: number): string;
	}
}
