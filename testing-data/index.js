const Stripe = require("./node_modules/stripe");

const stripe = Stripe(
  "sk_test_51N2dv9BFw2p3fKIl5mKN5A4eldF6evPa4vLqrSDHq1fKpejNY8pI8RUxiBW6sQeGfBKiOlzoJCa0wABjkdf4XKPI001jRggSCM"
);

const QUESTION_API = "";

//////Double Nested destructuring
//let item = {name : {first:  'wealth', last : "Iduwe"}}
// const {
//   name: { first, name },
// } = item;

const { range, filter, map } = rxjs;
// const demoObservable = rxjs.of(50);

range(1, 200)
  .pipe(
    // filter((x) => x % 2 === 1),
    map((x) => x + x)
  )
  .subscribe((x) => console.log(x));

// demoObservable.subscribe((res) => console.log(res));
const containerDiv = document.getElementById("markup");
containerDiv.classList.add("row");

//Merging two arrays with the same id
//let newArray = []
// for (let item of data) {
//   data2.forEach((items) =>
//     items.id == item.id ? newArray.push({ ...item, ...items }) : item
//   );
// }

const questions = [
  {
    questionId: "blog-post",
    status: "CORRECT",
  },
  {
    questionId: "throttle",
    status: "INCORRECT",
  },
  {
    questionId: "stopwatch",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "pig-emoji",
    status: "CORRECT",
  },
  {
    questionId: "todo-list",
    status: "CORRECT",
  },
  {
    questionId: "testing-framework",
    status: "CORRECT",
  },
  {
    questionId: "array-methods",
    status: "INCORRECT",
  },
  {
    questionId: "spaghetti-recipe",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "algoexpert-products",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "curry",
    status: "CORRECT",
  },
  {
    questionId: "toasts",
    status: "INCORRECT",
  },
  {
    questionId: "tic-tac-toe",
    status: "CORRECT",
  },
  {
    questionId: "event-target",
    status: "CORRECT",
  },
  {
    questionId: "debounce",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "item-cart",
    status: "CORRECT",
  },
  {
    questionId: "typeahead",
    status: "CORRECT",
  },
  {
    questionId: "tier-list",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "sudoku",
    status: "CORRECT",
  },
  {
    questionId: "rainbow-circles",
    status: "INCORRECT",
  },
  {
    questionId: "infinite-scroll",
    status: "CORRECT",
  },
  {
    questionId: "navbar",
    status: "PARTIALLY_CORRECT",
  },
];
const courses = [
  {
    id: "sign-up-form",
    name: "Sign-Up Form",
    category: "HTML",
  },
  {
    id: "item-cart",
    name: "Item Cart",
    category: "HTML",
  },
  {
    id: "spaghetti-recipe",
    name: "Spaghetti Recipe",
    category: "HTML",
  },
  {
    id: "blog-post",
    name: "Blog Post",
    category: "HTML",
  },
  {
    id: "rainbow-circles",
    name: "Rainbow Circles",
    category: "CSS",
  },
  {
    id: "navbar",
    name: "Navbar",
    category: "CSS",
  },
  {
    id: "pig-emoji",
    name: "Pig Emoji",
    category: "CSS",
  },
  {
    id: "purchase-form",
    name: "Purchase Form",
    category: "CSS",
  },
  {
    id: "algoexpert-products",
    name: "AlgoExpert Products",
    category: "CSS",
  },
  {
    id: "testing-framework",
    name: "Testing Framework",
    category: "JavaScript",
  },
  {
    id: "array-methods",
    name: "Array Methods",
    category: "JavaScript",
  },
  {
    id: "event-target",
    name: "Event Target",
    category: "JavaScript",
  },
  {
    id: "debounce",
    name: "Debounce",
    category: "JavaScript",
  },
  {
    id: "this-binding",
    name: "This Binding",
    category: "JavaScript",
  },
  {
    id: "promisify",
    name: "Promisify",
    category: "JavaScript",
  },
  {
    id: "throttle",
    name: "Throttle",
    category: "JavaScript",
  },
  {
    id: "curry",
    name: "Curry",
    category: "JavaScript",
  },
  {
    id: "infinite-scroll",
    name: "Infinite Scroll",
    category: "DOM Manipulation",
  },
  {
    id: "stopwatch",
    name: "Stopwatch",
    category: "DOM Manipulation",
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    category: "DOM Manipulation",
  },
  {
    id: "todo-list",
    name: "Todo List",
    category: "DOM Manipulation",
  },
  {
    id: "typeahead",
    name: "Typeahead",
    category: "DOM Manipulation",
  },
  {
    id: "tier-list",
    name: "Tier List",
    category: "DOM Manipulation",
  },
  {
    id: "toasts",
    name: "Toasts",
    category: "DOM Manipulation",
  },
  {
    id: "sudoku",
    name: "Sudoku",
    category: "DOM Manipulation",
  },
  {
    id: "questions-list",
    name: "Questions List",
    category: "DOM Manipulation",
  },
];

async function fetchCourses() {
  return Promise.resolve(courses);
}

async function fetchQuestions() {
  return Promise.resolve(questions);
}

async function mergeById() {
  const [courses, questions] = await Promise.all([
    fetchCourses(),
    fetchQuestions(),
  ]);

  ///This merges two different arrays based on their Id ----NOTE THIS
  return courses.reduce((state, action) => {
    questions.forEach((question) =>
      question.questionId === action.id
        ? state.push({ ...action, status: question.status })
        : action
    );

    return state;
  }, []);
}

async function groupByCategory() {
  const response = await mergeById();
  return response.reduce((state, action) => {
    if (state.hasOwnProperty(action.category)) {
      state[action.category].push(action);
    } else {
      state[action.category] = [action];
    }

    return state;
  }, {});
}

displayMarkup();

////////First SOlution
//using document create

// function createCategory(category, questions) {
//   const categoryDiv = document.createElement("div");
//   categoryDiv.classList.add("category");

//   const h2 = document.createElement("h2");
//   h2.textContent = category;
//   categoryDiv.append(h2);

//   questions.forEach((el) => {
//     const questionDiv = document.createElement("div");
//     questionDiv.classList.add("question");
//     const p = document.createElement("p");
//     p.textContent = el.name;
//     questionDiv.append(p);
//     categoryDiv.append(questionDiv);
//   });
//   return categoryDiv;
// }

// function displayMarkup() {
//   const transformed = groupByCategory();
//   for (let [key, value] of Object.entries(transformed)) {
//     const catDiv = createCategory(key, value);
//     containerDiv.append(catDiv);
//   }
// }

////////////////////////////////////////////////////////
///Second Solution

// function createCategory(category, questions) {
//   let categoryDiv = `<div> <h2> ${category}</h2>`;

//   questions.forEach((el) => {
//     categoryDiv += `<div>
// <p> ${el.name} </p>
//         </div>`;
//   });
//   return categoryDiv + "</div>";
// }

// function displayMarkup() {
//   const transformed = groupByCategory();
//   for (let [key, value] of Object.entries(transformed)) {
//     const catDiv = createCategory(key, value);
//     containerDiv.innerHTML += catDiv;
//   }
// }

//////////////////////////////////////////////////////////////////////////
//////Third Solution in one loop

function checkStatus(val) {
  if (/^Correct/i.test(val)) {
    return "correct";
  } else if (/^partially_correct/i.test(val)) {
    return "partially-correct";
  } else {
    return "incorrect";
  }
}

async function displayMarkup() {
  const transformed = await groupByCategory();

  // const transformed2 = sortObjByKeys(transformed);

  console.log(transformed);

  for (key in transformed) {
    let categoryDiv = `<div class='card'> <h2> ${key}</h2> `;
    transformed[key].forEach((el) => {
      categoryDiv += `
      <section class='card-row'>

     <p class=${checkStatus(el.status)}> status </p> 
<p> ${el.name} </p>

<p> ${el.category} </p>
      </section>  `;
    });
    containerDiv.innerHTML += categoryDiv + `</div>`;
  }
}

/////////////////// SORT Object BY KEYS

function sortObjByKeys(obj) {
  // console.log(obj);

  console.log(Object.keys(obj).sort());

  const sorted = Object.keys(obj)
    .sort()
    .reduce((state, action) => {
      state[action] = obj[action];
      return state;
    }, {});

  console.log(sorted);

  return sorted;
}

async function fetchTours() {
  const res = await fetch("http://127.0.0.1:3000/api/v1/tours");
  const data = await res.json();

  console.log(data);
}

fetchTours();

const bookTour = async (tourId) => {
  try {
    //1 Get checkout session from API

    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
      {
        Headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOGExZDViMDE5MGIyMTQzNjBkYzA1NyIsImlhdCI6MTY4MzEyODI5OCwiZXhwIjoxNjgzMTI5NDk4fQ.3LA8T8ni6B-ch_UlAry51tZv6f3hNy9wbo0IHuauhXw",
        },
      }
    );
    console.log(session);
    //2 Create checkout form + charge credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};

bookTour("5c88fa8cf4afda39709c2955");
