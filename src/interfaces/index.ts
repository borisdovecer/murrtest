export interface IUsers {
    username: string,
    fullName: string,
    email: string,
    status: number,
    role: string,
    lastLogin: string,
    permissions: string
}

export interface IGroups {
    name: string,
    description: string,
    status: number,
    permissions: string
}

export interface IStatuses {
    id: number,
    text: string,
    color: string
}

export interface IOverview {
    info: {
        name: string,
        text: string
    }[],
    connection: {
        name: string,
        text: string
    }[]
}

export interface ILogs {
    id: string,
    status:number,
    time:string,
    message:string
}

export interface ILogStatus {
    id: number,
    text:string,
    color:string
}

export interface IActiveCategory {
    settings: boolean,
    diagnostics: boolean,
    networks: boolean,
    ports: boolean,
    software: boolean,
    users: boolean
}

export interface ICategory {
    name:string,
    link?:string,
    category:'settings' | 'diagnostics' | 'networks' | 'ports' | 'software' | 'users',
    dropdown?: {
        name: string,
        link: string,
        category:'settings' | 'diagnostics' | 'networks' | 'ports' | 'software' | 'users'
    }[]
}