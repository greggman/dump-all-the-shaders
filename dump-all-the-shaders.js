(function(global) {
  'use strict';

  function wrap(className) {
    if (!className) {
      return;
    }
    className.prototype.compileShader = (function(origFn) {
      return function(shader) {
        origFn.call(this, shader);
        console.log("---[ shader from JavaScript ] ---\n", this.getShaderSource(shader));
        const ext = this.getExtension('WEBGL_debug_shaders');
        if (ext) {
          console.log("---[ shader passed to GPU driver ] ---\n", ext.getTranslatedShaderSource(shader));
        }
      };
    }(className.prototype.compileShader));
  }

  wrap(global.WebGLRenderingContext);
  wrap(global.WebGL2RenderingContext);
}(this));
