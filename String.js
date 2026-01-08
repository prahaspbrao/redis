import client from "./client.js";

await client.lpush("messages", "A"); // ["A"]
await client.rpush("messages", "B"); // ["A", "B"]
await client.lpush("messages", "C"); // ["C", "A", "B"]

console.log(await client.lrange("messages", 0, -1));
// ["C", "A", "B"]

console.log(await client.llen("messages"));

console.log(await client.lpop("messages")); // "C"
console.log(await client.rpop("messages")); // "B"

console.log(await client.llen("messages"));


