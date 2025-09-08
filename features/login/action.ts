'use server'

import z from "zod"
import { loginSchema } from "./schema"
import { RandomUserResponse, RandomUser } from "@/types/randomuser"
import { ApiResponse } from "@/types/api"
import { API_ENDPOINTS, APP_CONFIG } from "@/constants"

export const getUserAction = async (unsafeData: z.infer<typeof loginSchema>): Promise<ApiResponse<RandomUser>> => {
    const parseResult = loginSchema.safeParse(unsafeData);
    if (!parseResult.success) {
        return {
            data: null,
            error: { message: 'Invalid input data' },
        };
    }

    const { password } = parseResult.data;
    if (password !== APP_CONFIG.DEFAULT_PASSWORD) {
        return {
            data: null,
            error: { message: 'Invalid password' },
        };
    }

    try {
        const response = await fetch(API_ENDPOINTS.RANDOM_USER);
        const json: RandomUserResponse = await response.json();
        if (json?.results?.length > 0) {
            return {
                data: json.results[0],
                error: null,
            };
        }
        return {
            data: null,
            error: { message: 'No user data found' },
        };
    } catch (err) {
        return {
            data: null,
            error: { message: 'Something went wrong' },
        };
    }
};