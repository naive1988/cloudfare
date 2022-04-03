export async function handleRequest(request: Request): Promise<Response> {
  let value = await MY_KV.get('ke');
  return new Response(JSON.stringify({ data: 'hello 【' + value + '】 ' + request.url }), {

    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      "Access-Control-Allow-Origin": "*"
    }
  })
}
