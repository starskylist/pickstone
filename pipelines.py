# -*- coding: utf-8 -*-
#  Define your item pipelines here
import pymysql.cursors
import requests
import os
from win32com.client import Dispatch
from urllib import request
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipelines

    # put all words in lowercase

class MYSQLpipelines(object):
    def __init__(self):
        self.conn= pymysql.connect(host='localhost',
                                 user='root',
                                 password='star5',
                                 db='ifengdb',
                                 charset='utf8',
                                 use_unicode=True)

    def Schedule(a, b, c):
        per = 100.0 * a * b / c
        if per > 100:
            per = 100
            print('%.2f%%' % per)

    def process_item(self, item, spider):
        if len(item['image_urls']):
            images = []
            dir_path = r'E:\picturedb'
            if not os.path.exists(dir_path):
                os.makedirs(dir_path)
            for image_url in item['image_urls']:
                we = image_url.split('/')[-1]
                image_file_name = 'pic_'+ we
                file_path = '%s\%s' % (dir_path, image_file_name)
                images.append(file_path)
                #if os.path.exists(file_path):
                    #continue
                with open(file_path, 'wb') as handle:
                    response = requests.get(image_url, stream=True)
                    for block in response.iter_content(1024):
                        if not block:
                            break
                        handle.write(block)
            item['image_path'] ='  '.join(images)
        else:
            item['image_path'] = ' '
       # os.execl(r"C:\Program Files (x86)\Thunder Network\Thunder\Program\Thunder.exe", "-StartType:DesktopIcon", item['video_urls'])

        def Schedule(a, b, c):
            per = 100.0 * a * b / c
            if per > 100:
                per = 100
                print('%.2f%%' % per)
        if item['video_urls']:
            #request.urlretrieve(item['video_urls'], "E:\ifeng视频\%s.mp4" %item['title'])
            o = Dispatch("ThunderAgent.Agent.1")
            o.AddTask(item['video_urls'], "%s.mp4"%item['title'], "E:\ifeng视频", "", "", 1, 0, 5)
            o.CommitTasks()
        sql = "INSERT INTO IFENG(news_desc,title,datetime,news_content,image_path) VALUES (%s, %s,%s,%s,%s)"
        self.conn.cursor().execute(sql, (item['news_desc'], item['title'], item['datetime'], item['news_content'], item['image_path']))
        self.conn.commit()
        return item
