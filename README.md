![FOCUS.JS](https://github.com/nhab/Focus/raw/master/Focus-logo.png "Focus.Js")
![]( https://github.com/nhab/Focus/blob/master/moto.png?raw=true "")

# Focus.js
Focus.js is a replacement for CSS (and even HTML) in web development. 

It is a series of JavaScript functions that  are using DOM to manipulate HTML element color, position, dimension, and more.

Traditional web development needs more than 3 programming skills to write a single website:html, javascript, and CSS (+ many libraries/frameworks).

The easier approach is to focus on javascript which is more capable and easier.

Js is able to produce and manipulate the HTML elements Using its DOM Class.

In this way, your efforts will be more effective. Focus.js is the answer to such a need.

Focus.js is a framework for making coding and debugging web development much more straightforward, by **focusing on one skill** instead of 3.

It **generates Html DOM elements dynamically on the fly**. So you even don't need to have any html code!
<!--## [**Demo**](https://nhab.github.io/Focus/demo.html "Demo") 
## [**Demo Objective**](https://nhab.github.io/Focus/demoObject.html "Demo objective") 
-->
## Benefits
  - :arrow_right: Focus on coding instead of disruption made by switching between skills.
  - :cloud: Separation of real concerns in front-end development: layout, look and feel, Intractions, and states.
  - :pisces: Much less coding.
  - :no_mobile_phones: Much fewer errors.
  - :repeat: Much easier to follow your code.
  - :eight_spoked_asterisk: Straightforward debugging.
  - :fast_forward: Much more speed of product delivery.
  - :diamond_shape_with_a_dot_inside: Endless possibilities and extensibility
  - :do_not_litter: no dependency on other libraries.
  - :closed_lock_with_key: Full compatibility.
  - :eyes: Minimum learning curve and easy to use.
  - :cloud: Lightweight.
  - :repeat: Extensibility: Base Objects are in focusBase.js but you can make Composite objects on top of it.
  
## Key concepts

### Layout Generation
When you use Focus.js functions, It **generates Html elements dynamically on the fly**.

For example when you write:
```javascript
  Layout.RadioBoxes("Choose one: ",["Conventinal","none-conventional"]);
```

it generates these codes dynamically on the fly :
```html
<div>
  <p> Type </p>
  <input  name='rb1' type='radio'  />Conventinal</input>
  <input  name='rb2' type='radio'  />none-Conventinal</input>
</div>
```
**Using Focus.js elements inside your HTML:**

For example to insert a radio button inside div2
```html
<div id="div1">
  <script src='mysrc1.js'></script>
</div>
<div id="div2">
  <script src='mysrc2.js'></script>
</div>

```

```javascript
//mysrc2.js
const parentElement = document.currentScript.parentNode;

Layout.RadioBoxes(parentElement,"Choose one: ",["Conventinal","none-conventional"]);
```
<!-- ## [**Reference**](https://nhab.github.io/Focus/Reference-Objective.txt "Reference")-->
