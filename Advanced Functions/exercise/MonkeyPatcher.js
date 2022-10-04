// function solution(command) {
//
//     if (command === 'upvote') {
//         return this.upvotes++;
//     } else if (command === 'downvote') {
//         return this.downvotes++;
//     }
//
//     let upvotes = this.upvotes;
//     let downvotes = this.downvotes;
//
//     let totalVotes = upvotes + downvotes;
//     let totalScore = upvotes - downvotes;
//
//     function ratings() {
//         if (totalVotes < 10) {
//             return 'new';
//         } else if (upvotes > totalVotes * 0.66) {
//             return 'hot';
//         } else if (totalScore >= 0 && totalVotes > 100) {
//             return 'controversial';
//         } else if (totalScore < 0) {
//             return 'unpopular';
//         } else {
//             return 'new';
//         }
//     }
//
//     if (totalVotes > 50) {
//         let obfuscate = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
//         return [upvotes + downvotes, downvotes + obfuscate, totalVotes, ratings()];
//     }
//     return [upvotes, downvotes, totalScore, ratings.call(this)]
// }
