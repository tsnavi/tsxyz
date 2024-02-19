// functions/getMessages.js
exports.handler = async (event, context) => {
  // Here you would typically fetch messages from a database
  // For simplicity, we'll just return a static array
  const messages = [
    { name: 'John Doe', message: 'Hello, world!' },
    // ... more messages
  ];

  return {
    statusCode:  200,
    body: JSON.stringify({ messages }),
  };
};
