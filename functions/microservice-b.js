module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      heading: "Microservice B Data",
      text: "Text from Microservice B",
      createdAt: Date.now(),
    }),
  };
};
