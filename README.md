![FOCUS.JS](https://github.com/nhab/Focus/raw/master/Focus-logo.png "Focus.Js")
![]( https://github.com/nhab/Focus/blob/master/moto.png?raw=true "")

# Focus.js
Traditional web developement aproach needs more than 3 programming skill to write a single website:html,javascript
and css ,plus thousands of libraries/frameworks.
the easier aproach is to focus on javascript which is able to produce the html dom elements and css.

Focus.js is framework for make coding and debuging the web development much easier ,by **focusing on one skill** instead of 3 skills.

It **generates Html DOM elements dynamically on the fly**.
## [**Demo**](https://nhab.github.io/Focus/demo.html "Demo")

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
 //Intraction concern functions:
  // onChangeFunction could have a parameter which contain every details related to the event
 function onStateChange(obj,onChangeFunction);
 //look and feel concern functions :
 function CssSet(obj,cssName);
 //structure concern functions :
 function wizard(parent,fnWizPages,data); //appends a wizard element .fnWizPagesArray is an array of functions creating pages
 function line    (parent);                //appends a horizontal rule(line) to the document 
 function newLine (parent);                //appends a line feed (<br> element) to the parent
  
 function label   (parent,title);            // appends a label box to the document with specified title and style sheet
 function range   (parent,title,arrValues );//appends a range input tag to the document with specified arguments
 function checkBox(parent,title,css);            // appends a  checkbox to the document  with the specifed title and elements
 function textBox(parent,title,val,css);
 function dropDown(parent,title,arrItems,css);
 function link    (parent,title,url,css)         // appends an 'A' html link 
 function image   (parent,source,css);           // appends an image
 function button  (parent,title,onclickFunction);       //appends a button
 function div(parent,css)
 function simpleDatePicker(parent,title)// a very primitive DatePicker
  
 function table   (parent);             // appends a table element to the document and returns it.
 function tableRow(table);                  // appends a table row element into the specified table.
 function tableCell(TableRow,content);      // appends a table cell element into specified table row element.
 function tableRowTextbox(tb,title)
 function table_Row(tb,title,objs)

 function checkBoxes(parent,title,arrItems) //appends an array of checkboxes to the document  with the specifed title and elements
 function radioBoxes(parent,title,arrItems,name)   //appends a radio box to the document with the specifed title and elements  

 function listItem(parent,text) // appends a 'LI' item to the list
 function Lists(parent,arrItems)  // appends a 'ul' 

function radioBoxes_setState(radioboxes,indx)
function radioBoxes_getState(radioboxes)
function checkBoxes_setState(checkboxes,indxes)
function checkBoxes_getState(checkboxes)

  
  Clear(node) ;                    //Clears all child nodes of the element
  AddHtml2Body(parent,sHtml);     //Appends a peice of html code to the document.body 
  Addscript2Head(scriptUrl);      //Adds a script referencing url to the Head of current HTML
  
  
```
