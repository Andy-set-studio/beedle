const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify-es');

/**
* Bundle the JavaScript components together and smoosh them with uglify
*/
async function bundleJavaScript() {
    const bundle = await rollup.rollup({
        input: `${__dirname}/src/beedle.js`,
        plugins: [
            uglify()
        ]
    });

    await bundle.write({
        format: 'umd',
        name: 'beedle',
        file: 'beedle.umd.js',
        dir: `${__dirname}/dist/`,
    });

    await bundle.write({
        format: 'esm',
        name: 'beedle',
        file: 'beedle.js',
        dir: `${__dirname}/dist/`,
    });
};

bundleJavaScript();
