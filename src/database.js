


import fs from 'fs'

 
// fs.readFile('testcase.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString().split("\n"));
// })



let sub_data = [
  {
    id: "3324",
    cat_name: 'Geting started',
    qus_list: [{
      id: "4322",
      qus_name: "Print Z",
      Created_by: 'Amit',
      time: 'dec',
      cats: 'eassy',
    },]
  },
  

  {
    id: "3325",
    cat_name: '2d arrays',
    qus_list: [{
      id: "5322",
      qus_name: "2d Arrays Demo Easy",
      Created_by: 'Amit',
      time: 'jan',
      cats: 'medium',
    },]
  },

  {


  }
 ]


export const main_data = [ 
  {
     cat:"basic Programing",
     sub_cat_list:[{name:"Geting started",id:"3324"},{name:"2d arrays",id:"3325"}],
  }
  , 
]






let qus_data = [ {
    id: "4322",
    qus_information: {
      text1: [],
      text2: [],
      text3: [],
      text4: [],
      text5: [],
      text6: [],
    },
    soluton_code: "console.log(yes)",
    test_cases: {
      test_cases_in: ['2', '3', '5', '7'],
      text_cases_out: ['res1', 'res2', 'res3', 'res4'],
    }
  }
]


export let test_cases={
  qus_id:"",
  input:[[43],[54],[76],[87],[65]],
  output:[["below par"],["below par"],["fair"],["good"],["meets expectations"]],
}






export const get_qus_list=(id)=>{
let arr= sub_data.filter((ele)=>{
         if(ele.id==id)
         {
          return ele
         }
      })
      return arr[0].qus_list;
}




export const get_qus_info=(id)=>{
   let arr= qus_data.filter((ele)=>{
    if(ele.id==id)
    {
      return ele;
    }
   })
   return arr[0];
}






let mylist = get_qus_list(3324);
let qus_info=  get_qus_info(4322)

console.log(qus_info);