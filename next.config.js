// This is required to read markdown files.
module.exports = {
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    }
}