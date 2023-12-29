const GetCurrentTime = (): string => {
  const today: Date = new Date();
  let hour: number | string = today.getHours();
  hour = ('0' + hour).slice(-2);

  let minute: number | string = today.getMinutes();
  minute = ('0' + minute).slice(-2);

  let second: number | string = today.getSeconds();
  second = ('0' + second).slice(-2);

  return hour + ':' + minute + ':' + second;
};

export default GetCurrentTime;
