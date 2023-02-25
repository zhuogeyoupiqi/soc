<template>
  <div>
    <h2>登录</h2>
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item name="username">
        <a-input v-model:value='formData.account'/>
      </a-form-item>
      <a-form-item name="password">
        <a-input-password v-model:value='formData.password'/>
      </a-form-item>
      <a-form-item name="remember">
        <a-checkbox>记住我</a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button style="width: 100%" type="primary" size="large" html-type="submit" @click="login">登录欣欣【123】</a-button>
      </a-form-item>
    </a-form>
    <div>{{ name}}</div>
    <button @click="change">修改</button>
 </div>
</template>

<script setup lang='ts'>
  import { ref,reactive,toRef } from 'vue'
  import { useUserStore } from '@/stores/modules/user'
  const userStore = useUserStore();
  const formData = reactive({
    account: 'vben',
    password: '123456',
  })
  const login = () => {
    console.log('1233');
    
  }

  const man = reactive({
    name: 'xiaohang',
    age: 33,
    like: 'caihong',
    setting: {
      name: 'hehe',
      keke: {
        name: 'wo',
        lolo:'lolo'
      }
    }
  })

  const man1= reactive({
    name: 'xinxin',
    age: 22,
    like: 'caihong',
    setting: {
      name: 'kkk',
      age:'lolo',
      keke: {
        name: 'wo1111'
      }
    },
    dlldl: 'lll'
  })

  const toRefs = <T extends Object>(object:T):T=> {
    const map:any = {}
    for(let key in object) {
      map[key] = toRef(object,key)
    }
    return map
  }

  const foo = <T,>(c:T):Array<T> =>{
    return [c]
  }

  let { name } = toRefs(man)

  const toString = Object.prototype.toString;
  const is = (val: unknown, type: string) => {
    return toString.call(val) === `[object ${type}]`;
  }


  const isObject = (val:any): val is Record<any, any> => {
    return val !== null && is(val, 'Object');
  }

  let heh = is(man,'Number')
  const xiaohang = () => {
    return Promise.reject({widgetWarning: '配置数据不完整'})
  }
  
  const change = () => {
    xiaohang().then(data => {
      console.log(data,'hehhehe'); 
    }).catch(err => {
      console.log(err,'errr');
      
    })
    // const userInfo = userStore.getToken
    // console.log(userInfo,'userInfo');
    
    // const kkk = Object.assign(man,man1)
    // console.log(kkk,'llll');
    
  }

  const deepMerge = <T = any>(src: any = {}, target: any = {}):T => {
    let key: string;
    for (key in target) {
      src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
    }
    return src
  }

  let srt:any= null
  if((srt??'') !== '') {
    console.log(srt,'1');
    
  }else {
    console.log(srt,'2');
    
  }
  
  

</script>
<style scoped>

</style>