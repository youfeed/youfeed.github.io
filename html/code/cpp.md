# c++ 学习笔记

### 1. 变量类型 

``` cpp
  int
  double
  char // 单字节
  float
  string    
  bool
```

### 2.1 函数声明

``` cpp
 void func(){}无返回值函数
 int func(){} 返回整数
```

### 2.2 函数入参
``` cpp
  void func(string name1, int name2){} // 无返回二个入参函数
  void func(string name1='默认参数'){} // 无返回一个有默认参数的函数
  
  void func(string &name1){
      name1 = '新字符串';
  } // 引用传参 会直接修改原来的参数
```

### 2.3 函数重载

``` cpp
  int func_add(int x,int y){
      return x + y;
  }
  double func_add (double x,double y){
      return x + y;
  }
  
  void main(){
      int int_add = func_add(1,101);
      double dou_add = func_add(1.1,100.6);
      
      cout << int_add << endl << dou_add;
  }
```


> 只要入参的数量/类型不同 就可以用相同的函数名 在不确定入参类型,兼容时候用的到
***

### 3. 输入输出
``` cpp
  cin >>
  cout <<
  
  endl 等于 `\n` 换行
```

### 4. 类与OOP(面向对象)

### 4.1 概念

> class(水果) objects(香蕉、葡萄)

> class(订单) objects(id,标题,数量,价格,支付状态)

### 4.2 创建类
``` cpp
  class Order {
    public:
      int id;
      string title;
    private:
      int iii;
    protected:
      int ooo;
  }
  
  // 使用类 点访问
  
  void main(){
    Order myorder;
    myorder.id = 15;
    
    cout << myorder.id << endl;
    // 多个对象
    
    Order myorder2;
    Order myorder3;
  }
```
> public 代表可以从外部访问它

> private 代表不可以从外部访问它,只能内部互相访问

> `protected` 不能外部访问, 如果有人继承该类，就能访问 里面的方法

> id title 代表内部的变量

### 4.3 类方法

> 可以内部创建 也可以外部创建

``` cpp
 class Order {
   public:
    // 内部
    void func1(){
      
    }
 }
 // 外部
 void Order::func2(){
   
 }
 // 外部 带入参
 
 void Order::func3(int x){
   return x++;
 }
 // 调用
 void main(){
   Order myorder;
   myorder.func1() 
   myorder.func2() 
   myorder.func3(100) 
 }
```

> :: 特别像 js 的 prototype 

### 4.4 类的构造函数

``` cpp
  class Order{
    public:
    int id;
    Order(int id){
      id += 100;
    }
  }
  
  // 也可以外部 定义构造函数
  Order::Order(int id){
    id += 100;
  }
  // 也可以给初始值 建议给
```

> 写个和类名一样的函数 就是构造函数 初次调用自执行

### 4.5 类封装 

> Setter Getter 在piblic 里面创建一些方法，来获取private 里面的变量或者调用私有方法，为了保持数据安全，不会到处被改

### 4.6 类的继承 

``` cpp
  class Vehicle {
    public:
      vehicle_func(){
        
      }
  }
  class Car: public Vehicle(){
    
  }

```
> 继承 用的 `:` 上面代表 Car 继承 Vehicle 里面 public的方法

### 4.7 多级继承 和 多重继承
``` cpp
  // 多级继承
  class Top(){
    public:
      top_func(){
        
      }
  }
  class Middle: public Top(){
    public:
      middle_func(){
        
      }
  }
  class Bottom: public Middle(){
    public:
      bottom_func(){
        
      }
  }
  // 多重继承
  class Top1(){
    public:
      top2_func(){
        
      }
  }
  class Top2(){
    protected:
      bool canuse;
    public:
      top2_func(){
        
      }
  }
  // 多重继承写法 可访问的继承方法 `protected`
  class All:public Top1,public Top2(){
    public:
      set_top_protected(){
        canuse = false
      }
  }
  // 调用
  void main(){
    Bottom bottoms;
    
    bottoms.middle_func() // 调用上一层
    bottoms.top_func() // 调用上上一层
  }
``` 

### 4.8 类的多态性

> 上面的 `多级继承` `多重继承`,可以继承上层类的各种方法，而多态 是为了用这些方法执行不同的任务

``` cpp
  class Order{
    public:
      string state(){
        return '状态'
      }
  }
  
  class buy_befor: public Order{
    public:
    string state(){
      return '购买前'
    }
  }

  class buy_after: public Order{
    public:
    string state(){
      return '购买后'
    }
  }
  
  // 使用类
  void main{
    Order order;
    buy_befor befor;
    buy_after after;
    
    order.state();
    befor.state();
    after.state();
  }

```


### 5 cpp 文件

> ofstream 打开和写

> ifstream 读

> fstream 打开和写和读

### 异常处理捕获

``` cpp
try{
  
  throw 500
}catch(...){
  
}

```
> catch 捕获throw的自定义错误 ... 不知道错误类型