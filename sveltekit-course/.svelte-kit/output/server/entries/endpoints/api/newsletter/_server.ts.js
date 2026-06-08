//#region src/routes/api/newsletter/+server.ts
var GET = async (event) => {
	return new Response("Hello", {
		status: 418,
		headers: { x: "eluwina" }
	});
};
var POST = async (event) => {
	const email = (await event.request.formData()).get("email");
	console.log(email);
	return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
};
//#endregion
export { GET, POST };
