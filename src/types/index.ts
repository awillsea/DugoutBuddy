export interface User {
    id: string;
    email: string;
    name: string;
    role: 'manager' | 'player';
}

export interface Team {
    id: string;
    name: string;
    managerId: string;
    season: string;
}

export interface Player {
    id: string;
    userId?: string;
    name: string;
    number: string;
    positions: string[];
}