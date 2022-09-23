function main(depth) {
  depth = parseInt(depth);
  //your code goes here
  var climb = 0;
  var days = 0;
  while (climb < depth) {
    days++;
    climb += 7;

    if (climb >= depth) {
      break;
    }

    climb -= 2;
  }

  console.log(days);
}

main(31);
