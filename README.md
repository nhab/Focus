![FOCUS.JS](https://github.com/nhab/Focus/raw/master/Focus-logo.png "Focus.Js")
![]( https://github.com/nhab/Focus/blob/master/moto.png?raw=true "")

# Focus.js
Traditional web developement aproach needs more than 3 programming skill to write a single website:html,javascript
and css ,plus thousands of libraries/frameworks.
the easier aproach is to focus on javascript which is able to produce the html dom elements and css.

Focus.js is framework for make coding and debuging the web development much easier ,by **focusing on one skill** instead of 3 skills.

It **generates Html DOM elements dynamically on the fly**.
## [**Demo**](https://dl.dropboxusercontent.com/u/68089598/projs/Focus/demo.html "Demo")

## Benifits
  - :arrow_right: Focus on coding instead of disruption made by switching between skills.
  - :pisces: Much less coding.
  - :no_mobile_phones: Much less errors.
  - :repeat: Much easier to follow your code.
  - :eight_spoked_asterisk: Straightforward debugging.
  - :fast_forward: Much more speed of product delivery.
  - :diamond_shape_with_a_dot_inside: Endless posibilities and extensibility
  - :do_not_litter: Minimum dependency.
  - :closed_lock_with_key: Full compatibility.
  - :eyes: Minimum learning curve and easy to use.
  - :cloud: Lightweight.
  
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
  
  line    (parent);                 //appends a horizontal rule(line) to the document 
  newLine (parent);                //appends a line feed (<br> element) to the parent
  
  label   (parent,title,css);            // appends a label box to the document with specified title and style sheet
  range   (parent,title,css,min,max,val);//appends a range input tag to the document with specified arguments
  checkBox(parent,title,css);            // appends a  checkbox to the document  with the specifed title and elements
  link    (parent,title,url,css)         // appends an 'A' html link 
  image   (parent,source,css);           // appends an image
  button  (parent,title,css);            //appends a button
  
  simpleDatePicker(parent,title);    // a very primitive DatePicker
  
  table   (parent,css);             // appends a table element to the document and returns it.
  tableRow(table);                  // appends a table row element into the specified table.
  tableCell(TableRow,content);      // appends a table cell element into specified table row element.
  
  checkBoxes(parent,css,title,array) ;   //appends an array of checkboxes to the document  with the specifed title and elements
  radioBoxes(parent,css,title,array) ;       //appends a radio box to the document with the specifed title and elements  
  Lists     (parent,arrItems,css);       // appends a 'ul' 
  
  list      (parent,css);                 // appends a 'ul' list element
  listItem  (parent,text,css);        // appends a 'LI' item to the list
  
  Clear(node) ;                    //Clears all child nodes of the element
```
