const openLink = (url) => () => {
    window.open(url, '_blank');
    // return false was recommended by stackoverflow
    // it means, do not take the default option
    return false;
}

export default openLink;