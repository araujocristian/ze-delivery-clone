# Frontend/Mobile Challenge

## About the Challenge 

We're using GraphQL here, so thats gonna be the way your going to receive the data(sounds good, right?).

### What you should develop?
Its simple. The user needs to type an address inside a field and be redirected to a products list page. So your job as a front-end engineer will be to create 2 simple screens consuming and sending data to our API.

You can check out a flux sample at: https://www.ze.delivery/ (our production env)

We're using GraphQL (give a look to https://www.graphql.com/guides/)

### Visual
We want you to feel free to develop the markup the way you want, we have no wireframes or something like that for this task. You will create 2 screens:
  - Home:
    - Needs to have a header, a footer and a input for the user to fill up with the address.
  - Products page:
    - We want to see the products as cards, with the product title, price and buttons to add/remove the product.

### About the API
The   API   link   is:    https://api.code-challenge.ze.delivery/public/graphql 
  - Home
    - To   find   the   latitude   and   longitude   of   an   address, you can use Google Maps API or use any other Geocoder API that you feel comfortable with.
    - Use   the   following   address   to   find   a   POC:    Rua   Américo   Brasiliense,   São   Paulo . 
    - The   Query   needed   to   get   the   right   POC   (Get   the   first   POC):
        - Query:       https://bit.ly/32Gb2Qi
        - Arguments:
          - Algorithm:   "NEAREST".
          - Lat:   Use   as   String.
          - Long:   Use   as   String.
          - Now:   Pass   the   current   Date   formatted.
  - Product   List
      - The   Query   needed   to   get   the   products
        - Query:    https://bit.ly/2N3JQ7k
        - Arguments:
          - Id:   id   of   the   POC retrivied from previous query (PocSearch).
          - Search:   if   ""   (empty),   do   not   filters   by   search.
          - CategoryId:   if   null   do   not   filters   by   category.
      - The   Query   needed   to   get   the   category   list
        - Query:    https://bit.ly/2pMG8Xy
