import readline from "readline-sync"

import * as model from "./Model.js";
import * as view from "./View.js";

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    view.printTweets(model.getRecentTweets());
    let search = readline.question("Search tweets, or EXIT to quit: ");
    view.printTweets(model.searchTweets(search));
}