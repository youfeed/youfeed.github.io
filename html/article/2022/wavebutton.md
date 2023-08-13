# 水波按钮

> 在div 中创建一个 span span给定一个动画即可

> 你点文字 会有个穿透的问题~~~

```
<section>
  <style type="text/css">
    .box{
      width: 100%;
      height: 90px;
      background-image: linear-gradient(355deg,#1fc3b1, #89d950, #9ff155);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }
    .box h1{
      color: #fff;
    }
    .box span{
      position: absolute;
      width: 30px;
      height: 30px;
      background: #fff;
      transform: translate(-50%,-50%);
      border-radius: 50%;
      animation: anima 1s ease 1;
      pointer-events: none;
    }
    @keyframes anima{
      form{
        width: 0;
        height: 0;
        opacity: .8;
      }
      to{
        width: 400px;
        height: 400px;
        opacity: 0;
      }
    }
  }
  </style>
  <div class="box">
    <h1>水波按钮</h1>
  </div>
</section>
```

##### 代码

```
  <div class="box">
    <h1>水波按钮</h1>
  </div>
```

``` css
  .box{
    width: 100%;
    height: 90px;
    background-image: linear-gradient(355deg,#1fc3b1, #89d950, #9ff155);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
  .box h1{
    color: #fff;
  }
  .box span{
    position: absolute;
    width: 30px;
    height: 30px;
    background: #fff;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    animation: anima 1s ease 1;
    pointer-events: none;
  }
  @keyframes anima{
    form{
      width: 0;
      height: 0;
      opacity: .8;
    }
    to{
      width: 400px;
      height: 400px;
      opacity: 0;
    }
  }
```

``` js
var btns = document.querySelectorAll('.box')

btns.forEach(btn=>{
console.log(btn)
  btn.addEventListener('click',e=>{
    console.log('sdfg')
    let span = document.createElement('span')
    span.style.left = e.offsetX + 'px'
    span.style.top = e.offsetY + 'px'
    btn.appendChild(span)
    setTimeout(()=>{
      span.remove()
    },1000)
  })
})

```

``` js
var btns = document.querySelectorAll('.box')

btns.forEach(btn=>{
console.log(btn)
  btn.addEventListener('click',e=>{
    console.log('sdfg')
    let span = document.createElement('span')
    span.style.left = e.offsetX + 'px'
    span.style.top = e.offsetY + 'px'
    btn.appendChild(span)
    setTimeout(()=>{
      span.remove()
    },1000)
  })
})
```