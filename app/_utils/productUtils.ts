export function getProductDate(registeredDateString:string ,pullUp:boolean):string {
    const registeredDate = new Date(registeredDateString);

    // 이후의 코드는 이전에 제시한 것과 동일합니다.
    const currentDate = new Date();
    const elapsedTimeMillis = Math.abs(currentDate.getTime() - registeredDate.getTime());
    const elapsedSeconds = elapsedTimeMillis / 1000;
    const elapsedMinutes = elapsedSeconds / 60;
    const elapsedHours = elapsedMinutes / 60;
    const elapsedDays = elapsedHours / 24;
    const elapsedMonths = elapsedDays / 30;
    const elapsedYears = elapsedDays / 365;
    let registeredDateFormat;
    if (elapsedSeconds < 60) {
        registeredDateFormat = "방금";
    } else if (elapsedMinutes < 60) {
        registeredDateFormat = `${Math.floor(elapsedMinutes)}분 전`;
    } else if (elapsedHours < 24) {
        registeredDateFormat = `${Math.floor(elapsedHours)}시간 전`;
    } else if (elapsedDays < 30) {
        registeredDateFormat = `${Math.floor(elapsedDays)}일 전`;
    } else if (elapsedMonths < 12) {
        registeredDateFormat = `${Math.floor(elapsedMonths)}달 전`;
    } else {
        registeredDateFormat = `${Math.floor(elapsedYears)}년 전`;
    }

    return  pullUp ? `끌올 ${registeredDateFormat}` : registeredDateFormat;
}