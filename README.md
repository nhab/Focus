![FOCUS.JS](https://github.com/nhab/Focus/raw/master/Focus-logo.png "Focus.Js")

# Focus.js
Traditional web developement aproach needs more than 3 programming skill to write a single website:html,javascript
and css ,plus thousands of libraries/frameworks.
the easier aproach is to focus on javascript which is able to produce the html dom elements and css.

Focus.js is framework for make coding and debuging the web development much easier ,by **focusing on one skill** instead of 3 skills.

[demo](https://dl.dropboxusercontent.com/u/68089598/projs/Focus/demo.html "demo")

## key concept
when you use Focus.js functions,It **generates Html elements dynamically on the fly**.

For example when you write:
```javascript
  radioBox("Type",["Conventinal","none-conventional"]);
```

it generates these code dynamically on the fly :
```html
<div>
  <p> Type </p>
  <input  name='rb1' type='radio'  />Conventinal</input>
  <input  name='rb2' type='radio'  />none-Conventinal</input>
</div>
```

##API
```javascript
  radioBox(title,array) ;       //appends a radio box to the document with the specifed title and elements
  checkBox(title,array) ;       //appends a checkbox to the document  with the specifed title and elements
  line();                       //appends a horizontal rule(line) to the document 
  label(title,css);             //appends a label box to the document with specified title and style sheet
  range(title,val,id);          //appends a range input tag to the document with specified arguments
  table();                      //appends a table element to the document and returns it.
  TableRow(table);              //appends a table row element into the specified table.
  TableCell(TableRow,content);  //appends a table cell element into specified table row element.
```
