'use strict';

import allTweets from "./uw_ischool_tweets";

let tweets = allTweets.map(x => {
    let obj = {"text_content": x.text, "timestamp": Date.parse(x.created_at)};
    return obj;
})

export function getRecentTweets() {
    const sortedDesc = tweets.sort(
        (objA, objB) => Number(objB.date) - Number(objA.date),
      );
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(sortedDesc[i]);
    }
    return arr;
}
export function searchTweets(search) {
    let result = tweets.filter(x => {
        
        return x.text_content.includes(search);
    })
    return result;
}
