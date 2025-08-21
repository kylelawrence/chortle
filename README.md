# Chortle
A chore chart app

[Repo](https://github.com/kylelawrence/chortle)


## Local Development

Everything is run by the static files.

No build step required.

You can serve locally however you wish, but I recommend:

```sh
npx live-server
```

| Option | Description                |
| ------ | -------------------------- |
| -o     | open browser when starting |
| -c-1   | no caching of resources    |
| -s     | silent, no logs.           |

I recommend you add an alias to your shell RC file:

```sh
alias serve="npx live-server"
```

Then you can just run `serve` from the docs directory


## Dependencies

[Water.css](https://watercss.kognise.dev/) - So I don't have to style everything

[VanJS](https://vanjs.org/start) - Because HTML is cut and we still want reactivity
