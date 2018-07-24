# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class IfengsearchItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    datetime = scrapy.Field()
    news_content = scrapy.Field()
    news_desc = scrapy.Field()
    image_path = scrapy.Field()
    image_urls = scrapy.Field()
    video_urls = scrapy.Field()
