exports.run = (api, event) => {
	api.sendMessage("hello world", event.thread_id);
};
