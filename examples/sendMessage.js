const Rock = require("../lib/index");

async function main() {
  // Create a new Rock client
  const client = new Rock("YOUR TOKEN HERE");
  // If you want verbose logging, simply add "true" as a second argument

  // Send a request to the channel
  const res = await client.sendMessage({
    text: "how are you",
  });

  // This will return and print the ID `{ id: ID-HERE}
  console.log(res);
}

main();
