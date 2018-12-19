# -*-coding:utf8 -*-

'''
    This is a convenient utility for compressing png images by tinypng API.Hook up your server to TinyJPG and TinyPNG and compress all your images on the fly.
    The API uses the compression engine that powers the web services so you can expect exactly the same results.
    Enter your name and email address below to retrieve your key and get started.
    
    Tinypng official website:https://tinypng.com
    API Reference:https://tinypng.com/developers/reference/python 
	参考：https://hellokugo.github.io/2016/09/10/python%E8%84%9A%E6%9C%AC%E5%AE%9E%E7%8E%B0%E5%9B%BE%E7%89%87%E5%8E%8B%E7%BC%A9/
'''

import subprocess
import os
import shutil
from PIL import Image
import sys
import tinify

# 自定义多个tinify_keys存放到列表，使用前请替换
tinify_keys = ["KPnTnm9wcrX7SYJ3hJBLxBwgWTSnjZb6"]


def CompressByPillow(fromFile, out_dir):
    print("do CompressByPillow..")
    try:
        for root, dir, files in os.walk(fromFile):
            print(
                "****************************************************************************************")
            print("root dir:"+root)
            print("dir:"+str(dir))
            for file in files:
                current_file = os.path.join(root, file)
                dirName = os.path.basename(root)
                # 如果没有指定输出路径，则默认覆盖当前文件
                if not out_dir:
                    out_dir = fromFile
                targetDir = os.path.join(out_dir, dirName)
                if not os.path.exists(targetDir):
                    os.makedirs(targetDir)
                # 如果是.9图片或者非图片文件不做处理,直接做拷贝
                if not file.endswith(".9.png") and (file.endswith(".png") or file.endswith(".jpg")):
                    print(
                        "--------------------------------------------------------------------------------------------")
                    print("currrent file:"+current_file)
                    im = Image.open(current_file)
                    origin_size = os.path.getsize(current_file)

                    if file.endswith(".png"):
                        im = im.convert('P')
                    im.save(os.path.join(targetDir, file), optimize=True)

                    target_file = os.path.join(targetDir, file)
                    compress_size = os.path.getsize(target_file)
                    print('%.2f' % ((origin_size - compress_size) / origin_size))
                else:
                    if not out_dir or out_dir == fromFile:
                        continue
                    shutil.copy(current_file, os.path.join(targetDir, file))

    except Exception as e:
        print(e.message)


def CompressByTinypng(fromFile, out_dir):
    print("do CompressByTinypng..")
    try:
        for root, dir, files in os.walk(fromFile):
            print(
                "****************************************************************************************")
            print("root dir:"+root)
            print("dir:"+str(dir))
            for file in files:
                current_file = os.path.join(root, file)
                dirName = os.path.basename(root)
                # 如果没有指定输出路径，则默认覆盖当前文件
                if not out_dir:
                    out_dir = fromFile
                targetDir = os.path.join(out_dir, dirName)
                if not os.path.exists(targetDir):
                    os.makedirs(targetDir)
                # 如果是.9图片或者非图片文件不做处理,直接做拷贝
                if not file.endswith(".9.png") and (file.endswith(".png") or file.endswith(".jpg")):
                    print(
                        "--------------------------------------------------------------------------------------------")
                    # for key in tinify_keys:
                    # 验证当前API key是否可以用，不可以用就切换下一个账号
                    tinify.key = tinify_keys[0]
                    try:
                        valid = tinify.validate()
                        if valid:
                            print("currrent file:"+current_file)
                            origin_size = os.path.getsize(current_file)
                            source = tinify.from_file(current_file)
                            target_file = os.path.join(targetDir, file)
                            source.to_file(target_file)
                            compress_size = os.path.getsize(target_file)
                            print(
                                '%.2f' % ((origin_size - compress_size) / origin_size))
                        else:
                            continue
                    except Exception as e:
                        # Something else went wrong, unrelated to the Tinify API.
                        print("error while compressing png image:"+e.message)
                        continue
                else:
                    if not out_dir or out_dir == fromFile:
                        continue
                    shutil.copy(current_file, os.path.join(targetDir, file))

    except Exception as e:
        print(e.message)


'''
用法说明：

命令行输入
python imgCompress.py 压缩文件（或者目录，必填） 输出目录（选填，如果不填则覆盖当前目录）
'''

if __name__ == "__main__":
    command = sys.argv
    if len(command) < 2:
        print("command line params must have 2 parameters at least")
        raise ValueError("command line params must have 2 parameters at least")
    src_dir = command[1]
    print(src_dir)
    out_dir = None
    try:
        if os.path.isdir(command[2]):
            out_dir = command[2]
    except:
        out_dir = None
        pass

# Tinypng
    CompressByTinypng(src_dir, out_dir)
# Pngquant
    # CompressByPillow(src_dir,out_dir)
# Pillow
    # CompressByPillow(src_dir,out_dir)
