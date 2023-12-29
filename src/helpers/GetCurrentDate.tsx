const GetCurrentDate = (): string => {
  const today: string = new Date().toJSON().slice(0, 10);
  return today;
};

export default GetCurrentDate;
