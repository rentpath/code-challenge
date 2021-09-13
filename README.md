## Getting Started

This app can be ran with either `npm` or `yarn` ([yarn](https://classic.yarnpkg.com/en/docs/install)
should be slightly faster). After running the start script, the client will load in your default
browser.

`npm`
```sh
npm install
npm run start
```

`yarn`
```sh
yarn
yarn start
```


## Coding Challenge

GitHub's RESTful API provides data for a user's interactions within the platform. The following URL
will provide data for the user `dhh`:

- https://api.github.com/users/dhh/events


For this React application, when the `Get Score` button is clicked, the application should parse the
data from the above URL and calculate a "score" from the interactions listed.

The score is calculated from the value of `"type"`, where...
- `"PushEvent"` = 5 points
- `"PullRequestEvent"` = 4 points
- `"WatchEvent"` = 3 points
- `"CreateEvent"` = 2 points
-  every other event = 1 point

Once calculated, this score should replace the `n/a` text.


### Bonus

 Add an `<input>` element whose value acts as a score multiplier.


---

### Lead Candidates

In addition to fetching data for user `dhh`, also fetch data for user `jashkenas`. Both users will
be scored based on the same pointing system, and their _combined score_ should be displayed.
