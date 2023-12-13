import fs from 'node:fs/promises';

(async () => {
    const template = await fs.readFile('./.rzfury/templates/scene.ts_template');
    await fs.writeFile(`./src/scenes/${randstr(8)}.ts`, template);
})();

function randstr(size = 16) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str = '';
    while (str.length < size) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
