import client from "./client.js";

// for(let i = 1 ; i <= 3 ; i++ ){
//     await client.sadd("ip" , i);
// };

await client.srem("ip" , 1);

console.log(await client.sismember("ip" ,1 ));


console.log(await client.smembers("ip"));




