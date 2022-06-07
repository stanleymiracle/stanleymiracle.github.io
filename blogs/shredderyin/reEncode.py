import os
import sys
import codecs
import chardet
import io

sourceFormats = {'gb2312', 'gbk', 'gb18030', 'hz'}
targetFormat = 'utf_8'

def get_encoding_type(fileName):
    rawdata = open(fileName, 'rb').read()
    result = chardet.detect(rawdata)
    encoding = result['encoding']
    return encoding

def writeConversion(sourceFile, fileName):
    with codecs.open(fileName, 'w', targetFormat) as targetFile:
        for line in sourceFile:
            targetFile.write(line)

def convertFileWithDetection(fileName, format):
    print("    Converting '" + fileName + "'")
    with codecs.open(fileName, 'r', format) as sourceFile:
        newFileName = fileName + ".utf8"
        writeConversion(sourceFile, newFileName)
        print('    Done Converting.')
        return newFileName

def reEncode(dir):
    fileList = {}
    for path, dirs, files in os.walk(dir):
        prefix = ""
        for fileName in files:
            if fileName.endswith('.html'):
                filePath = os.path.join(path, fileName)
                print("checking file: " + filePath)
                format = get_encoding_type(filePath).lower()
                print("    format: " + format)
                if format in sourceFormats:
                    fileList[filePath] = format
        for dirName in dirs:
            print(dirName)
    print("Start Converting---------------------------------")
    for fileName, format in fileList.items():
        newFileName = convertFileWithDetection(fileName, format)
        os.replace(newFileName, fileName)

def main():
    reEncode(".")

main()
print("Done")





