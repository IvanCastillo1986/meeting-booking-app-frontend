const convertIsoDateToReadableStr = (isoString) => {

    // This converts into a js Date object, which toLocaleString() needs to format with options
    const isoDatetime = new Date(isoString);

    const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    };

    // toLocaleString uses the options object to format into human-readable string
    return isoDatetime.toLocaleString("en-US", options).split(',').join('');

}

// const isoDate = '2024-05-23T10:00:00.000Z'
// console.log(convertIsoDateToReadableStr(isoDate))


module.exports = { convertIsoDateToReadableStr };