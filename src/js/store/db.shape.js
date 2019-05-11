export const dbShape = {
    users: {
        username: {
            credentials: {
                firstLogin: true,
                userId: 1234,
                email: 'email@adress.com',
                name: 'john doe',
            },
            actions: {
                actionId: {
                    body: 'content',
                    objectiveId: 1,
                    assignedDate: '11/11/1111',
                    dueDate: '11/11/1111',
                    createdAt: '11/11/1111',
                    priority: 1,
                },
            },
            objectives: {
                objectiveId: {
                    body: 'content',
                    category: 'condition',
                    dueDate: '11/11/1111',
                    createdAt: '11/11/1111',
                },
                // other objectives
            },
            nonNegotiables: {
                nonNegoiables: {
                    body: 'content',
                    dueDate: '11/11/1111',
                    createdAt: '11/11/1111',
                },
                // other nonNegotiables
            },
            afterActionReviews: {
                objectiveId: {
                    effective: 'content',
                    ineffective: 'content',
                    correction: 'content',
                    score: 1,
                    category: 'condition',
                    createdAt: '11/11/1111',
                },
                // other after action reviews
            },
            stats: {
                totalActionsCompleted: 2,
                objectivesCompleted: 2,
            },
        },
        // ...otherusers
    },
    notifications: {
        notificationId: {
            body: 'content',
            read: false,
            createdAt: '11/11/1111',
        },
    },
}
