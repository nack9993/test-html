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
      console.log(key);

      choice.addEventListener("click", () => {
        if (choice.id === "a") {
          $(`#${key} #a`).addClass("active");
          $(`#${key} #b`).removeClass("active");
        } else {
          $(`#${key} #b`).addClass("active");
          $(`#${key} #a`).removeClass("active");
        }
        answerList[key] = choice.id;
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
        localStorage.setItem("n-land", "lose-2");
        window.location.href = "NlandResult.html";
        return;
      }

      if (lose_one) {
        alert("GO LOSE A");
        localStorage.setItem("n-land", "lose-1");
        window.location.href = "NlandResult.html";
        return;
      }

      if (lose_two) {
        alert("GO LOSE B");
        localStorage.setItem("n-land", "lose-2");
        window.location.href = "NlandResult.html";
        return;
      }

      alert("WIN");
      localStorage.setItem("n-land", "win");
      window.location.href = "NlandResult.html";

      console.log(lose_one);
    }

    console.log(isEmpty);
  });
});
