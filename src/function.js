// Jenalel function
/**
 * Creat dinamic Id
 */
const createID = () => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
    });
    const processId = (Math.floor(Math.random() * 1000) % 1000)
        .toString(16)
        .padStart(3, "0");
    const counter = ((Math.random() * 16777216) | 0)
        .toString(16)
        .padStart(6, "0");

    return timestamp + machineId + processId + counter;
};
/**
 * create Alart
 * @param {*} msg 
 * @param {Storage} type 
 * @returns 
 */
const createAlert = (msg, type = "danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
  };

//   time age

  
  const timeSayed = (postDate) => {
    const currentDate = new Date();
    const diff = currentDate - postDate;
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 7) {
      return postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } else if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return "Yesterday";
    } else if (hours >= 1) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes >= 1) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };
  
  const getGradeAndGPA = (mark) => {
    let grade;
    let gpa;
  
    if (mark >= 0 && mark < 33) {
      grade = "F";
      gpa = 0;
    } else if (mark >= 33 && mark < 39) {
      grade = "D";
      gpa = 1;
    } else if (mark >= 40 && mark < 49) {
      grade = "C";
      gpa = 2;
    } else if (mark >= 50 && mark < 59) {
      grade = "B";
      gpa = 3;
    } else if (mark >= 60 && mark < 69) {
      grade = "A-";
      gpa = 3.5;
    } else if (mark >= 70 && mark < 79) {
      grade = "A";
      gpa = 4;
    } else if (mark >= 80 && mark <= 100) {
      grade = "A+";
      gpa = 5;
    } else {
      grade = "invalid";
      gpa = "invalid";
    }
  
    return {
      gpa: gpa,
      grade: grade,
    };
  };
  
  const resultSystemPro = (marks) => {
    const { bangla,bangla2, english,english2, math, science,science2,social,social2, reli } = marks;
  
    const totalGpaAvg = (
      (getGradeAndGPA(bangla).gpa +
      getGradeAndGPA(bangla2).gpa +
        getGradeAndGPA(english).gpa +
        getGradeAndGPA(english2).gpa +
        getGradeAndGPA(math).gpa +
        getGradeAndGPA(science).gpa +
        getGradeAndGPA(science2).gpa +
        getGradeAndGPA(social).gpa +
        getGradeAndGPA(social2).gpa +
        getGradeAndGPA(reli).gpa) /
      10
    ).toFixed(2);
  
    if (
      bangla >= 33 &&
      bangla2 >=22 &&
      english >= 33 &&
      english2 >=33 &&
      math >= 33 &&
      science >= 33 &&
      science2 >= 33 &&
      social >= 33 &&
      social2>=33 &&
      reli >= 33
    ) {
      if (totalGpaAvg >= 0 && totalGpaAvg < 1) {
        return {
          gpa: totalGpaAvg,
          grade: `<span class="text-danger">FIELD</span>`,
        };
      } else if (totalGpaAvg >= 1 && totalGpaAvg < 2) {
        return {
          gpa: totalGpaAvg,
          grade: "PASS",
        };
      } else if (totalGpaAvg >= 2 && totalGpaAvg < 3) {
        return {
          gpa: totalGpaAvg,
          grade: "PASS",
        };
      } else if (totalGpaAvg >= 3 && totalGpaAvg < 3.5) {
        return {
          gpa: totalGpaAvg,
          grade: "PASS",
        };
      } else if (totalGpaAvg >= 3.5 && totalGpaAvg < 4) {
        return {
          gpa: totalGpaAvg,
          grade: "PASS",
        };
      } else if (totalGpaAvg >= 4 && totalGpaAvg < 5) {
        return {
          gpa: totalGpaAvg,
          grade: "PASS",
        };
      } else if (totalGpaAvg >= 5) {
        return {
          gpa: totalGpaAvg,
          grade: "PASS",
        };
      }
    } else {
      return {
        gpa: 0,
        grade: `<span class="text-danger">FIELD</span>`,
      };
    }
  };
  
  
function timeAgo  (timestamp){
    const seconds = Math.floor((new Date() - timestamp) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  };
// Rodemo number
/**
 * Get one number
 */
const getRandomNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
};
 






