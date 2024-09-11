const markSheet = document.getElementById('mark-sheet')

//  Ger search Result

const searchData = JSON.parse(localStorage.getItem("searchData"))


if (!searchData) {
    window.location.href = "/index.html"
    
}


markSheet.innerHTML = `
 <div class="result-sheet">
                    <h2>SSC/HSC/Equivlent/Result</h2>
                    <div class="edu-student-info">
                        <table>
                            <tr>
                                <td>Roll No</td>
                                <td>${searchData.roll}</td>
                                <td>Name</td>
                                <td>${searchData.name}</td>
                            </tr>
                            <tr>
                                <td>Board</td>
                                <td>${searchData.board}</td>
                                <td>Fateer's Name</td>
                                <td>${searchData.father}</td>
                            </tr>
                            <tr>
                                <td>Group</td>
                                <td>${searchData.group}</td>
                                <td>Mother's Name</td>
                                <td>${searchData.mother}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>${searchData.type}</td>
                                <td>Date of Birth</td>
                                <td>${searchData.dob}</td>
                            </tr>
                            <tr>
                                <td>Result</td>
                                <td>${resultSystemPro({
                                    bangla:searchData.results.bangla,
                                    bangla2:searchData.results.bangla2, 
                                    english:searchData.results.english,
                                    english2:searchData.results.english2,
                                    math:searchData.results.math,
                                    science:searchData.results.social,
                                    science2:searchData.results.social2,
                                    social:searchData.results.science,
                                    social2:searchData.results.science2, 
                                    reli:searchData.results.ict,
                                }).grade}</td>
                                <td>Institut</td>
                                <td>${searchData.inst}</td>
                            </tr>
                            <tr>
                                <td>GPA</td>
                                <td colspan="3">
                                ${resultSystemPro({
                                    bangla:searchData.results.bangla,
                                    bangla2:searchData.results.bangla2, 
                                    english:searchData.results.english,
                                    english2:searchData.results.english2,
                                    math:searchData.results.math,
                                    science:searchData.results.social,
                                    science2:searchData.results.social2,
                                    social:searchData.results.science,
                                    social2:searchData.results.science2, 
                                    reli:searchData.results.ict,
                                }).gpa}
                                </td>
                            </tr>
                        </table>

                    </div>

                    <div class="gpa-sheet">
                        <h2>Grade SHEET</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Coad</th>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                    <th>GPA</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1111</td>
                                    <td>Bangla-1</td>
                                    <td>${getGradeAndGPA(searchData.results.bangla).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.bangla).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1112</td>
                                    <td>Bangla-2</td>
                                    <td>${getGradeAndGPA(searchData.results.bangla2).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.bangla2).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1114</td>
                                    <td>English-1</td>
                                    <td>${getGradeAndGPA(searchData.results.english).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.english).gpa}</td>
                                </tr>
                                <tr>
                                    <td>11113</td>
                                    <td>English-2</td>
                                    <td>${getGradeAndGPA(searchData.results.english2).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.english2).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1115</td>
                                    <td>Mathematics</td>
                                    <td>${getGradeAndGPA(searchData.results.math).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.math).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1116</td>
                                    <td>Social science-1</td>
                                    <td>${getGradeAndGPA(searchData.results.social).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.social).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1117</td>
                                    <td>Social science-2</td>
                                    <td>${getGradeAndGPA(searchData.results.social2).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.social2).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1118</td>
                                    <td>Economics-1</td>
                                    <td>${getGradeAndGPA(searchData.results.science).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.science).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1119</td>
                                    <td>Economics-2</td>
                                    <td>${getGradeAndGPA(searchData.results.science2).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.science2).gpa}</td>
                                </tr>
                                <tr>
                                    <td>1120</td>
                                    <td>Information and Communications Technology</td>
                                    <td>${getGradeAndGPA(searchData.results.ict).grade}</td>
                                    <td>${getGradeAndGPA(searchData.results.ict).gpa}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <a href="" onclick="goToSearchPage()" >Search Agrng</a>

                </div>
`

const goToSearchPage = () => {
    localStorage.removeItem("searchData");
    window.location.href = "/index.html";
  };

  