export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.onBtFnlZ.js",app:"_app/immutable/entry/app.Bje9kxC6.js",imports:["_app/immutable/entry/start.onBtFnlZ.js","_app/immutable/chunks/CSsaRjmC.js","_app/immutable/chunks/BqqVvTl2.js","_app/immutable/chunks/Ck6aVnNq.js","_app/immutable/chunks/CK3fvTBm.js","_app/immutable/entry/app.Bje9kxC6.js","_app/immutable/chunks/Ck6aVnNq.js","_app/immutable/chunks/CK3fvTBm.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BqqVvTl2.js","_app/immutable/chunks/H5rmQ0mF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/chat",
				pattern: /^\/api\/chat\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/chat/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
