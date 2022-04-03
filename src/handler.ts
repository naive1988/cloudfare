export async function handleRequest(request: Request): Promise<Response> {
  return new Response(JSON.stringify({ data: 'hello ' + request.url }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      "Access-Control-Allow-Origin": "*"
    }
  })
}
