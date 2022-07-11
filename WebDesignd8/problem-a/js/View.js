
export function printTweets(arr) {
    if (!arr) {
        console.log("No tweets found");
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let time = new Date(arr[i].timestamp);
        time.toLocaleString("en-US");
        console.log('-"' + arr[i].text_content + '" (' + time + ')');
    }
}

