const formatResponse = (data: any, message = "Success") => {
  return { message, data };
};

export default formatResponse;
