/* eslint-disable import/no-anonymous-default-export */
import { Handler } from "@netlify/functions";
import fetch from 'node-fetch';

const handler: Handler = async (event, context) => {
  console.log(event);
  console.log(context);
  console.log("query: %s", event.body);

  // const id = (new URLPattern(request.headers.get("referer"))).search.split("=")[1];
  // console.log("query: %O", id); 
  const response = await fetch(`${process.env.RPC_URL}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: event.body
    // body: JSON.stringify({
    //   jsonrpc: "2.0",
    //   method: "eth_blockNumber",
    //   params: [],
    //   id: 1,
    // }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify(await response.json()),
  };
};

export { handler };

