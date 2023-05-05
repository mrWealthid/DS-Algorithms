const { ajax } = rxjs.ajax;
const {
  range,
  filter,
  map,
  pipe,
  of,
  from,
  forkJoin,
  count,
  catchError,
  fromEvent,
  takeUntil,
  interval,
  reduce,
  Subject,
  shareReplay,
  pluck,
  groupBy,
  mergeMap,
  toArray,
} = rxjs;

//==========> Creating an observable stream
const demoObservable = from([50, 20, 40, 80, 100, 125]);
const obs2 = of([50, 20, 40, 80, 100]);

//Mastering RXJS with comparison to promise combinators

//Pipe ==> They mean what they are called and can be used to transform and transfer streams; You can have several pipes

//DIfference between of() and from() =>> from emits one value at a time while of emits the entire array
demoObservable.subscribe((x) => console.log(x));
demoObservable.pipe(map((x) => x + 23)).subscribe((res) => console.log(res));
obs2.subscribe((x) => console.log(x));

//Count Operator ==> Used to count emission too

demoObservable.pipe(count()).subscribe((x) => console.log(x));

range(1, 10)
  .pipe(count((x) => x % 2 === 0))
  .subscribe((x) => console.log("Count multiples of 2 between 1-10", x));

range(1, 10)
  .pipe(count((x) => x % 2 !== 0))
  .subscribe((x) => console.log("Count non-multiples between 1-10", x));

//reduce operator

const seed = 0;
const counts = demoObservable.pipe(reduce((acc, one) => acc + one, seed));

counts.subscribe((x) => console.log(x));

//share Replay
const data$ = new Subject();

data$.pipe(shareReplay(1));

data$.subscribe(console.log);

data$.next({ data: [], url: "remitaNet" });

data$.subscribe(console.log);

//Transformation Operators
//GroupBy

const people = [
  { name: "Sue", age: 25 },
  { name: "Joe", age: 30 },
  { name: "Frank", age: 25 },
  { name: "Sarah", age: 35 },
];
//emit each person
const source = from(people);

const example = source.pipe(
  groupBy((person) => person.age),
  // return each item in group as array
  mergeMap((group) => group.pipe(toArray()))
);

example.subscribe((x) => console.log("The data", x));
