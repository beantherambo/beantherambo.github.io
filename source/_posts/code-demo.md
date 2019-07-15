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
  <div class="circle-wrap">
    <div class="circle"> 
      <div class="line">
      </div>
    </div>
  </div>
  </template>
  <style>
  .circle-wrap{
    width:60px;
    height:60px;
    position:relative;
  }
  .circle{
    border:1px solid #fff;
    border-radius:50%;
    position:absolute;
    width:60px;
    height:60px;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
  }
  .circle::after{
    position:absolute;
    width:1px;
    height:1px;
    left:50%;
    top:50%;
    background-color:#fff;
    opacity:0.5;
    border-radius:50%;
    content:"";
    display:block;
    transform:translate(-50%, -50%);
    animation: zoomOut 1.5s ease infinite;
  }
  .circle .line{
    width:50%;
    height:1px;
    background-color:transparent;
    position:absolute;
    top:calc(50% - 1px);
    transform-origin:right;
    animation: animate 5s linear infinite;
  }
  .circle .line::before{
    content:"";
    width:5px;
    height:5px;
    background-color:#fff;
    border-radius:50%;
    display:block;
    top:-2px;
    left:-3px;
    position:absolute;
  }
  @keyframes animate { 
     0% { 
      transform:rotate(0deg); 
      } 
    100% { 
      transform:rotate(-360deg); 
      } 
  }
   @keyframes zoomOut { 
     0% { 
      transform:scale(0);
      opacity:0.5;
      } 
    50%, 100% { 
      transform:scale(60);
      opacity:0;
      } 
      
  }
  </style>
{% enddemo %}