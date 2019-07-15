---
title: Code Example Test
description: Testing the HEXO code example plugin
---
Create a demo area (html, css, javascript) in the post content

## Install the plugin


``` bash
npm install hexo-tag-demo --save
```

More info: [HEXO tag demo](https://github.com/laomao800/hexo-tag-demo)

### Code exmaple:

{% demo Testing %}
  <intro>
  Testing the css style to specific element
  </intro>
  <template>
  <div class="test"> test</div>
  </template>
  <script>
  
    var randomColor = '#' + Math.random().toString().substr(2,6);
    document.getElementById('colorbox').innerHTML = randomColor;
    document.getElementById('colorbox').style.background = randomColor;

  </script>
  <style>
  .test{font-size:72px;}
  </style>
{% enddemo %}