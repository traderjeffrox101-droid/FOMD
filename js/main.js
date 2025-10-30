// Common data management functions
const DataManager = {
    // Load personnel data from localStorage
    loadPersonnelData() {
        return JSON.parse(localStorage.getItem('fomdPersonnelData')) || [
            { 
                name: 'John Smith', 
                id: 'IPI-001', 
                dateHired: '2020-03-15', 
                status: 'ACTIVE',
                position: 'Department Head',
                employmentStatus: 'Regular'
            },
            { 
                name: 'Maria Garcia', 
                id: 'IPI-002', 
                dateHired: '2019-07-22', 
                status: 'ACTIVE',
                position: 'Chemical Engineer',
                employmentStatus: 'Regular'
            },
            { 
                name: 'Robert Johnson', 
                id: 'IPI-003', 
                dateHired: '2021-11-05', 
                status: 'ACTIVE',
                position: 'Maintenance Technician',
                employmentStatus: 'Regular'
            },
            { 
                name: 'Sarah Williams', 
                id: 'IPI-004', 
                dateHired: '2018-05-12', 
                status: 'RESIGNED',
                position: 'Section Supervisor',
                employmentStatus: 'Regular'
            },
            { 
                name: 'Michael Brown', 
                id: 'IPI-005', 
                dateHired: '2022-02-28', 
                status: 'ACTIVE',
                position: 'Operator',
                employmentStatus: 'Probationary'
            },
            { 
                name: 'David Wilson', 
                id: 'IPI-006', 
                dateHired: '2023-01-15', 
                status: 'ACTIVE',
                position: 'Others',
                positionOther: 'Safety Officer',
                employmentStatus: 'Contractual'
            },
            { 
                name: 'Jennifer Lee', 
                id: 'IPI-007', 
                dateHired: '2021-06-10', 
                status: 'ACTIVE',
                position: 'Department Secretary',
                employmentStatus: 'Regular'
            }
        ];
    },

    // Save personnel data to localStorage
    savePersonnelData(data) {
        localStorage.setItem('fomdPersonnelData', JSON.stringify(data));
    },

    // Load user data from localStorage
    loadUserData() {
        return JSON.parse(localStorage.getItem('fomdUserData')) || [
            {
                username: 'admin',
                fullName: 'System Administrator',
                password: 'admin123',
                userType: 'admin',
                status: 'active',
                lastLogin: null
            }
        ];
    },

    // Save user data to localStorage
    saveUserData(data) {
        localStorage.setItem('fomdUserData', JSON.stringify(data));
    },

    // Load leave applications from localStorage
    loadLeaveApplications() {
        return JSON.parse(localStorage.getItem('fomdLeaveApplications')) || [];
    },

    // Save leave applications to localStorage
    saveLeaveApplications(data) {
        localStorage.setItem('fomdLeaveApplications', JSON.stringify(data));
    }
};