

export const categories:{name:string, link?:string, category:'settings' | 'diagnostics' | 'networks' | 'ports' | 'software' | 'users', dropdown?: {name: string, link: string,  category:'settings' | 'diagnostics' | 'networks' | 'ports' | 'software' | 'users'}[] }[] = [
    { name: 'Overview', link: '/', category: 'diagnostics' },
    { name: 'Device Settings', category: 'settings', dropdown: [
            {name: 'System Description', link: '/description', category: 'settings'},
            {name: 'IP Configuration', link: '/ipconfig', category: 'settings'},
            {name: 'Configuration Management', link: '/config', category: 'settings'},
            {name: 'Security', link: '/security', category: 'settings'}
        ] },
    { name: 'Diagnostics', category: 'diagnostics', dropdown: [
            {name: 'Logs', link: '/logs', category: 'diagnostics'},
            {name: 'Settings', link: '/settings', category: 'diagnostics' }
        ] },
    { name: 'Profinet', link: '/profinet', category: 'diagnostics' },
    { name: 'Network', category: 'networks', dropdown: [
            {name: 'RSTP Configuration', link: '/rstp/config', category: 'networks'},
            {name: 'RSTP Ports', link: '/rstp/ports', category: 'networks'},
            {name: 'SNMP', link: '/snmp', category: 'networks'},
        ]  },
    { name: 'Ports', category: 'ports', dropdown: [
            {name: 'Port Table', link: '/port/table', category: 'ports'},
            {name: 'Port Statistics', link: '/port/statistics', category: 'ports'},
            {name: 'Port Mirroring', link: '/port/mirroring', category: 'ports'},
        ] },
    { name: 'Software', category: 'software', dropdown: [
            {name: 'Plugin Management', link: '/plugin', category: 'software'},
            {name: 'Installation', link: '/installation', category: 'software'}
        ] },
    { name: 'User Management', category: 'users', dropdown: [
            {name: 'Users', link: '/users', category: 'users'},
            {name: 'Groups', link: '/groups', category: 'users'},
            {name: 'Permissions', link: '/permissions', category: 'users'},
        ] },
    { name: 'About', link: '/about', category: 'users' }
];