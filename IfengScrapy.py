
from scrapy.spiders import Spider
from scrapy.linkextractors import LinkExtractor
from scrapy.http import Request
from ifengsearch.items import IfengsearchItem
import re
import requests
from scrapy.selector import Selector
class IfengScrapy(Spider):
    name = 'tester'
    allowed_domains = ['ifeng.com']
    start_urls = ['http://www.ifeng.com']

    def parse(self ,response):
        for link in LinkExtractor(allow="\w+\.ifeng\.com").extract_links(response):
            yield Request(link.url, callback=self.parse_page)

    def parse_page(self , response):
        for link in LinkExtractor(allow="\w+\.ifeng\.com/a/\d+/\d+_0\.shtml").extract_links(response):
            yield Request(link.url, callback=self.parse_content)

    def parse_content(self, response):
        #sel = Selector(response)
        item = IfengsearchItem()
        url = str(response.url)
        con_url = 'http://www.flvcd.com/parse.php?kw=' + url + '&format=super'
        respon_url = requests.get(con_url).content
        respon_sele = Selector(text=respon_url)
        item['video_urls'] = ''.join(respon_sele.xpath("//a[@class='link']/@href").extract())
        item['image_urls'] = list(response.xpath("//div[@id='main_content']/p[@class='detailPic']/img/@src").re(r'.+jpg$'))
        m =''.join(re.findall('(?<=/a/)\d+', url))
        n = ''.join(re.findall('\w+(?=\.ifeng)',url))
        item['title'] = response.xpath('//head/title/text()').extract()
        item['news_desc'] = n
        item['datetime'] = m
        item['news_content'] ='//'.join(response.xpath("//div[@id='main_content']/p/text()").extract())
        return item








