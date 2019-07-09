import * as child_process from 'child_process';
import * as fs from 'fs-extra-promise';
import * as path from 'path';
import * as UglifyJS from 'uglify-js';
import * as os from 'os';

const root = path.resolve(__filename, '../../');

function shell(command: string, args: string[]) {
    return new Promise<string>((resolve, reject) => {

        const cmd = command + " " + args.join(" ");
        child_process.exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(stdout)
            }
        })
    })
}


type ProtobufConfig = {

    options: {
        "no-create": boolean,
        "no-verify": boolean,
        "no-convert": boolean,
        "no-delimited": boolean
    },

    sourceRoot: string,
    outputFile: string


}

const pbconfigContent = JSON.stringify({
    options: {
        "no-create": false,
        "no-verify": false,
        "no-convert": true,
        "no-delimited": false
    },
    sourceRoot: "protofile",
    outputFile: "bundles/protobuf-bundles.js"
} as ProtobufConfig, null, '\t');

async function generate(rootDir: string) {

    const pbconfigPath = path.join(rootDir, 'pbconfig.json');
    if (!(await fs.existsAsync(pbconfigPath))) {
        if (await fs.existsAsync(path.join(rootDir, 'protobuf'))) {
            const pbconfigPath = path.join(rootDir, 'protobuf', 'pbconfig.json')
            if (!await (fs.existsAsync(pbconfigPath))) {
                await fs.writeFileAsync(pbconfigPath, pbconfigContent, 'utf-8');
            }
            await generate(path.join(rootDir, 'protobuf'));
        }
        else {
            throw '请首先执行 pb-egret add 命令'
        }
        return;
    }
    const pbconfig: ProtobufConfig = await fs.readJSONAsync(path.join(rootDir, 'pbconfig.json'));
    const tempfile = path.join(os.tmpdir(), 'pbegret', 'temp.js');
    await fs.mkdirpAsync(path.dirname(tempfile));
    const output = path.join(rootDir, pbconfig.outputFile);
    const dirname = path.dirname(output);
    await fs.mkdirpAsync(dirname);
    const protoRoot = path.join(rootDir, pbconfig.sourceRoot);
    const fileList = await fs.readdirAsync(protoRoot);
    const protoList = fileList.filter(item => path.extname(item) === '.proto')
    if (protoList.length == 0) {
        throw ' protofile 文件夹中不存在 .proto 文件'
    }
    await Promise.all(protoList.map(async (protofile) => {
        const content = await fs.readFileAsync(path.join(protoRoot, protofile), 'utf-8')
        if (content.indexOf('package') == -1) {
            throw `${protofile} 中必须包含 package 字段`
        }
    }))




    const args = ['-t', 'static', '--keep-case', '-p', protoRoot, protoList.join(" "), '-o', tempfile]
    if (pbconfig.options['no-create']) {
        args.unshift('--no-create');
    }
    if (pbconfig.options['no-verify']) {
        args.unshift('--no-verify');
    }
    if (pbconfig.options['no-convert']) {
        args.unshift('--no-convert')
    }
    if (pbconfig.options["no-delimited"]) {
        args.unshift("--no-delimited")
    }
    await shell('pbjs', args);
    let pbjsResult = await fs.readFileAsync(tempfile, 'utf-8');
    pbjsResult = 'var $protobuf = window.protobuf;\n$protobuf.roots.default=window;\n' + pbjsResult;
    await fs.writeFileAsync(output, pbjsResult, 'utf-8');
    const minjs = UglifyJS.minify(pbjsResult);
    await fs.writeFileAsync(output.replace('.js', '.min.js'), minjs.code, 'utf-8');
    await shell('pbts', ['--main', output, '-o', tempfile]);
    let pbtsResult = await fs.readFileAsync(tempfile, 'utf-8');
    pbtsResult = pbtsResult.replace(/\$protobuf/gi, "protobuf").replace(/export namespace/gi, 'declare namespace');
    pbtsResult = 'type Long = protobuf.Long;\n' + pbtsResult;
    await fs.writeFileAsync(output.replace(".js", ".d.ts"), pbtsResult, 'utf-8');
    await fs.removeAsync(tempfile);

}



async function add(egretProjectRoot: string) {
    console.log('正在将 protobuf 源码拷贝至项目中...');
    await fs.copyAsync(path.join(root, 'dist'), path.join(egretProjectRoot, 'protobuf/library'));
    await fs.mkdirpSync(path.join(egretProjectRoot, 'protobuf/protofile'));
    await fs.mkdirpSync(path.join(egretProjectRoot, 'protobuf/bundles'));
    await fs.writeFileAsync((path.join(egretProjectRoot, 'protobuf/pbconfig.json')), pbconfigContent, 'utf-8');

    const egretPropertiesPath = path.join(egretProjectRoot, 'egretProperties.json');
    if (await fs.existsAsync(egretPropertiesPath)) {
        console.log('正在将 protobuf 添加到 egretProperties.json 中...');
        const egretProperties = await fs.readJSONAsync(egretPropertiesPath);
        egretProperties.modules.push({ name: 'protobuf-library', path: 'protobuf/library' });
        egretProperties.modules.push({ name: 'protobuf-bundles', path: 'protobuf/bundles' });
        await fs.writeFileAsync(path.join(egretProjectRoot, 'egretProperties.json'), JSON.stringify(egretProperties, null, '\t\t'));
        console.log('正在将 protobuf 添加到 tsconfig.json 中...');
        const tsconfig = await fs.readJSONAsync(path.join(egretProjectRoot, 'tsconfig.json'));
        tsconfig.include.push('protobuf/**/*.d.ts');
        await fs.writeFileAsync(path.join(egretProjectRoot, 'tsconfig.json'), JSON.stringify(tsconfig, null, '\t\t'));
    }
    else {
        console.log('输入的文件夹不是白鹭引擎项目')
    }


}


export function run(command: string, egretProjectRoot: string) {
    run_1(command, egretProjectRoot).catch(e => console.log(e))
}

async function run_1(command: string, egretProjectRoot: string) {

    if (command == "add") {
        await add(egretProjectRoot);
    }
    else if (command == "generate") {
        await generate(egretProjectRoot)
    }
    else {
        console.error('请输入命令: add / generate')
    }

}