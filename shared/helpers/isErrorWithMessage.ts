export function isErrorWithMessage(
	error: unknown
): error is { status: number; data: { message: string } } {
	return (
		typeof error === 'object' &&
		error !== null &&
		'data' in error &&
		typeof error.data === 'object' &&
		error.data !== null &&
		'message' in error.data
	);
}
