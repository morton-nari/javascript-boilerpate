// export default class UserService {
//     constructor() {
//         this.cache = {};
//     }

//     async getUserData(userId) {
//         console.log(`📡 Fetching data for user ID: ${userId}`);

//         if (this.cache[userId]) {
//             console.log('🔁 Returning from local cache');
//             return this.cache[userId];
//         }

//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//             const data = await response.json();
//             this.cache[userId] = data;
//             console.log('✅ Data fetched and cached');
//             return data;
//         } catch (err) {
//             console.error('❌ Failed to fetch user data:', err);
//             throw err;
//         }
//     }
// }
// userService.js
import memoize from './memoize';

export default class UserService {
    constructor() {
        const sharedCache = new Map();
        this.getUserData = memoize(this.getUserData.bind(this), sharedCache);
        // this.getUserData = memoize(this.getUserData.bind(this));
    }

    async getUserData(userId) {
        console.log(`📡 Fetching data for user ID: ${userId}`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        console.log('✅ Data fetched and cached');
        return data;
    }
}
