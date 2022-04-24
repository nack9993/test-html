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

    for (var i = 0; i < answer.children.length; i++) {
      const choice = answer.children[i];

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

      if (lose_two_directly) {
        localStorage.setItem("m-land", "lose-2");
        window.location.href = "MlandResult.html";
        return;
      }

      if (lose_one) {
        localStorage.setItem("m-land", "lose-1");
        window.location.href = "MlandResult.html";
        return;
      }

      if (lose_two) {
        localStorage.setItem("m-land", "lose-2");
        window.location.href = "MlandResult.html";
        return;
      }

      localStorage.setItem("m-land", "win");
      window.location.href = "MlandResult.html";
    }
  });

  // SLIDER FUNCTION
  const slider = [
    { id: "#slide1", imageId: "#first-slide" },
    { id: "#slide2", imageId: "#second-slide" },
  ];

  slider.forEach(({ id, imageId }) => {
    $(id).click(() => {
      $(id).addClass("active");
      $(imageId).addClass("active");

      slider.map((item) => {
        if (item.id === id) return;
        $(item.id).removeClass("active");
        $(item.imageId).removeClass("active");
      });
    });
  });
});
