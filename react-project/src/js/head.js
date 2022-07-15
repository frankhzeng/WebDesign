import {Helmet} from 'react-helmet';

function head() {
    return (
        <Helmet>
            <meta charSet="UTF-8"></meta>
            <meta name="author" content="frank z"></meta>
            <meta name="description" content="list of a bunch of songs"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Artist Name: H</title>
            <link rel="icon" type="image/png" href="./img/favicon.png"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="css/style.css"></link>
        </Helmet>

    )
}

export default head;