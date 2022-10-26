// Dummy data for users
export const getUsers = () => ([
    { username: 'admin', fullName:'Boris Dovecer', email: 'boris@comdata.rs', status:1, role:"Admin", lastLogin:'2d ago', permissions: 'auth | group | can add | can change' },
    { username: 'kata', fullName:'Katarina Dovecer', email: 'kata@salata.rs', status:2, role:"Maintenance", lastLogin:'-', permissions: 'auth | group | can add | can change' },
    { username: 'alice', fullName:'Alisa Dovecer', email: 'alice@wonderland.in', status:2, role:"Operator", lastLogin:'5y ago', permissions: 'auth | group | can add | can change' }
]);

// User statuses
export const getUserStatuses = () => ([
    { id: 1, text: 'Active', color: '#4d9a17'},
    { id: 2, text: 'Inactive', color: '#808080'}
]);

// Dummy data for groups
export const getGroups = () => ([
    { name: 'Admin', status:1, permissions: 'auth | group | can add | can change',
        description:
            "<div><p>Can do everything a Maintenance can do plus:</p><ul><li>Can manage users (Add, Edit, Delete)</li><li>Can perform a reset to Factory state.</li></ul></div>"
    },
    { name: 'Maintenance', status:2, permissions: '...',
        description:
            "<div><p>Can do everything a Operator can do plus:</p><ul><li>Can upload or delete files (i.e. IODDS)</li><li> Can change configuration settings.</li></ul></div>"
    },
    { name: 'Expert', status:2, permissions: '...',
        description:
            "<div><p>Can do everything a Operator can do plus:</p><ul><li>Can be assigned a dedicated configuration functionality set/</li></ul></div>"
    },
    { name: 'Operator', status:1, permissions: 'config | network | can change',
        description:"<p>Can read content. Can change its own user credentials.</p>"
    }
])

export const getOverviewData = () => ({
    info: [
        { name: 'Product Name', text: "Xelity 10TX IP67 MFE PN SP 1.0" },
        { name: 'Product Description', text: "Xelity 10TX IP67 MFE PN SP 1.0 Xelity 10TX IP67 MFE PN SP 1.0 Xelity 10TX IP67 MFE PN SP 1.0" },
        { name: 'Order Number', text: "588851" },
        { name: 'Serial Number', text: "10001125458912" },
        { name: 'Firmware', text: "5.0.5" },
        { name: 'System Time', text: "2022-16-10 13:12:00" },
        { name: 'Operating Time', text: "0 days 0h 4m" },
        { name: 'Device Name', text: "MyName" },
        { name: 'Location', text: "MyLocation" },
        { name: 'Contact', text: "MyEmail" }
    ],
    connection: [
        { name: 'MAC Address', text: '00:0F:E9:DD:96:59' },
        { name: 'IP Address', text: '192.168.0.111' }
   ]
});

export const getLogs = () => ([
    { id: 'Port 1', status: 1, time:'2022-18-10 00:12:23', message: 'Port 1 changed to link up' },
    { id: 'System', status: 2, time:'2022-18-10 00:12:24', message: 'Login ok: user admin' },
    { id: 'Port 7', status: 3, time:'2022-18-10 00:16:23', message: 'Port 7 STP changed' },
    { id: 'Port 5', status: 4, time:'2022-18-10 00:32:23', message: 'Port 5 STP changed to forward' },
    { id: 'Port 2', status: 1, time:'2022-18-10 02:12:24', message: 'Port 2 STP changed to nesto' }
])

export const getLogStatuses = () => ([
    { id: 1, text: 'Failure', color: '#d81d41'},
    { id: 2, text: 'Out of Specification', color: '#fdb239'},
    { id: 3, text: 'Maintenance Required', color: '#003f87'},
    { id: 4, text: 'Check Function', color: '#c55324'},
])
