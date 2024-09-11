const resultSearchForm = document.getElementById('result-search-form')
const eduPzlLabel = document.getElementById('edu-pzl')
const eduBody = document.querySelector('.edu-body')



let pzl1 = getRandomNumber()
let pzl2 = getRandomNumber()


localStorage.setItem("edu_pzl", JSON.stringify({ a: pzl1, b: pzl2 }))
eduPzlLabel.innerHTML = `${pzl1} + ${pzl2}`

resultSearchForm.onsubmit = (e) => {
  e.preventDefault()

  const form_data = new FormData(e.target)
  const data = Object.fromEntries(form_data.entries())

  const edupzl = JSON.parse(localStorage.getItem("edu_pzl"))
  const students = JSON.parse(localStorage.getItem("students"))


  // check pzl 

  if (edupzl.a + edupzl.b !== parseInt(data.pzl)) {
    alert("not pzl")
  }
  else {

    const searchData = students.find(
      (item) =>
        item.roll == data.roll &&
        item.reg == data.reg &&
        item.exam == data.examinetion &&
        item.board == data.board &&
        item.year == data.year
    );

    if (searchData) {
      localStorage.setItem("searchData", JSON.stringify(searchData))
      eduBody.innerHTML = `
          <img src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1" />
        `
      setInterval(() => {

        window.location.href = "/result.html"
      }, 3000);

    }
    else {
      alert("Not Found Result")
    }

  }
}


