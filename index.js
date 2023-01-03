/* console.log("Hello world") */
/* 콘솔에 node index.js 하면 실행됨*/
/* npm install 모듈이름 으로 모듈 다운 가능 */

/* npm init 하면 json에 패키지 다운받은거를 볼수있음*/
/* package.json = 내용을 대략적으로 확인하기 위함 */
/* package-lock.json = 내용을 상세하게 확인하기 위함*/ 


// var figlet = require('figlet'); 
// figlet('NEW', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// }); 


/* npm uninstall 모듈이름 = 안쓰는모듈을 지워줌 */
/* express = wev framewordk 를 만드는것 */
/* 컨트롤 c = 서버끄기 */

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {       // get(http메서드) '/'(라우팅) ()=>{}(콜백)  //req=request(요청)  res=response(응답)
//   res.send('Hello World!')         // 응답에 hello world라는 문자를 담아서 send 하겠다.
// })

// app.listen(port, () => {           //port = 선착장의 개념(usb port, hdmi port)  //특정포트를 활용해서 백으로 접속
//   console.log(`Example app listening on port ${port}`)      // 듣고있다.
// })

// setTimeout(()=>{console.log("5초지남")}, 5000)   // 나중에 실행될거를 콜백함수로 안에 넣어준다. 

// ex)
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())     // 요청을 허용해준다. 괄호를 비워놓으면 모든요청에서 허용해줌

app.get('/', (req, res) => {      
  res.send('Hello World!')       
})

// GET = 2가지방법 params, query
// app.get('/user/:id', (req, res) => {   //:id를 쓰고 변수명을 주면 값이 params로 들어간다
//     // const q = req.params
//     // console.log(q.id)
    
//     const q = req.query                // http://localhost:3000/user/asdf?q=jocoding&name=jo&age=20
//     console.log(q)

//     res.send({'userid':q.id})
// })


// app.get('/dog', (req, res) => {       //localhost:3000/dog 하면 강아지가 나옴
//     res.send({'sound':'멍멍'})       //send로 링크도 가능 <a href = >
// })

// 동물소리 API 구현
  //{name} = req.parmas 를 dog를 넣어주면 바로 name으로 드감
app.get('/sound/:name', (req, res) => {        
    const { name } = req.params    

    if (name == "dog"){
        res.json({'sound': '멍멍'})
    } else if(name == "cat"){
        res.json({'sound': '야옹'})
    } else if(name == "pig"){
        res.json({'sound': '꿀꿀'})
    } else{
        res.json({'sound': '알수없음'})
    }
    
})


// app.get('/cat', (req, res) => {        //localhost:3000/cat 하면 강아지가 나옴
//     res.send('고양이')        
// })

app.listen(port, () => {         
  console.log(`Example app listening on port ${port}`)    
})



