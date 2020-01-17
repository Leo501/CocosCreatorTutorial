import os
import os.path
import zipfile
import shutil
import json

relativePath = ''
zipDirList = []


def zip_dir(dirname, zipfilename):
    filelist = []
    if os.path.isfile(dirname):
        filelist.append(dirname)
    else:
        for root, dirs, files in os.walk(dirname):
            for name in files:
                filelist.append(os.path.join(root, name))

    zf = zipfile.ZipFile(zipfilename, "w", zipfile.zlib.DEFLATED)
    for tar in filelist:
        arcname = tar[len(dirname):]
        # print arcname
        zf.write(tar, arcname)
    zf.close()


def unzip_file(zipfilename, unziptodir):
    if not os.path.exists(unziptodir):
        os.mkdir(unziptodir, 777)
    zfobj = zipfile.ZipFile(zipfilename)
    for name in zfobj.namelist():
        name = name.replace('\\', '/')

        if name.endswith('/'):
            os.mkdir(os.path.join(unziptodir, name))
        else:
            ext_filename = os.path.join(unziptodir, name)
            ext_dir = os.path.dirname(ext_filename)
            if not os.path.exists(ext_dir):
                os.mkdir(ext_dir, 777)
            outfile = open(ext_filename, 'wb')
            outfile.write(zfobj.read(name))
            outfile.close()


def encodeDir(rootdir):
    for parent, dirnames, filenames in os.walk(rootdir):
        print(parent, dirnames)
        for dirname in dirnames:
            print(parent)
            print(dirname)
            abspath = os.path.join(parent, dirname)
            # finishPath=os.path.join()
            zip_dir(abspath, abspath+'.zip')
            deleteDir(abspath)


def deleteDir(dir):
    if(os.path.exists(dir)):
        shutil.rmtree(dir)


def checkDir(rootdir):
    if os.path.exists(rootdir):
        os.removedirs(rootdir)
    os.makedirs(rootdir)


def initParams(configPath):
    data = open(configPath, 'r')
    data = json.load(data)
    global relativePath
    relativePath = data['root'] + data['hotUpdateDirName']
    global zipDirList
    zipDirList = data['zipDir']


def main():
    configPath = os.path.abspath(os.path.join(
        os.getcwd(), "./GameConfig.json"))
    initParams(configPath)
    for dir in zipDirList:
        abspath = os.path.abspath(os.path.join(os.getcwd(), relativePath+dir))
        print(abspath)
        encodeDir(abspath)
    pass


main()
