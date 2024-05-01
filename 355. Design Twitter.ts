// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

// Implement the Twitter class:

// Twitter() Initializes your twitter object.
// void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
// List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
// void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
// void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

type Tweet = {
  id: number;
  timestamp: number;
};

type User = {
  id: number;
  followees: Set<number>;
  tweets: Tweet[];
};

class Twitter {
  private users: Record<number, User> = {};
  private timestamp: number = 0;

  constructor() {}

  createUserIfNotExists(userId: number) {
    if (!this.users[userId]) {
      this.users[userId] = {
        id: userId,
        followees: new Set(),
        tweets: [],
      };
    }
  }

  postTweet(userId: number, tweetId: number): void {
    this.createUserIfNotExists(userId);

    this.users[userId].tweets.push({
      id: tweetId,
      timestamp: this.timestamp++,
    });
  }

  getNewsFeed(userId: number): number[] {
    this.createUserIfNotExists(userId);

    const idsToCheck = Array.from(this.users[userId].followees);
    idsToCheck.push(userId);

    const dump = [];

    idsToCheck.forEach((id) => {
      const tweets = this.users[id].tweets;
      const toPush = tweets.slice(
        Math.max(tweets.length - 10, 0),
        tweets.length
      );
      dump.push(...toPush);
    });

    dump.sort((a, b) => b.timestamp - a.timestamp);

    return dump.slice(0, 10).map((t) => t.id);
  }

  follow(followerId: number, followeeId: number): void {
    this.createUserIfNotExists(followerId);
    this.createUserIfNotExists(followeeId);

    this.users[followerId].followees.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    this.createUserIfNotExists(followerId);
    this.createUserIfNotExists(followeeId);

    this.users[followerId].followees.delete(followeeId);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
