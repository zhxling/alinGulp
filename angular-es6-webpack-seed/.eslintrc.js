module.exports = {
    'extends': ['eslint:recommended', 'google', 'prettier'],
    'plugins': ['angular', 'prettier'],
    'parserOptions': {
        'ecmaVersion': 5, //2016,
        'sourceType': 'script', //'module',
    },
    'env': {
        'es6': true,
        'node': true,
        'commonjs': true,
        'browser': true,
    },
    'globals': {
        'jQuery': true,
        '$': true,
        'angular': true,
        'app': true,
        'agGrid': true,
        'd3': true,
        'moment': true,
        'echarts': true,
        'metaApi': false,
        'metaApiserver': false,
        'jmApi': false,
        // 不确定是否应该定义的
        'nv': true,
        'projectApi': false,
        'dcConf': false,

        // 下载excel表格数据的
        'XLSX': true,
        'ArrayBuffer':true,
        'Uint8Array':true,
        'saveAs':true,

        //echart表格
        'fixMergeGridInit':true,
    },
    'rules': {
        // 'prettier/prettier': 'error',
        'no-console': [
            1,
            {
                'allow': [
                    'warn',
                    'error'
                ]
            }
        ],
        'comma-dangle': [
            2,
            'only-multiline'
        ],
        'quotes': [
            2,
            'single',
            'avoid-escape'
        ],
        'indent': [
            'error',
            4
        ],
        'max-len': [
            'error',
            120
        ],
        'no-var': 'off',
        'no-unused-vars': [
            'warn',
            {
                'vars': 'local'
                // 'all': 'all'
            }
        ],
        'prefer-spread': 'off',
        'require-jsdoc': 'off',
        'no-invalid-this': 'off',
        'space-infix-ops': [
	    'error',
	    { 'int32Hint': false }
	],
    }
};
