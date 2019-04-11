const js = import("./node_modules/@aevalo/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
