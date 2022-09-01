/** BÀI 1: QUẢN LÝ TUYỂN SINH
 * - GIẢ SỬ: Người dùng nhập điểm 3 môn thi, điểm chuẩn của hội đồng thi, khu vực và đối tượng dự thi. Chương tình sẽ tổng điểm và báo kết quả cho người dùng.
 * - ĐẦU VÀO:
 * + Điểm 3 môn thi tương ứng với testScore1, testScore2, testScore3
 * + Điểm chuẩn của hội đồng thi: standardScore 
 * + Điểm ưu tiên theo khu vực (areaScore) X, A, B, C tương ứng với 2, 1, 0.5
 * + Điểm đối tượng (advaScore) 1, 2, 3 tương ứng với 2.5, 1.5 và 1
 *- XỬ LÝ: 
   Tạo ra 1 function có các chức năng sau:
   1. Kiểm tra các môn có điểm bằng 0 hay không. Nếu có thì return ngay và báo trượt
   2. Nếu không có điểm nào bằng không thì tính tổng điểm 3 môn và các điểm khu vực, đối tượng
   3. So sánh với điểm chuẩn để trả về trượt hay rớt.
   4.DOM KẾT QUẢ
  - ĐẦU RA: kết quả

 */

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

function resultRun() {
  var testScore1 = document.getElementById("testScore1").value * 1;
  var testScore2 = document.getElementById("testScore2").value * 1;
  var testScore3 = document.getElementById("testScore3").value * 1;
  var standardScore = document.getElementById("standardScore").value * 1;

  var testTotalScore = validScore(
    testScore1,
    testScore2,
    testScore3,
    standardScore
  );

  if (typeof testTotalScore != typeof 1) {
    return (document.getElementById(
      "finalDOM"
    ).innerHTML = `<p class='mb-0'>${result}</p>`);
  } else {
    var areaScore = document.getElementById("areaScore").value;
    var advaScore = document.getElementById("objectStudent").value;
    var finalScore =
      testTotalScore + scoreAdvancedCalc(areaScore, advaScore) * 1;

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
