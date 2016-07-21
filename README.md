# Focus.js
Traditional web developement aproach needs more than 3 programming skill to write a single website:html,javascript
and thousands of libraries,css and its own libraries and more.
the easier aproach is to focus on javascript which is able to produce the html dom elements and css.

Focus.js is framework for make coding and debuging the web development much easier by focusing
on one skill instead of 3 skills.

## key concept
when you use Focus.js functions,It **generates Html elements dynamically on the fly**.

For example when you write:
```javascript
  radioBox("Type",["Conventinal","none-conventional"]);
```

it generates these code dynamically on the fly :
```
<div>
  <p> Type </p>
  <input  name='rb1' type='radio'  />Conventinal</input>
  <input  name='rb2' type='radio'  />none-Conventinal</input>
</div>
```
