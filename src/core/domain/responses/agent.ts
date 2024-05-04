export interface Agent {
    id: number;
    email: string;
    email_verified_at: string | null;
    phone: string | null;
    role_id: number;
    created_at: string;
    updated_at: string;
    username: string;
    first_name: string;
    last_name: string;
    job_title: string | null;
    language: string | null;
    company_name: string | null;
    cuit_name: string | null;
    address: string | null;
    description: string | null;
}

export interface SocialMediaData {
    id: number;
    facebookurl?: string;
    pinterest_url?: string;
    instagram_url?: string;
    twitter_url?: string;
    linkedin_url?: string;
    website_url?: string;
}

export interface SocialMedia {
    facebookurl?: string;
    pinterest_url?: string;
    instagram_url?: string;
    twitter_url?: string;
    linkedin_url?: string;
    website_url?: string;
}

export interface ChangePasswordForm {
    current_password: string;
    password: string;
    password_confirmation: string;
}