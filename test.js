it.concurrent.only("test 1", function() {
  console.log("test 1");
});

it.concurrent("test 2", function() {
  console.log("test 2");
});
