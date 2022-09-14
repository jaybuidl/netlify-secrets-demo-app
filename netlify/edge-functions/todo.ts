import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  console.log(request);
  console.log(context);
  const { id } = request.queryStringParameters;
  const url = Deno.env.get("TODO_BASE_URL");
  const response = await fetch(`${url}/${id}`, {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await response.json();
  return context.json(jsonData);
};
