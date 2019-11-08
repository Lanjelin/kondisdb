import requests
from wkwebview import *

myjs = requests.get('https://lanjelin.github.io/kondisdb/kondis.js').text.replace('\n', '')

mycss = requests.get('https://lanjelin.github.io/kondisdb/kondis.css').text.replace('\n', '')

v = WKWebView()
v.present('fullscreen')
v.swipe_navigation = True
v.add_meta('viewport', 'width=device-width, initial-scale=1')
v.add_script(myjs, add_to_end=True)
v.add_style(mycss)
v.load_url('http://db.kondis.no/')