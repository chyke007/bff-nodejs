module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      title: "Microservice A Data",
      content: "Content from Microservice A",
      secret: "I am secret A",
      forWeb: 123456,
    }),
  };
};
