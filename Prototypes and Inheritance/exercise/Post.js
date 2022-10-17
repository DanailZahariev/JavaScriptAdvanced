function solve() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            let superStr = super.toString();
            let rating = this.likes - this.dislikes;
            if (this._comments.length > 0) {
                let commentsText = '';
                for (let i = 0; i < this._comments.length; i++) {
                    commentsText += `\n * ${this._comments[i]}`;
                }
                return `${superStr}\nRating: ${rating}\nComments:${commentsText}`;
            } else {
                return `${superStr}\nRating: ${rating}`;
            }
        }
    }

    class BlogPost extends Post {

        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

const classes = solve();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());