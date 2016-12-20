
fis.project.setProjectRoot('src')
fis.processCWD = fis.project.getProjectPath();

fis.unhook('components')
    .hook('commonjs')
    .match('*.scss', {
        rExt: '.css',
        parser: fis.plugin('node-sass')
    })
    .match('_*.scss', {
        release: false
    })
    .match('*.{scss,css}', {
        useSprite: true,
        postprocessor: [
            fis.plugin('autoprefixer', {
                browsers: ['Android >= 2.3', 'iOS >= 6'],
                cascade: true
            })
        ]
    })
    .match('**.js', {
        isMod: true,
        useSameNameRequire: true,
        preprocessor: [
            fis.plugin('js-require-file', {
                useEmbedWhenSizeLessThan: 0 //不使用 base64
            }),
            fis.plugin('js-require-css')
        ],
        moduleId: '$1',
        parser: fis.plugin('babel-6.x', {
            presets: ['react', ['es2015', {'loose': true}], 'stage-0']
        })
    })
    .match('::package', {
        spriter: fis.plugin('csssprites', {
            htmlUseSprite: true,
            margin: 4,
            // 移动端高清图, pc端去除scale
            scale: 0.5
        })
    });

fis.media('dev')
    .match('::package', {
        postpackager: [
            fis.plugin('loader', {
                resourceType: 'commonJs'
            })
        ]
    })
    .match('**', {
        deploy: fis.plugin('local-deliver', {
            to: 'dev'
        })
    });

