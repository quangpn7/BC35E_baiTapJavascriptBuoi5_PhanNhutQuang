/** BÀI 1: QUẢN LÝ TUYỂN SINH
 * - GIẢ SỬ: Người dùng nhập điểm 3 môn thi, điểm chuẩn của hội đồng thi, khu vực và đối tượng dự thi. Chương tình sẽ tổng điểm và báo kết quả cho người dùng.
 * - ĐẦU VÀO:
 * + Điểm 3 môn thi tương ứng với testScore1, testScore2, testScore3
 * + Điểm chuẩn của hội đồng thi: standardScore 
 * + Điểm ưu tiên theo khu vực (areaScore) X, A, B, C tương ứng với 2, 1, 0.5
 * + Điểm đối tượng (advaScore) 1, 2, 3 tương ứng với 2.5, 1.5 và 1
 *- XỬ LÝ: 
   +Tạo ra 1 function có các chức năng sau:
   1. Kiểm tra các môn có điểm bằng 0 hay không. Nếu có thì return ngay và báo trượt
   2. Nếu không có điểm nào bằng 0 thì tính tổng điểm 3 môn và các điểm khu vực, đối tượng
   + Tạo thêm một function khác để tính tổng điểm các điểm ưu tiên
   +Tiếp tục tạo 1 function khác có chúc năng so sánh và báo kết quả
  - ĐẦU RA: kết quả

 */

//Function 1: Kiểm tra chất lượng đầu số nhập vào hệ thống
function validScore(testScore1, testScore2, testScore3, standardScore) {
  if (testScore1 == 0 || testScore2 == 0 || testScore3 == 0) {
    return (result =
      "Bạn đã trượt do có điểm <span class='text-danger'>0</span>");
  } else if (
    (testScore1 > 10 && testScore1 !== 0) ||
    (testScore2 > 10 && testScore2 !== 0) ||
    (testScore3 > 10 && testScore3 !== 0)
  ) {
    return (result =
      "Ban đã nhập sai điểm (Điểm phải là <span class='text-danger'>số dương bé hơn hoặc bằng 10</span>)");
  } else if (standardScore > 34.5) {
    return (result =
      "Điểm chuẩn của bạn đã vượt quá điểm tối đa thí sinh có thể đạt được (Điểm chuẩn <span class='text-danger'>nhỏ hơn hoặc bằng 34.5</span>");
  } else {
    return (result = testScore1 + testScore2 + testScore3);
  }
}
//Function 2: Tính tổng điểm ưu tiên
function scoreAdvancedCalc(areaScore, advaScore) {
  if (areaScore == "0.5") {
    areaScore = 0.5;
  } else if (areaScore == "2") {
    areaScore = 2;
  } else if (areaScore == "1") {
    areaScore = 1;
  } else {
    areaScore = 0;
  }
  if (advaScore == "2.5") {
    advaScore = 2.5;
  } else if (advaScore == "1.5") {
    advaScore = 1.5;
  } else if (advaScore == "1") {
    advaScore = 1;
  } else {
    advaScore = 0;
  }
  scoreAdTotal = areaScore + advaScore;
  return scoreAdTotal;
}
//Function 3: So sánh điểm và báo kết quả
function resultRun() {
  var testScore1 = document.getElementById("testScore1").value * 1;
  var testScore2 = document.getElementById("testScore2").value * 1;
  var testScore3 = document.getElementById("testScore3").value * 1;
  var standardScore = document.getElementById("standardScore").value * 1;
  //Sử dụng function 1 với các biến vừa gán
  var testTotalScore = validScore(
    testScore1,
    testScore2,
    testScore3,
    standardScore
  );
  //Nếu function 1 trả về dạng khác số thì return chương trình
  if (typeof testTotalScore != typeof 1) {
    return (document.getElementById(
      "finalDOM"
    ).innerHTML = `<p class='mb-0'>${result}</p>`);
  } else {
    //Nếu chương trình chay đến đây thì mới gọi function 2
    var areaScore = document.getElementById("areaScore").value;
    var advaScore = document.getElementById("objectStudent").value;
    var finalScore =
      testTotalScore + scoreAdvancedCalc(areaScore, advaScore) * 1;
    //Tạo thông báo kết quả
    if (finalScore >= standardScore) {
      result = "Bạn đã <span class='text-danger'>ĐẠT</span>";
    } else {
      result = "Bạn đã <span class='text-danger'>KHÔNG ĐẠT</span>";
    }
  }

  return (document.getElementById(
    "finalDOM"
  ).innerHTML = `Kết quả:<span class='text-danger'> ${finalScore}</span> → ${result}`);
}

/**BÀI 2: TÍNH TIỀN ĐIỆN ĐÃ TIÊU THỤ
 * -GIẢ SỬ: Người dùng nhập vào tên và số điện đã sử dụng (kW). Chương trình sẽ tính ra số tiền cần đóng.
 * -ĐẦU VÀO: người dùng nhập vào tên và số lượng kW đã sử dụng
 * -XỬ LÝ:
 * 1. Gán biến số kW vào usedKW
 * 3. Ta tính bằng công thức sau dựa vào trường hợp tương ứng
 * +TH1: kw > 350
 * tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (usedKw - 350) * 1300
  +TH2 kw <= 350 và kw > 300
  tongTien = 50 * 500 + 50 * 650 + (usedKw - 100) * 850
  +TH3 kw <= 100 và kw > 50
   tongTien = 50 * 500 + (usedKw - 50) * 650
   +TH4 kw <= 50 hoăc else
   tongTien = usedKw *500

 * LƯU Ý: Để phép tính không bị lỗi ta sẽ if else để đảm bảo rằng số nhập vào khác 0 và nhỏ hơn 0
 * ĐẦU RA: tongTien
 */
//Function 1: Tính tổng tiền
function tongTien(usedKw) {
  var tongTien;
  if (usedKw <= 0) {
    return;
  } else if (usedKw > 350) {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (usedKw - 350) * 1300;
    return tongTien;
  } else if (usedKw <= 350 && usedKw > 100) {
    tongTien = 50 * 500 + 50 * 650 + (usedKw - 100) * 850;
    return tongTien;
  } else if (usedKw <= 100 && usedKw > 50) {
    tongTien = 50 * 500 + (usedKw - 50) * 650;
    return tongTien;
  } else {
    tongTien = usedKw * 500;
    return tongTien;
  }
}
//Function 2: Tạo kết quả
function ketQuaTongTien() {
  var currentFormat = new Intl.NumberFormat("VN-vn");
  var name = document.getElementById("name").value;
  //Gán resultKw = function 1 với param được DOM trực tiếp từ web
  var resultKw = currentFormat.format(
    tongTien(document.getElementById("usedKw").value * 1)
  );
  if (resultKw == "NaN") {
    document.getElementById(
      "usedResult"
    ).innerHTML = `Số bạn nhập không hợp lệ`;
  } else
    document.getElementById(
      "usedResult"
    ).innerHTML = `Họ tên: <span class='text-danger'>${name}</span>; Tiền điện: <span class='text-danger'>${resultKw} VND</span>`;
}
