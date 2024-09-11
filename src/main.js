const studentCreatForm = document.getElementById('student-create-form')
const studentDataList = document.getElementById('student-data-list')
const studentResultForm = document.getElementById('student-result-mark')
const resultSearchForm = document.getElementById('result-search-form')
const studentResultDastaview = document.getElementById('student-result-views')

const msg = document.querySelector('.msg')
const btnClose = document.querySelectorAll('.btn-close')

/**
 * Show all Data
 */
const getAllStudentData = () => {
    // get all student data get form localstorags
    const data = JSON.parse(localStorage.getItem('students'))
    let listData = ""
    if (data) {
        data.reverse().map((item, indext) => {
            listData += `
        <tr>
        <td>${indext + 1}</td>
        <td>${item.name}</td>
        <td>${item.roll}</td>
        <td>${item.reg}</td>
        <td>${item.board}</td>
        <td>${timeAgo(item.createdAt)}</td>
        
       <td>
          ${item.results
                    ? '<button class="btn btn-sm btn-success" onclick="getViewResultData(\'' +
                    item.id +
                    '\')" data-bs-toggle="modal" data-bs-target="#student-result-view">View Result</button>'
                    : '<button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#student-result-form" onclick="addStudentResultModal(\'' +
                    item.id +
                    "')\">Add Result</button>"
                }
            
          </td>
        
        </td>
        <td>
        <button class="btn btn-sm btn-info"><i class="fa fa-eye"></i></button>
         <button class="btn btn-sm btn-warning" ><i class="fa fa-edit"></i></button>
          <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
        </td>
        </tr>
        `
        })
    }
    else {

    }
    studentDataList.innerHTML = listData
}
getAllStudentData()


/*
 * Submir creat Student 
 */
studentCreatForm.onsubmit = (e) => {
    e.preventDefault()
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data.entries())

   
    /**
   * form viledition
   */
    if (

        !data.name || !data.father|| !data.mother || !data.dob||!data.roll || !data.reg || !data.inst || !data.board ||!data.year || !data.exam || !data.group) {
        msg.innerHTML = createAlert('All Fialds Required')
    }
     else {

        let oldData = [];
        /**
         * check old Data exist or out
         */

        if (localStorage.getItem("students")) {
            oldData = JSON.parse(localStorage.getItem("students"))
        }
        
            oldData.push({
                ...data,
                id: createID(),
                createdAt: Date.now(),
                updatedAt: null,
                results: null,
            });
            
        // phus dat oldDAta
       

        // sent data to localstorage
        localStorage.setItem("students", JSON.stringify(oldData))
        e.target.reset()
        btnClose.forEach((item) => item.click());
        getAllStudentData()
    }

}



function timeAgo(timestamp) {
    const seconds = Math.floor((new Date() - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " y ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " mon ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " da ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hou ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " min ago";
    }
    return Math.floor(seconds) + " sec ago";
};

/**
 * Add Student modal
 * @param {*} id 
 */
function addStudentResultModal(id) {
    studentResultForm.querySelector('input[name="id"]').value = id;
}

/**
 * Sudent result
 * @param {*} e 
 */
studentResultForm.onsubmit = (e) => {
    e.preventDefault()
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries())


    // Get Data ls

    const students = JSON.parse(localStorage.getItem("students"))

    //  add Result 
    const upDateData = students.map((item) => {
        console.log(item)
        if (item.id == data.id) {
            return {
                ...item,

                results: {
                    bangla: data.bangla,
                    bangla2: data.bangla2,
                    english: data.english,
                    english2: data.english2,
                    math: data.math,
                    science: data.science,
                    science2: data.science2,
                    social: data.social,
                    social2: data.social2,
                    ict: data.ict,
                },
            };
        } else {
            return item;
        }
    });

    // now update LS
    localStorage.setItem("students", JSON.stringify(upDateData));

    e.target.reset()
    btnClose.forEach((item) => item.click());
    getAllStudentData()

}

const getViewResultData = (id) => {

    const studentData = JSON.parse(localStorage.getItem("students"));
    const viewData = studentData.find((data) => data.id == id)

    studentResultDastaview.querySelector('input[name="bangla"]').value = viewData.results.bangla
    studentResultDastaview.querySelector('input[name="bangla2"]').value = viewData.results.bangla2
    studentResultDastaview.querySelector('input[name="english"]').value = viewData.results.english
    studentResultDastaview.querySelector('input[name="english2"]').value = viewData.results.english2
    studentResultDastaview.querySelector('input[name="math"]').value = viewData.results.math
    studentResultDastaview.querySelector('input[name="science"]').value = viewData.results.science
    studentResultDastaview.querySelector('input[name="science2"]').value = viewData.results.science2
    studentResultDastaview.querySelector('input[name="social"]').value = viewData.results.social
    studentResultDastaview.querySelector('input[name="social2"]').value = viewData.results.social2
    studentResultDastaview.querySelector('input[name="ict"]').value = viewData.results.ict
    studentResultDastaview.querySelector('input[name="id"]').value = id
}

/**
 * submit View Result sumit 
 */

studentResultDastaview.onsubmit = (e) => {
    e.preventDefault();




    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data)
    // updat data Result
    const oldDAta = JSON.parse(localStorage.getItem("students"));
    const upDateData = ((item) => {
        if (item.id == data.id) {
            return {
                ...item,
                results: {
                    bangla: data.bangla,
                    bangla2: data.bangla2,
                    english: data.english,
                    english2: data.english2,
                    math: data.math,
                    science: data.science,
                    science2: data.science2,
                    social: data.social,
                    social2: data.social2,
                    ict: data.ict,
                }
            }

        } else {
            return item;
        }


    })
    localStorage.setItem("students", JSON.stringify(upDateData))
    // e.target.reset()
    btnClose.forEach((item) => item.click());
    getAllStudentData()


}

