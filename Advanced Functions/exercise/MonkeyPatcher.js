function solution(command) {

    let percent = 0;
    let allUpVote = 0;
    let allDownVote = 0;
    let rating = '';
    let balance = 0;

    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    }
    if (command === 'score') {
        balance = this.upvotes - this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;

        if (totalVotes < 10) {
            rating = 'new';
        } else if (totalVotes * 0.66 < this.upvotes) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        percent = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        allUpVote = totalVotes > 50 ? percent + this.upvotes : this.upvotes;
        allDownVote = totalVotes > 50 ? percent + this.downvotes : this.downvotes;
    }

    return [allUpVote, allDownVote, balance, rating];
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};