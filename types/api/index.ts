// Generic API response types
export interface ApiResponse<T> {
    data: T | null;
    error: { message: string } | null;
}

// Status types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
