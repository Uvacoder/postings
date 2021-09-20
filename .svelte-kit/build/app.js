import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <link rel=\"icon\" href=\"/favicon.png\" />\n    <meta name=\"description\" content=\"The one stop shop for your posts\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <link rel=\"apple-touch-icon\" href=\"/logo192.png\" />\n    <link rel=\"manifest\" href=\"/manifest.json\" />\n    <title>My Posts List</title>\n    <meta name=\"keywords\" content=\"posts, list, my\" />\n    " + head + "\n  </head>\n  <body>\n    <div id=\"svelte\">" + body + "</div>\n  </body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-5c78a601.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-5c78a601.js",assets + "/_app/chunks/vendor-378a721b.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: '/service-worker.js',
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"logo192.png","size":5347,"type":"image/png"},{"file":"logo512.png","size":9664,"type":"image/png"},{"file":"manifest.json","size":496,"type":"application/json"},{"file":"robots.txt","size":24,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-d667f6e6.js","css":["assets/pages/__layout.svelte-185db0c4.css"],"js":["pages/__layout.svelte-d667f6e6.js","chunks/vendor-378a721b.js","chunks/stores-55591c9d.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-c9714405.js","css":[],"js":["error.svelte-c9714405.js","chunks/vendor-378a721b.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-4f1f89dd.js","css":[],"js":["pages/index.svelte-4f1f89dd.js","chunks/vendor-378a721b.js","chunks/stores-55591c9d.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}