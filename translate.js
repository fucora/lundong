let composer = require('../magix-composer/index');
let revisableReg = /@:\{([a-zA-Z\.0-9\-\~#_&]+)\}/g;
let camelizeRE = /[#.-]{1,}(\w)/g;
let camelize = str => {
    return str.replace(camelizeRE, (_, c) => {
        return c ? c.toUpperCase() : '';
    });
};
composer.walk('./tmpl2', file => {
    let content = composer.readFile(file);
    content = content.replace(revisableReg, (m, $1) => {
        let [prefix, postfix] = $1.split('#');
        if (!postfix) {
            postfix = prefix;
        }
        return camelize(postfix);
    });
    composer.writeFile(file.replace('/tmpl2/', '/tmpl/'), content);
});