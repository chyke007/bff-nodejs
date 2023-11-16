const AWS = require("aws-sdk");

const lambda = new AWS.Lambda({
  region: process.env.Region,
});

module.exports.handler = async (event) => {
  const MicroA = process.env.MicroA;
  const MicroB = process.env.MicroB;
  console.log(MicroA, MicroB);

  const params1 = {
    FunctionName: MicroA,
  };

  const params2 = {
    FunctionName: MicroB,
  };

  try {
    const response1 = await lambda.invoke(params1).promise();
    if (response1.StatusCode !== 200) {
      throw new Error("Failed to get response from lambda function");
    }

    const response2 = await lambda.invoke(params2).promise();
    if (response2.StatusCode !== 200) {
      throw new Error("Failed to get response from lambda function");
    }

    const response1Body = JSON.parse(JSON.parse(response1.Payload).body);
    const response2Body = JSON.parse(JSON.parse(response2.Payload).body);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          content: response2Body.text,
          key: response1Body.forWeb,
          title: "Web App",
        },
        null,
        2
      ),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
