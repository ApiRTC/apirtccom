# Python3 program for a word frequency
# counter after crawling/scraping a web-page

# sudo apt install python3-pi
# pip install beautifulsoup4


import requests
from bs4 import BeautifulSoup
import operator
from collections import Counter
import json

'''Function defining the web-crawler/core
spider, which will fetch information from
a given website, and push the contents to
the second function clean_wordlist()'''

excluded_words = ['', 'a', 'about', 'actual', 'all', 'allows', 'also', 'an', 'any',
                  'apirtc', "apirtc's",
                  'and', 'another', 'are', 'as', 'associated', 'at', 'automatically',
                  'be', 'been', 'before', 'between', 'both', 'by', 'but',
                  'can', 'case', 'change', 'contentcopy',
                  'do', 'does', 'done',
                  'each', 'every', 'event',
                  'fired', 'for', 'from',
                  'get', 'good',
                  'have', 'has', 'here', 'his',
                  'if', 'in', 'is', 'it',
                  'make', 'makes', 'may', 'method', 'must',
                  'need', 'not', 'notified', 'number',
                  'object', 'of', 'on', 'one', 'once', 'only', 'openinnew', 'or',
                  'page', 'provides',
                  'required', 'run',
                  'same', 'send', 'sent', 'set', 'some', 'string',
                  'that', 'the', 'their', 'there', 'then', 'them', 'they', 'this', 'through', 'to', 'true',
                  'use', 'used', 'useful', 'using',
                  'value', 'values',
                  'way', 'what', 'when', 'which', 'will', 'with', 'without',
                  'you', 'your']


def get_url(url):
    return requests.get(url).text


def get_file(file_path):
    f = open(file_path, "r")
    return(f.read())


def get_anchors(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    anchors = []
    for anchor_html in soup.findAll('a', {'class': 'anchor'}):
        keywords = []
        keywords.extend(anchor_html['id'].split("-") if anchor_html.get(
            'id') is not None else [])
        keywords.extend(anchor_html['keywords'].split(",") if anchor_html.get(
            'keywords') is not None and anchor_html.get('keywords') != "" else [])
        anchors.append({
            "id": anchor_html['id']if anchor_html.get(
                'id') is not None else '',
            "keywords": keywords
        })

    return anchors


def get_words(html_file):

    # empty list to store the contents of
    # the website fetched from our web-crawler
    wordlist = []
    #source_code = requests.get(url).text

    # BeautifulSoup object which will
    # ping the requested url for data
    # for html_file in html_files:
    html = get_file(html_file)
    soup = BeautifulSoup(html, 'html.parser')

    # Text in given web-page is stored under
    # the <div> tags with class="container"
    for each_text in soup.findAll('div', {'class': 'container'}):
        content = each_text.text

        # use split() to break the sentence into
        # words and convert them into lowercase
        words = content.lower().split()
        for each_word in words:

            #word = clean_word(each_word)
            # if len(word) > 0:
            #    wordlist.append(word)

            wordlist.extend(clean_word(each_word))

    return wordlist
    # create_dictionary(wordlist)

# Function removes any unwanted symbols


def clean_word(word):
    symbols = "!@#$%^&*()_-+={[}]|\;:\"<>?/., "
    for i in range(len(symbols)):
        word = word.replace(symbols[i], '')

    if word not in excluded_words:
        return [word]
    else:
        return []


def clean_wordlist(wordlist):

    clean_list = []
    for word in wordlist:
        symbols = "!@#$%^&*()_-+={[}]|\;:\"<>?/., "

        for i in range(len(symbols)):
            word = word.replace(symbols[i], '')

        if len(word) > 0:
            clean_list.append(word)

    create_dictionary(clean_list)

# Creates a dictionary containing each word's
# count and top_20 ocuuring words


def create_dictionary(clean_list):
    word_count = {}

    for word in clean_list:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1

    ''' To get the count of each word in
		the crawled page -->

	# operator.itemgetter() takes one
	# parameter either 1(denotes keys)
	# or 0 (denotes corresponding values)

	for key, value in sorted(word_count.items(),
					key = operator.itemgetter(1)):
		print ("% s : % s " % (key, value))

	<-- '''

    c = Counter(word_count)

    # returns the most occurring elements
    top = c.most_common(100)
    print(top)


# Driver code
if __name__ == '__main__':

    # starts crawling and prints output
    # start(get_url("http://localhost:4200/dev-guide"))

    index = {}

    pages = []
    pages.append({'title': "Front App API Getting Started", 'path': "getting-started",
                 'anchors': get_anchors(get_file("./src/app/docs/getting-started/getting-started.component.html"))})
    pages.append({'title': "Architecture", 'path': "architecture",
                 'anchors': get_anchors(get_file("./src/app/docs/architecture/architecture.component.html"))})
    pages.append({'title': "Logical Concepts", 'path': "logical-concepts",
                 'anchors': get_anchors(get_file("./src/app/docs/logical-concepts/logical-concepts.component.html"))})
    pages.append({'title': "Front App API Developer Guide", 'path': "dev-guide",
                 'anchors': get_anchors(get_file("./src/app/docs/dev-guide/dev-guide.component.html"))})
    pages.append({'title': "Platform Developer Guide", 'path': "platform-dev-guide",
                 'anchors': get_anchors(get_file("./src/app/docs/platform-dev-guide/platform-dev-guide.component.html"))})
    pages.append({'title': "Demo", 'path': "demo",
                 'anchors': get_anchors(get_file("./src/app/docs/demo/demo.component.html"))})
    pages.append({'title': "Samples", 'path': "examples",
                 'anchors': get_anchors(get_file("./src/app/docs/examples/examples.component.html"))})

    index = {'pages': pages}

    # , indent=4
    print(json.dumps(index, sort_keys=False))
#search_data = {'anchors': anchors}
#    print(json.dumps(search_data, sort_keys=False, indent=4))

    # html_files = ["./src/app/docs/architecture/architecture.component.html",
    #               "./src/app/docs/getting-started/getting-started.component.html",
    #               "./src/app/docs/dev-guide/dev-guide.component.html"]

    # for html_file in html_files:
    #     words = get_words(html_file)
    #     print(html_file)
    #     create_dictionary(words)

    # start(html_files)
