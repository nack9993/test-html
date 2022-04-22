$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");

  const answerList = {
    first_answer: "",
    second_answer: "",
    third_answer: "",
  };

  Object.entries(answerList).forEach((item) => {
    const [key] = item;

    const answer = document.getElementById(key);

    console.log(answer.children.length);

    for (var i = 0; i < answer.children.length; i++) {
      const choice = answer.children[i];

      choice.addEventListener("click", () => {
        answerList[key] = choice.id;
        console.log("selected");
        console.log(answerList);
      });
    }
  });

  const show = document.getElementById("show");

  show.addEventListener("click", (e) => {
    const isEmpty = Object.values(answerList).every((x) => {
      return x === null || x === "";
    });

    if (isEmpty) {
      alert("Not finished");
    } else {
      const lose_one = Object.values(answerList).every((x) => {
        return x === "a";
      });

      const lose_two = Object.values(answerList).every((x) => {
        return x === "b";
      });

      const lose_two_directly = answerList.third_answer === "a";
      console.log(lose_two_directly);

      if (lose_two_directly) {
        alert("GO LOSE B Directly");
        return;
      }

      if (lose_one) {
        alert("GO LOSE A");
        return;
      }

      if (lose_two) {
        alert("GO LOSE B");
        return;
      }

      alert("WIN");

      console.log(lose_one);
    }

    console.log(isEmpty);
  });
});
