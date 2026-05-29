
export const employees = [
    {
        id: 'EMP001', name: 'Michael Otieno', dept: 'Engineering', pos: 'Lead Developer', status: 'active', image: 'https://thumbs.dreamstime.com/b/civil-engineer-10141676.jpg', email: 'michael@gmail.com'

    },
    {
        id: 'EMP002', name: 'Samuel Omondi', dept: 'Design', pos: 'UX Designer', status: 'active',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNiD_wTiOq3Boi3xuXhw4APRgf1RPh_CEKQ&s',
        email: 'samomondi@gmail.com'
    },
    {
        id: 'EMP003', name: 'Jack Felix', dept: 'Marketing', pos: 'Campaign Manager', status: 'remote', image: 'https://static.vecteezy.com/system/resources/thumbnails/021/512/314/small/portrait-of-asian-businessman-wearing-suit-on-blue-background-photo.jpg', email: 'jack2123@gmail.com'

    },
    {
        id: 'EMP004', name: 'Oyamo David', dept: 'Sales', pos: 'Sales Director', status: 'leave', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qTrXd65dtRAXSBLsY08hl1PDRSiNkTbEFg&s', email: 'doyamo@gmail.com'

    },
    {
        id: 'EMP005', name: 'Florine Akinyi', dept: 'Engineering', pos: 'Backend Engineer', status: 'active', image: 'https://png.pngtree.com/png-vector/20240115/ourmid/pngtree-african-american-female-engineer-in-helmet-and-reflective-vest-on-white-png-image_11436393.png',
        email: 'akinyi@gmail.com'

    },
    {
        id: 'EMP006', name: 'Varian Orembo', dept: 'HR', pos: 'HR Manager', status: 'active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MYUt2jEW4E7sUV0h-jf3sL0q1T4PZ1lmtw&s'
        , email: 'varianOrembo@gmail.com'
    },
    {
        id: 'EMP007', name: "Odhiambo Isaach", dept: 'Finance', pos: 'Financial Analyst', status: 'active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KzrhrBaRkMyVmPBrU68-b0yYItVDj3Vmuw&s', email: 'isaach0987@gmail.com'

    },
    {
        id: 'EMP008', name: 'Benedict Oduor', dept: 'Design', pos: 'Visual Designer', status: 'active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8csyoi5Vut7sMGEsUb7My1e4dyxlFnaTR-g&s', email: 'benetoduor@gmail.com'

    },
];

export const initialLeaveRequests = [
    { id: 1, name: 'Florine Akinyi', type: 'Annual Leave', from: '2024-12-18', to: '2024-12-24', status: 'pending', reason: 'Family vacation', avatar: 'https://png.pngtree.com/png-vector/20240115/ourmid/pngtree-african-american-female-engineer-in-helmet-and-reflective-vest-on-white-png-image_11436393.png' },
    { id: 2, name: 'Verian Orembo', type: 'Sick Leave', from: '2024-12-16', to: '2024-12-17', status: 'pending', reason: 'Flu recovery', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MYUt2jEW4E7sUV0h-jf3sL0q1T4PZ1lmtw&s' },
    { id: 3, name: 'Benedict Oduor', type: 'Remote Work', from: '2024-12-19', to: '2024-12-20', status: 'pending', reason: 'Home renovation', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8csyoi5Vut7sMGEsUb7My1e4dyxlFnaTR-g&s' },
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
    { icon: 'fa-user-plus', color: 'var(--success)', bg: 'rgba(52,211,153,0.12)', name: 'Michael Otieno', action: 'joined the Design team', time: '2 hours ago' },
    { icon: 'fa-paper-plane', color: 'var(--warning)', bg: 'rgba(251,191,36,0.12)', name: 'Oyamo David', action: 'submitted a leave request', time: '4 hours ago' },
    { icon: 'fa-check', color: 'var(--success)', bg: 'rgba(52,211,153,0.12)', name: 'Wilfrida Mitchell', action: "'s leave was approved", time: '6 hours ago' },
    { icon: 'fa-exchange-alt', color: 'var(--info)', bg: 'rgba(96,165,250,0.12)', name: 'Godfrey Baraza', action: 'switched to remote work', time: '1 day ago' },
    { icon: 'fa-trophy', color: 'var(--accent)', bg: 'var(--accent-soft)', name: 'Sales team', action: 'hit monthly target', time: '2 days ago' },
];


