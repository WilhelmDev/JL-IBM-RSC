import { User } from "@/core/domain/user";

export type RealStateItem = {
    id: number;
    description: string;
    title: string;
    price: string;
    status: string;
    classification: string;
    type: string;
    slug: string;
    agent_id: number;
    created_at: string;
    updated_at: string;
};

export type LinkItem = {
    url: string | null;
    label: string;
    active: boolean;
};

export type RealStateData = {
    current_page: number;
    data: RealStateItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: LinkItem[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

export type Pagination = {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
};

export type UserResponseData = {
    items: User[];
    pagination: Pagination;
};