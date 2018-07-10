# Dump All The Shaders!!!

This is a script you can add to your site that will dump all your
WebGL shaders to the console.

Simply add this script **before** your other scripts

```
<script src="https://rawgit.com/greggman/dump-all-the-shaders/master/dump-all-the-shaders.js"></script>
```

Then run your page and check the console in your browser's JavaScript tools.

If the browser supports the `WEBGL_debug_shaders` extension the shader as
passed to the GPU driver will also appear in the console.

## License

MIT

