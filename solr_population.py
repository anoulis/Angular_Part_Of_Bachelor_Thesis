import pysolr, io, json
solr_url = 'http://localhost:8983/solr/'
solr_collection = 'articlescollection'
filename = 'articles.json'

# declaration of the field where we will index the records
field = 'text_custom'
#temp storing of articles
all_Of = []
counter = 0
second_counter = 0

#set a limit for articles indexing (all articles = 12.834.585)
limit = 12834585

#connect with solr
solr = pysolr.Solr(solr_url+solr_collection)
#clear previous records if you want
solr.delete(q='*:*')
with io.open(filename, 'r', encoding='utf-8', errors='ignore') as data_file:
    next(data_file)
    for line in data_file:
        # break for articles limit
        if counter == limit:
            break
        # counting articles    
        counter = counter + 1
        second_counter = second_counter + 1
        # add all the fields of an article to a dictionary and import it to the list of the records
        data = line[:-2]
        data = json.loads(data)
        temp_dict = {}
        temp_dict["id"] = data["pmid"]
        temp_dict["title"] = data["title"]
        temp_dict["title_st"] = data["title"]
        temp_dict["journal"] = data["journal"]
        temp_dict["abstract"] = data["abstractText"]
        temp_dict["meshMajor"] = data["meshMajor"]
        temp_dict["year"] = data["year"]
        temp_word = temp_dict["title"] + ' ' + temp_dict["abstract"]

        temp_dict[field] = temp_word
        all_Of.append(temp_dict)
        
        # just a control of ram usage when we import the records to the list
        if second_counter == 100000:
            solr.add(all_Of)
            all_Of.clear()
            second_counter = 0
            print(counter, ' articles indexed')
 
    # add the records list to solr
    solr.add(all_Of)
    print(counter, ' articles indexed')
        
    # close file and terminate the work
    data_file.close();

