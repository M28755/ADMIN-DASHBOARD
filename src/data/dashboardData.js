
export const employees = [
    { id: 'EMP001', name: 'Jordan Mitchell', dept: 'Engineering', pos: 'Lead Developer', status: 'active', avatar: 'jordan42' },
    { id: 'EMP002', name: 'Aisha Patel', dept: 'Design', pos: 'UX Designer', status: 'active', avatar: 'aisha88' },
    { id: 'EMP003', name: 'Marcus Chen', dept: 'Marketing', pos: 'Campaign Manager', status: 'remote', avatar: 'marcus55' },
    { id: 'EMP004', name: 'Elena Rodriguez', dept: 'Sales', pos: 'Sales Director', status: 'leave', avatar: 'elena77' },
    { id: 'EMP005', name: 'David Kim', dept: 'Engineering', pos: 'Backend Engineer', status: 'active', avatar: 'david33' },
    { id: 'EMP006', name: 'Priya Sharma', dept: 'HR', pos: 'HR Manager', status: 'active', avatar: 'priya22' },
    { id: 'EMP007', name: "Liam O'Brien", dept: 'Finance', pos: 'Financial Analyst', status: 'active', avatar: 'liam44' },
    { id: 'EMP008', name: 'Sophie Laurent', dept: 'Design', pos: 'Visual Designer', status: 'active', avatar: 'sophie66' },
];

export const initialLeaveRequests = [
    { id: 1, name: 'Elena Rodriguez', avatar: 'elena77', type: 'Annual Leave', from: '2024-12-18', to: '2024-12-24', status: 'pending', reason: 'Family vacation' },
    { id: 2, name: 'Yuki Tanaka', avatar: 'yuki77', type: 'Sick Leave', from: '2024-12-16', to: '2024-12-17', status: 'pending', reason: 'Flu recovery' },
    { id: 3, name: 'Marcus Chen', avatar: 'marcus55', type: 'Remote Work', from: '2024-12-19', to: '2024-12-20', status: 'pending', reason: 'Home renovation' },
];
export const departments = [
    { name: 'Engineering', count: 68, color: '#E8A838', icon: 'fa-code', budget: 85 },
    { name: 'Design', count: 32, color: '#60A5FA', icon: 'fa-palette', budget: 62 },
    { name: 'Marketing', count: 45, color: '#34D399', icon: 'fa-bullhorn', budget: 78 },
    { name: 'Sales', count: 52, color: '#F87171', icon: 'fa-handshake', budget: 91 },
    { name: 'HR', count: 24, color: '#A78BFA', icon: 'fa-heart', budget: 45 },
    { name: 'Finance', count: 26, color: '#FBBF24', icon: 'fa-coins', budget: 58 },
];
export const activities = [
    { icon: 'fa-user-plus', color: 'var(--success)', bg: 'rgba(52,211,153,0.12)', name: 'Sophie Laurent', action: 'joined the Design team', time: '2 hours ago' },
    { icon: 'fa-paper-plane', color: 'var(--warning)', bg: 'rgba(251,191,36,0.12)', name: 'Elena Rodriguez', action: 'submitted a leave request', time: '4 hours ago' },
    { icon: 'fa-check', color: 'var(--success)', bg: 'rgba(52,211,153,0.12)', name: 'Jordan Mitchell', action: "'s leave was approved", time: '6 hours ago' },
    { icon: 'fa-exchange-alt', color: 'var(--info)', bg: 'rgba(96,165,250,0.12)', name: 'Raj Kapoor', action: 'switched to remote work', time: '1 day ago' },
    { icon: 'fa-trophy', color: 'var(--accent)', bg: 'var(--accent-soft)', name: 'Sales team', action: 'hit monthly target', time: '2 days ago' },
];


