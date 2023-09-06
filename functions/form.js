export async function onRequestPost({ request, env }) {
	return await submitHandler({ request, env });
}
