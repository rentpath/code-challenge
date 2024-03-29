## Getting Started

1. [Make sure Yarn is installed](https://classic.yarnpkg.com/en/docs/install)
2. Run the following to run the react server
```
yarn
yarn start
```


## Coding Exercise (30 min)

Coding Exercise Instructions (30 minutes)

If you look at the following URL https://api.github.com/users/dhh/events,
you will see a response containing data that is a history of the events of
dhh's interactions with github.

Your task is to update the react application to do the following:

When the "Get Score" button is clicked, the application should
read the JSON response from the URL and calculate a score for
the users interactions.

The score is calculated from the "type" key value pair, where
- PushEvent = 5 points
- PullRequestReviewCommentEvent = 4 points
- WatchEvent = 3 points.
- CreateEvent = 2 points.
- Every other event = 1 point.

Once calculated, the score should be rendered in place of the "n/a".

### bonus
- Add a text input, whose value acts as a score multiplier.

---

## Lead Instructions

Coding Exercise Instructions (30 minutes)

If you look at the following URL https://api.github.com/users/dhh/events,
you will see a response containing data that is a history of the events of
dhh's interactions with github.

Your task is to update the react application to do the following:

For the two users dhh and jashkenas

When the "Get Score" button is clicked, the application should read
the JSON response from the URL and calculate a score for the combined
users interactions.

- PushEvent = 5 points
- PullRequestReviewCommentEvent = 4 points
- WatchEvent = 3 points.
- CreateEvent = 2 points.
- Every other event = 1 point.

Once calculated, the combined score should be rendered in place of the
"n/a".

Add two more fields below the combined score to represent each user's
score with their username as a label

### bonus
- Add a text input, whose value acts as a combined score multiplier.
