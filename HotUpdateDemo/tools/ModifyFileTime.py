#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import os.path
import json

relativePath = ''
zipDirList = []
TIMESTAMP = 1330712292


def modifyFileTime(filePath, time):
    # 修改访问和修改时间
    os.utime(filePath, (time, time))


def modify(rootdir):
    for parent, dirnames, filenames in os.walk(rootdir):
        for filename in filenames:
            print(os.path.join(parent, filename))
            path1 = os.path.join(parent, filename)
            modifyFileTime(path1, TIMESTAMP)

    for parent, dirnames, filenames in os.walk(rootdir):
        for filename in dirnames:
            print(os.path.join(parent, filename))
            path1 = os.path.join(parent, filename)
            modifyFileTime(path1, TIMESTAMP)


def initParams(configPath):
    data = open(configPath, 'r')
    data = json.load(data)
    global relativePath
    relativePath = data['root'] + data['hotUpdateDirName']
    global zipDirList
    zipDirList = data['zipDir']
    des = data['des']


def main():
    configPath = os.path.abspath(os.path.join(
        os.getcwd(), "./GameConfig.json"))
    initParams(configPath)
    for dir in zipDirList:
        abspath = os.path.abspath(os.path.join(os.getcwd(), relativePath+dir))
        print(abspath)
        modify(abspath)
    pass


main()
