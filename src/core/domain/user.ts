export type UserLogin = {
    email: string;
    password: string;
}

export type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    phone: string | null;
    role_id: number;
    created_at: string;
    updated_at: string;
};