export default function formatDate(isoDateString) {

    const inputDate = new Date(isoDateString);
    const string = inputDate.toISOString().slice(0, 10);

    return string;
}