module.exports = () => {
    return new Promise(async resolve => {
        
        const entries = [{
            path: `${__dirname}/src/beedle.js`,
            name: 'beedle'
        }];

        const configs = entries.reduce((configs, theme) => {
            const { path, name } = theme;
            return [
                ...configs,
                {
                    entry: path,
                    mode: (process.env.NODE_ENV === 'production' ? 'production' : 'development'),
                    output: {
                        path: `${__dirname}/dist/`,
                        filename: `${name}.js`
                    }
                }
            ];
        }, []);
        resolve(configs);
    });
};
