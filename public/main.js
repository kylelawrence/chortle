import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"

const { div } = van.tags

const app = div("Welcome to chortle")

van.add(document.body, app)