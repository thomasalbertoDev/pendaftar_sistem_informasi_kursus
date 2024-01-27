const TrimValue = (value: any) => {
  if (typeof value === 'string') {
    return value.trim();
  }

  return value;
};

export default TrimValue;
